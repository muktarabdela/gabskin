import React, { useState } from 'react';
import axios1 from 'axios';
import axios from "../../Axios";
import { addToCart } from '../../store/CartSlice';
import miniStikcer from "../../../public/images/price3.jpg";
import {
    Card, CardHeader, CardBody, CardFooter, Typography,
} from "@material-tailwind/react";
import {
    Popover, PopoverHandler, PopoverContent, Button, Progress,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
const Custom = () => {
    const [images, setImages] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [price, setPrice] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [sizeError, setSizeError] = useState(null);
    const [imageError, setImageError] = useState(null);
    const dispatch = useDispatch();

    const handleSizeChange = (event) => {
        const newSize = event.target.value;
        setSelectedSize(newSize);
        setSizeError(null); // Reset size error

        if (newSize === 'small') {
            setPrice(45);
        } else if (newSize === 'medium') {
            setPrice(55);
        } else if (newSize === 'large') {
            setPrice(65);
        }
    };

    const handleImageChange = async (e) => {
        const files = e.target.files;
        setImageError(null);
        const processedImages = Array.from(files);
        try {
            const compressedImages = await Promise.all(
                processedImages.map(async (file) => {
                    // You can add compression logic here if needed
                    return file;
                })
            );
            setImages(compressedImages);
        } catch (error) {
            console.error('Error processing images:', error);
            setImages(processedImages); // Fallback to original images
        }
    };


    const handleUpload = async () => {
        if (!selectedSize) {
            setSizeError('Please select a size');
            return;
        } else {
            setSizeError(null);
        }

        if (!images || images.length === 0) {
            setImageError('Please select at least one image to upload');
            return;
        } else {
            setImageError(null);
        }

        setIsUploading(true);

        const formData = new FormData();
        const customStickerData = {
            price,
            size: selectedSize,
        };

        for (let i = 0; i < images.length; i++) {
            formData.append('file', images[i]);
            formData.append('upload_preset', 'sticker_upload');
            formData.append('folder', 'custom');

            try {
                const response = await axios1.post(
                    "https://api.cloudinary.com/v1_1/dcug2edrg/image/upload",
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );

                console.log(`Image ${i + 1} uploaded:`, response.data.secure_url);
                const customDataBase = await axios.put('/stickers/get-custom', {
                    imageUrl: response.data.secure_url,
                    ...customStickerData,
                });

                console.log(customDataBase.data.newSticker);
                dispatch(addToCart({
                    _id: customDataBase.data.newSticker._id,
                    price: customDataBase.data.newSticker.price,
                    size: customDataBase.data.newSticker.size,
                    quantity: 1,
                    category: customDataBase.data.newSticker.category,
                    imageUrl: customDataBase.data.newSticker.imageUrl,
                }));
                setIsPopoverOpen(false);

            } catch (error) {
                console.error(`Error uploading image ${i + 1}:`, error);
            }

            formData.delete('file');
            formData.delete('upload_preset');
            formData.delete('folder');
        }

        setIsUploading(false);
        setImages(null);
        setSelectedSize(null);
        setPrice(null);
        setIsPopoverOpen(false);
    };

    function CircularProgress() {
        return (
            <div className="flex items-center justify-center">
                <div className="border-t-4 border-white border-solid h-12 w-12 rounded-full animate-spin"></div>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center my-10 p-0">
            <Popover isOpen={isPopoverOpen}>
                <Card className="mt-6 w-[45vh] md:w-[50vh] lg:w-[70vh] p-2">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src={miniStikcer}
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Print on Demand
                        </Typography>
                        <Typography>
                            Print on demand, በፈልጉት Size, በፈለጉት ፎቶ -  with only puls 5 birr <br />
                            We have a Discount for those who want Quantity.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 mx-auto">
                        <PopoverHandler >
                            <Button className='bg-red-600 mx-auto my-2' onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                                Send Image
                            </Button>
                        </PopoverHandler>
                    </CardFooter>
                </Card>

                <PopoverContent className="w-96 mx-auto">
                    <p className='text-black text-[1.5em] mx-auto mb-[1em] font-semibold'>
                        Choose your preferred size and price
                    </p>

                    <div className="mb-3">
                        <select
                            name="SubCity"
                            className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 ${sizeError ? 'border-red-500' : 'border-gray-400'}`}
                            onChange={handleSizeChange}
                            value={selectedSize || ""}
                        >
                            <option value="" disabled>Select size and price</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                        {sizeError && <p className="text-red-500 text-sm mt-1">{sizeError}</p>}

                    </div>
                    <p className="text-gray-700 my-4 text-[18px]">Price: {price} ETB</p>
                    <p className='text-[23px] text-blue-600'>With Free delivery</p>
                    <div className="mx-auto my-5">
                        <label
                            className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${imageError ? 'text-red-500' : ''}`}

                            htmlFor="multiple_files"
                        >
                            Upload images
                        </label>
                        <input
                            onChange={handleImageChange}
                            className={`block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ${imageError ? 'border-red-500' : ''}`}

                            id="multiple_files"
                            type="file"
                            multiple
                        />
                        {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}

                        <button
                            onClick={handleUpload}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
                            disabled={isUploading}
                        >
                            {isUploading ? (
                                <div className="flex items-center">
                                    <CircularProgress />
                                    <span className="ml-2">please wait</span>
                                </div>
                            ) : (
                                'Upload Images'
                            )}
                        </button>

                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default Custom;

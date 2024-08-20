import { Button, Tooltip } from "@material-ui/core";
import { useContext, useState } from "react";
import { MultiStepContext } from "../../Context/checkoutContext";
import telebir from "../../../public/images/telebirr.png"
import cbe from "../../../public/images/cbe.jpeg"
import boa from "../../../public/images/boa.png"
import tick from "../../../public/images/tick.png"
import { useSelector } from 'react-redux';
import { selectUserId, setErrorData } from '../../store/userSlice.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { userPaymentInfo } from "../../api/userApi.js";

const PaymentForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector(state => state.user.error);
    const [paymentMethodError, setPaymentMethodError] = useState(null);
    const [imageError, setImageError] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState("telebirr");
    const { setStep, } = useContext(MultiStepContext)
    const [images, setImages] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null)
    const userId = useSelector(selectUserId);

    const cartStickers = useSelector((state) => state.cart.stickers);

    const totalAmountWithoutDiscount = cartStickers.reduce((total, sticker) => total + sticker.price * sticker.quantity, 0);

    const totalAmountWithDiscount = totalAmountWithoutDiscount / 5;

    const unPaid = totalAmountWithoutDiscount - totalAmountWithDiscount

    const handlePaymentMethodChange = (e) => {
        const selectedPaymentMethod = e.target.value;
        setPaymentMethod(selectedPaymentMethod);
        setPaymentMethodError(null);
    };
    const handleImageChange = (e) => {
        const files = e.target.files;
        setImages(files);
        setImageError(null);
    };
    const handleUpload = async () => {
        if (!paymentMethod) {
            setPaymentMethodError('Payment method is required');
            return;
        } else {
            setPaymentMethodError(null);
        }
        if (!images || images.length === 0) {
            setImageError('Image file is required');
            return;
        } else {
            setImageError(null);
        }
        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', images[0]);
        formData.append('upload_preset', 'Receipt_screenshot');
        formData.append('folder', 'Receipt');
        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dcug2edrg/image/upload",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            const data = {
                userId: userId,
                receiptScreenshot: response.data.secure_url,
                paymentMethod: paymentMethod
            }

            const response1 = await userPaymentInfo(data)
            console.log(response1)
            setIsUploading(false);
            if (response1.success === true) {
                navigate(`/account/${userId}`, { replace: true });
                window.location.reload();
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handlePaymentSelect = (payment) => {
        setSelectedPayment(payment);
    };

    function CircularProgress() {
        return (
            <div className="fixed items-center justify-center">
                <div className="border-t-4 border-white border-solid h-8 w-8 rounded-full animate-spin mr-9"></div>
            </div>
        )
    }
    return (
        <div className=" flex flex-col items-center justify-center bg-gray-100 ">
            {isUploading ? (
                <div className=" items-center bg-green-500 rounded p-4 fixed top-[4.5em]  right-3">
                    <CircularProgress />
                    <span className="ml-12 text-[1.2em]">Wait a minute </span>
                </div>
            ) : (
                ''
            )}
            <p className="text-lg text-gray-700 leading-tight text-center mt-8 mb-5">
                Easy payment method
            </p>
            <p className="text-red-500 my-2 text-lg mb-2">{error}</p>

            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-lg font-semibold mb-4 text-blue-500">Payment Options</h2>
                <p className="text-gray-500 my-2">ከታች ካሉት  የክፍያ አማራጮች አንዱን ይምረጡ </p>
                {/* Payment Buttons */}
                <div className="mb-4 flex justify-between">

                    <Tooltip title="Pay with Telebirr" arrow>
                        <div>
                            <img
                                onClick={() => handlePaymentSelect("telebirr")}
                                className={`cursor-pointer w-[6em] rounded-md h-[4em] ${selectedPayment === "telebirr" ? "selected border border-x-4 border-y-4 border-green-700 p-1 rounded-s-2xl rounded-e-2xl " : ""}`}
                                src={telebir}
                                alt=""
                            />
                            {selectedPayment === "telebirr" && (
                                <img
                                    className="w-5 relative bottom-[3.7em] left-[4.4em]"
                                    src={tick}
                                    alt="Tick"
                                />
                            )}
                        </div>
                    </Tooltip>

                    <Tooltip title="Pay with CBE" arrow>
                        <div>
                            <img
                                onClick={() => handlePaymentSelect("cbe")}
                                className={`cursor-pointer w-[6em] rounded-md h-[4em] ${selectedPayment === "cbe" ? "selected border border-x-4 border-y-4 border-green-700 p-1 rounded-s-2xl rounded-e-2xl " : ""}`}
                                src={cbe}
                                alt=""
                            />
                            {selectedPayment === "cbe" && (
                                <img
                                    className="w-5 relative bottom-[3.7em] left-[4.4em]"
                                    src={tick}
                                    alt="Tick"
                                />
                            )}
                        </div>
                    </Tooltip>

                    <Tooltip title="Pay with BOA" arrow>
                        <div>
                            <img
                                onClick={() => handlePaymentSelect("boa")}
                                className={`cursor-pointer w-[6em] rounded-md h-[4em] ${selectedPayment === "boa" ? "selected border border-x-4 border-y-4 border-green-700 p-1 rounded-s-2xl rounded-e-2xl " : ""}`}
                                src={boa}
                                alt=""
                            />
                            {selectedPayment === "boa" && (
                                <img
                                    className="w-5 relative bottom-[3.7em] left-[4.4em]"
                                    src={tick}
                                    alt="Tick"
                                />
                            )}
                        </div>
                    </Tooltip>
                </div>

                {/* Payment Details */}
                {selectedPayment && (
                    <div className="mb-4">
                        {selectedPayment === "telebirr" && (
                            <>
                                <p className="text-blue-600 text-2xl text-center">pay with Tele Birr</p>

                                <p className="text-black text-lg mt-2">
                                    Pay {totalAmountWithDiscount} ETB
                                </p>

                                <p className="text-black text-lg">
                                    when deliver arrive pay {unPaid} ETB
                                </p>

                                <div className=" my-2">
                                    <p className=" text-lg  text-gray-600">
                                        <span className="text-gray-700"> Account Name : </span>  Kalid Shamil
                                    </p>
                                    <p className="text-lg text-black "> Mobile Number <span className="text-gray-600 underline"> 0979179925</span></p>
                                </div>
                                <p className="text-md font-serif mb-2 text-gray-600">
                                    ክፍያውን ከፈጸሙ በኋላ የሚከተሉትን ያድርጉ
                                </p>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>
                                        የክፍያ ደረሰኝዎን screenshot ያንሱ።
                                    </li>
                                    <li className="my-3">
                                        ስክሪንሾቱን ከታች ባለው ፎርም  ይላኩ
                                    </li>
                                </ul>
                            </>
                        )}
                        {selectedPayment === "cbe" && (
                            <>
                                <p className="text-blue-600 text-2xl text-center">pay with comerica bank</p>
                                <p className="text-black text-lg mt-2">
                                    Pay {totalAmountWithDiscount} ETB
                                </p>

                                <p className="text-black text-lg">
                                    when deliver arrive pay {unPaid} ETB
                                </p>

                                <div className=" my-2">
                                    <p className=" text-lg  text-gray-600">
                                        <span className="text-gray-700"> Account Name : </span>  Kalid Shamil
                                    </p>
                                    <p className="text-lg text-black ">Account Number <span className="text-gray-600 underline"> 1000254618571</span></p>
                                </div>
                                <p className="text-md font-serif mb-2 text-gray-600">
                                    ክፍያውን ከፈጸሙ በኋላ የሚከተሉትን ያድርጉ
                                </p>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>
                                        የክፍያ ደረሰኝዎን screenshot ያንሱ።
                                    </li>
                                    <li className="my-3">
                                        ስክሪንሾቱን ከታች ባለው ፎርም  ይላኩ
                                    </li>
                                </ul>
                            </>

                        )}
                        {selectedPayment === "boa" && (
                            <>
                                <p className="text-blue-600 text-2xl text-center">pay with abyssinia bank</p>
                                <p className="text-black text-lg mt-2">
                                    Pay {totalAmountWithDiscount} ETB
                                </p>

                                <p className="text-black text-lg">
                                    when deliver arrive pay {unPaid} ETB
                                </p>

                                <div className=" my-2">
                                    <p className=" text-lg  text-gray-600">
                                        <span className="text-gray-700"> Account Name : </span>  Kalid Shamil
                                    </p>
                                    <p className="text-lg text-black ">Account Number <span className="text-gray-600 underline"> 115144782</span></p>
                                </div>

                                <p className="text-md font-serif mb-2 text-gray-600">
                                    ክፍያውን ከፈጸሙ በኋላ የሚከተሉትን ያድርጉ
                                </p>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>
                                        የክፍያ ደረሰኝዎን screenshot ያንሱ።
                                    </li>
                                    <li className="my-3">
                                        ስክሪንሾቱን ከታች ባለው ፎርም  ይላኩ
                                    </li>
                                </ul>
                            </>

                        )}
                    </div>
                )}
                <div className="mb-2">
                    <select
                        name="SubCity"
                        className={`w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 ${paymentMethodError ? 'border-red-500' : 'border-gray-400'}`}

                        onChange={handlePaymentMethodChange}
                        value={paymentMethod || ''}
                    >
                        <option value="" disabled>Select payment method</option>
                        <option value="Telebirr">Tele birr</option>
                        <option value="CBE">CBE</option>
                        <option value="BOA">BOA</option>
                    </select>
                    {paymentMethodError && <p className="text-red-500 text-sm mt-1">{paymentMethodError}</p>}

                </div>
                <div>
                    <div>
                        <label
                            className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${imageError ? 'text-red-500' : ''}`}>
                            Receipt screenshot
                        </label>
                        <input
                            onChange={handleImageChange}
                            className={`block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ${imageError ? 'border-red-500' : ''}`}

                            id="multiple_files"
                            type="file"
                            multiple
                        />
                    </div>
                    {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
                </div>
                <div className="flex mt-[2em]">
                    <div className="mx-auto">
                        <Button
                            onClick={() => {
                                dispatch(setErrorData(null));
                                setStep(2);
                            }}
                            variant="contained"
                            color="default"
                        >
                            Back
                        </Button>
                    </div>

                    <div className="mx-auto">
                        <Button
                            className=""
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                if (paymentMethodError || imageError) {
                                    console.error('Please provide valid payment method and image');
                                } else {
                                    handleUpload();
                                    setStep(3);
                                }
                            }}
                        >
                            Done
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PaymentForm;
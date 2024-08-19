import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddToCartPopup from '../popup/AddToCartPopup';
import "../popular/popularSticker/hot.css"
import { Link } from 'react-router-dom';
function StickerCard({ sticker }) {
    const [selectedStickerId, setSelectedStickerId] = useState(sticker._id);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const openPopup = (stickerId) => {
        setSelectedStickerId(stickerId);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleAddToCart = () => {
        closePopup();
    };

    function CircularProgress() {
        return (
            <div className="flex items-center justify-center mt-4">
                <div className="border-t-4 border-blue-500 border-solid h-12 w-12 rounded-full animate-spin"></div>
            </div>
        )
    }
    return (


        <div>
            {isLoading && <CircularProgress />}
            <div className=""
                onLoad={() => setIsLoading(false)}>
                <div className={` ${isLoading ? 'hidden' : ''}  mx-auto`}
                >
                    <img
                        className="h-[130px] w-[130px] xl:h-[11em] xl:w-[11em] p-2 flex items-center justify-center mx-auto"
                        src={sticker.imageUrl}
                        alt={sticker.name}
                    />
                    <div className='flex items-center justify-center'>
                        <button className=" 
                        bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300
                        " onClick={() => openPopup(sticker._id)}
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
            <AddToCartPopup
                isOpen={isPopupOpen}
                onClose={closePopup}
                onAddToCart={handleAddToCart}
                stickerId={selectedStickerId}
            />
        </div>
    );
}
export default StickerCard;

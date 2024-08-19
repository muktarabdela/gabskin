import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HalfPopup from '../../Laptop_skin/HalfPopup';

function PoplarSkinCard({ sticker }) {
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

    const CircularProgress = () => (
        <div className="flex items-center justify-center mt-4">
            <div className="border-t-4 border-blue-500 border-solid h-12 w-12 rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="m-2 p-4 ">
            {isLoading && <CircularProgress />}
            <div className={`transition-transform transform hover:scale-105 ${isLoading ? 'hidden' : ''}w-60`}
                onLoad={() => setIsLoading(false)}>
                <Link to="/" className="block text-gray-800 hover:text-gray-600">
                    <img
                        className="mt-6 h-44 w-full object-cover rounded-lg shadow-md"
                        src={sticker.imageUrl}
                        alt={sticker.name}
                    />
                    <p className="mt-2 text-center text-lg font-semibold">
                        ETB 300 <small className="line-through text-gray-500">ETB 400</small>
                    </p>
                </Link>
                <div className="text-center mt-4">
                    <button
                        onClick={() => openPopup(sticker._id)}
                        className="bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 "
                    >
                        Order Now
                    </button>
                </div>
            </div>
                <HalfPopup
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    onAddToCart={handleAddToCart}
                    stickerId={selectedStickerId}
                />
        </div>
    );
}

export default PoplarSkinCard;

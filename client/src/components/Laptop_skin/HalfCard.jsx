import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HalfPopup from './HalfPopup';
import { CircularProgress } from '@mui/material';

function HalfCard({ sticker }) {
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

    return (
        <div className="m-2 p-4">
            {isLoading && (
                <div className="flex items-center justify-center h-48">
                    <CircularProgress />
                </div>
            )}
            <Card className={`transition-transform transform hover:scale-105 ${isLoading ? 'hidden' : ''}`} elevation={6}>
                <CardContent
                    onLoad={() => setIsLoading(false)}
                    className="p-4"
                >
                    <img
                        src={sticker.imageUrl}
                        alt={sticker.name}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                    <div className="text-center mt-4">
                        <button
                            onClick={() => openPopup(sticker._id)}
                            className="bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
                        >
                            Order Now
                        </button>
                    </div>
                </CardContent>
            </Card>
                <HalfPopup
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    onAddToCart={handleAddToCart}
                    stickerId={selectedStickerId}
                />
        </div>
    );
}

export default HalfCard;

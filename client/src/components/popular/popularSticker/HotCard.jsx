import React, { useState } from 'react';
import './hot.css';
import { Link } from 'react-router-dom';
import AddToCartPopup from '../../popup/AddToCartPopup'; 

function HotCard({ sticker, onAddToCart }) {
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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
            <div className="gabiskin__hot-main__card w-[13em]"
                onLoad={() => setIsLoading(false)}>
                <Link className={`text-[#f4f4f5] hover:transform-[scale(1.09) ${isLoading ? 'hidden' : ''} `}
                >
                    <img
                        className="gabiskin__hot-main__card-img h-[10em] mx-auto"
                        src={sticker.imageUrl}
                        alt={sticker.name}
                    />
                    <p className="hot-price">
                        ETB 50
                        <small>
                            <del>ETB 100</del>
                        </small>
                    </p>
                </Link>
                <button  className="bg-purple-800 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 "  onClick={() => setShowPopup(true)}>
                    Order Now
                </button>
                {showPopup && (
                    <AddToCartPopup
                        isOpen={showPopup}
                        onClose={() => setShowPopup(false)}
                        stickerId={sticker._id}
                        onAddToCart={onAddToCart}
                    />
                )}
            </div>
        </div>
    );
}

export default HotCard;

import AddToCartPopup from "../../popup/AddToCartPopup";
import HotCard from "./HotCard";
import { useState, useEffect } from "react";
import axios from "../../../Axios";
import "./hot.css";

function Hot() {
    const [hotStickers, setHotStickers] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHot = async () => {
            try {
                const response = await axios.get("/stickers/stickers-withCategory?category=popular");
                setHotStickers(response.data.stickers);
                console.log(response.data);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching stickers:', error);
            }
        }
        fetchHot();
    }, []);

    const onAddToCart = (size, price) => {
        console.log("Adding to cart: Size -", size, "Price -", price);
    };
    const slideLeft = () => {
        const slider1 = document.getElementById('slider1');
        if (slider1) {
            slider1.scrollLeft -= 200;
        }
    };

    const slideRight = () => {
        const slider1 = document.getElementById('slider1');
        if (slider1) {
            slider1.scrollLeft += 200;
        }
    };


    return (
        <div className="gabiskin__hot">
            <h1 className="gabiskin__hot-title mb-0">Popular Stickers</h1>
            <div className="gabiskin__hot-main">
                <div className={` items-end flex justify-start relative  m-4 ${isLoading ? 'hidden' : ''}`}>
                    <div className='  w-10 top-[10em] relative  hover:opacity-100 cursor-pointer z-10  group-hover:block bg-white rounded'
                        onClick={slideLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left" />
                        </svg>
                    </div>
                </div>
                <ul id={'slider1'} className="gabiskin__hot-main-ul ">
                    {hotStickers?.map((sticker) => (
                        <HotCard
                            key={sticker._id}
                            sticker={sticker}
                            onAddToCart={onAddToCart} />
                    ))}
                </ul>
                <div className={`items-end flex justify-end relative bottom-[11.7em] mt-3 m-4 ${isLoading ? 'hidden' : ''}`}>
                    <div className=" lg:block w-10 hover:opacity-100 cursor-pointer z-10  group-hover:block ml-5 bg-white rounded" onClick={slideRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                            <path style={{ fill: '#232326' }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
                        </svg>
                    </div>
                </div>

            </div>

            {showPopup && (
                <AddToCartPopup
                    isOpen={showPopup}
                    onClose={() => setShowPopup(false)}
                    onAddToCart={onAddToCart}
                    isFocused={index === focusedIndex}

                />
            )}
        </div>
    );
}

export default Hot;

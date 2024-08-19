import { useEffect, useRef, useState } from "react";
import StickersCard from "./StickersCard";
import axios from "../../Axios";
import Pagination from './Pagination';

const Sticker = ({ category }) => {
    const [stickersData, setStickersData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const stickersPerPage = 12;

    useEffect(() => {
        const fetchStickersByCategory = async () => {
            try {
                const response = await axios.get(
                    `/stickers/stickers-withCategory?category=${category}`);
                const reversedStickers = response.data.stickers
                setStickersData(reversedStickers);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching stickers:", error);
                setIsLoading(false);
            }
        };
        fetchStickersByCategory();
    }, [category]);
    const stickersContainerRef = useRef();

    const indexOfLastSticker = currentPage * stickersPerPage;
    const indexOfFirstSticker = indexOfLastSticker - stickersPerPage;
    const currentStickers = stickersData.slice(indexOfFirstSticker, indexOfLastSticker);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        stickersContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    function CircularProgress() {
        return (
            <div className="flex items-center justify-center mt-7">

                <div className="border-t-4 border-blue-500 border-solid h-[3em] w-[3em] rounded-full animate-spin"></div>
            </div>
        );
    }
    return (
        <>
            {isLoading ? (
                <div className="text-center text-lg">
                    <p>Stickers are on the way! Please wait or refresh.</p>
                    <CircularProgress />
                </div>
            ) : stickersData.length === 0 ? (
                <div className="text-center text-lg">
                    <p>Stickers are on the way! Please wait or refresh.</p>
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  max-w-7xl mx-auto">
                        {currentStickers.map((sticker) => (
                            <StickersCard key={sticker._id} sticker={sticker} />
                        ))}
                    </div>
                    <Pagination
                        active={currentPage}
                        itemsCountPerPage={stickersPerPage}
                        totalItemsCount={stickersData.length}
                        onChange={handlePageChange}
                    />
                </>
            )}
        </>
    );
};

export default Sticker;

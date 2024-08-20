// ParentComponent.jsx
import React, { useState, useEffect } from 'react';
import AddToCartPopup from './AddToCartPopup';
import HalfPopup from "../stickers/HalfPopup"
import { getStickers } from '../../api/StickerApi';
function GetData() {
    const [stickerData, setStickerData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getStickers()
                setStickerData(response.data);
                console.log(stickerData)
            } catch (error) {
                console.error('Error fetching sticker data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(stickerData)

    return (
        <>
            <AddToCartPopup
                stickerId={stickerData?._id}
                selectedCategory={stickerData?.category}
                selectedImageUrl={stickerData?.imageUrl}
                stickerData={stickerData}
            />
            <HalfPopup
                stickerId={stickerData?._id}
                selectedCategory={stickerData?.category}
                selectedImageUrl={stickerData?.imageUrl}
                stickerDataData={stickerData}

            />
        </>
    );
}

export default GetData;

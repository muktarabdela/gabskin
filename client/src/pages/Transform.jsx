import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const videoURLs = [
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1706005079/videos/Snaptik.app_7322738486660844806_apofci.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150682/videos/Snaptik.app_7319056287038344454_kezx8m.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150571/videos/Snaptik.app_7324583008340626694_uqpa8h.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150550/videos/Snaptik.app_7323124550697225477_lsus8i.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150541/videos/Snaptik.app_7319455695814905093_buugon.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150482/videos/Snaptik.app_7319769693097676037_ozls4u.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150432/videos/Snaptik.app_7303246090483076358_yuq61p.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150426/videos/Snaptik.app_7324273104757198086_rafu2u.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150417/videos/ssstik.io_1707125746661_tmwff0.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150405/videos/Snaptik.app_7325689284462136581_w3nkn4.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150384/videos/Snaptik.app_7326549735374998790_s8jygw.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150368/videos/Snaptik.app_7320160514489732357_x7p5fo.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150359/videos/ssstik.io_1707125819082_sd8eva.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150355/videos/Snaptik.app_7329018273893240069_ztdwbg.mp4",
    "https://res.cloudinary.com/dcug2edrg/video/upload/v1707150348/videos/Snaptik.app_7323580254159637766_wxl4fb.mp4",

];

const Transform = () => {
    const [activeVideoIndex, setActiveVideoIndex] = useState(null);
    const players = useRef([]);

    const handleVideoClick = (index) => {
        if (activeVideoIndex === index) {
            // If the clicked video is already active, pause it
            players.current[index].current.getInternalPlayer().pause();
            setActiveVideoIndex(null);
        } else {
            // Pause the currently playing video (if any) and play the clicked video
            if (activeVideoIndex !== null) {
                players.current[activeVideoIndex].current.getInternalPlayer().pause();
            }
            players.current[index].current.getInternalPlayer().play();
            setActiveVideoIndex(index);
        }
    };

    return (
        <div className='mt-[4em]'>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-2 lg:row-cols-3 gap-4 max-w-4xl mx-auto ">
                {videoURLs.map((url, index) => (
                    <div key={index} className="mt-5 relative w-full h-[40vh] overflow-hidden rounded-[10px] [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.1)]" onClick={() => handleVideoClick(index)}>
                        <ReactPlayer
                            ref={(player) => players.current[index] = player}
                            url={url}
                            width="100%"
                            height="40vh"
                            playing={index === activeVideoIndex}
                            controls
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Transform;

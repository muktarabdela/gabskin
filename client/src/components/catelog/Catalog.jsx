import React, { useState } from 'react';
import A from "../../../public/catalog/A.jpg"
import B from "../../../public/catalog/B.jpg"
import C from "../../../public/catalog/C.jpg"
import D from "../../../public/catalog/D.jpg"
import E from "../../../public/catalog/E.jpg"
import F from "../../../public/catalog/F.jpg"
import G from "../../../public/catalog/G.jpg"
import H from "../../../public/catalog/H.jpg"
import I from "../../../public/catalog/I.jpg"
import J from "../../../public/catalog/J.jpg"
import K from "../../../public/catalog/K.jpg"
import L from "../../../public/catalog/L.jpg"
import M from "../../../public/catalog/M.jpg"
import N from "../../../public/catalog/N.jpg"
import O from "../../../public/catalog/O.jpg"
import P from "../../../public/catalog/P.jpg"
import Q from "../../../public/catalog/Q.jpg"
import R from "../../../public/catalog/R.jpg"
import S from "../../../public/catalog/S.jpg"

const Catalog = () => {
    const [images, setImages] = useState([
        { imageUrl: A },
        { imageUrl: B },
        { imageUrl: C },
        { imageUrl: D },
        { imageUrl: E },
        { imageUrl: F },
        { imageUrl: G },
        { imageUrl: H },
        { imageUrl: I },
        { imageUrl: J },
        { imageUrl: K },
        { imageUrl: L },
        { imageUrl: M },
        { imageUrl: N },
        { imageUrl: O },
        { imageUrl: P },
        { imageUrl: Q },
        { imageUrl: R },
        { imageUrl: S },
    ]);
    return (
        <div className='mt-[1em]'>
            <h1 className="text-center text-[1.6em] pt-[80px] mx-[0] my-6 [transition:all_0.3s_ease-in-out] font-mono">GABI MINI STICKERS Catalog.            </h1>

            <p className="text-1xl font-bold text-gray-400 mb-4">
                We are delighted to offer you a wide selection of over 500+ Ministickers designs. Simply browse through our collection, choose your favorite design, and send us the corresponding code via Telegram at http://t.me/kalidkalaw1. Our team will take care of the rest! Our Mini-sticker inventory is extensive and can be applied to any device you own. We are constantly updating our range to bring you even more choices. And here's the best part: if you wish to have a custom design, it will only cost an additional 5 br. Place your order today and personalize your devices with our high-quality Ministickers.
                Make sure to Subscribe our telegram channal http://t.me/gabiskin
                BEFORE You start scrolling, sit back, relax, grab a cup of coffe, and Pieces of paper and pen.   </p>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:row-cols-3 gap-4">
                {images.map((sticker, index) => (
                    <div
                        key={index}
                        className={`className="grid grid-cols-2 md:grid-cols-3 gap-4 `}
                    >
                        <div>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={sticker.imageUrl}
                                alt={`Sticker ${index}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div class="text-center mt-8">
                <h1 className='text-gray-300 text-lg mx-4 mb-3'>Congratulations! You have discovered our incredible collection. We strive to offer you the best options available. If you don't find exactly what you're looking for, don't worry! We can create a custom design just for you, at an affordable price of only 5 birr. So don't forget, join our Telegram channel at http://t.me/gabiskin and stay updated with the latest offers.</h1>
                <h2 class="text-2xl font-bold ">
                    To order Mini stickers, simply send the unique codes of your selected designs to our Telegram account:
                </h2>
                <button class="bg-red-600 my-2 py-1 px-2 rounded my-4">
                    <a href="http://t.me/kalidkalaw1" target="_blank" rel="noopener noreferrer" class="text-white">Send Code</a>
                </button>
                <br />
                <p class="text-gray-300 text-lg mb-4">
                    Our team will take care of the rest!
                </p>
            </div>


        </div>
    )
}

export default Catalog

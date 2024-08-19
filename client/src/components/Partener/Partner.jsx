import React from "react";
import Part1 from "../../../public/images/parts/1.png";
import Part2 from "../../../public/images/parts/2.png";
import Part3 from "../../../public/images/parts/3.png";
import Part4 from "../../../public/images/parts/4.png";
import Part5 from "../../../public/images/parts/5.png";
import Part6 from "../../../public/images/parts/8.png";
import Part7 from "../../../public/images/parts/9.png";
import Part8 from "../../../public/images/parts/10.png";
import Part9 from "../../../public/images/parts/11.png";
import Part10 from "../../../public/images/parts/12.png";
import Part11 from "../../../public/images/parts/13.png";
import Part12 from "../../../public/images/parts/14.png";
import Part13 from "../../../public/images/parts/photo_2024-07-03_13-54-50.jpg";
import Youtube from "./Youtube";
// import "./part.css";

const Part = () => {
    return (
        <>
            <Youtube />
            <div className="mt-10 overflow-hidden w-full">
                <h2 className="text-3xl font-semibold mb-6 text-center">Our Partners</h2>
                <marquee behavior="infinite" direction="">
                    <ul className="flex p-4 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll items-center">
                        <li>
                            <img src={Part1} alt="Part 6" className="mt-4 rounded-md w-[10em] h-[7em]" />
                        </li>
                        <li>
                            <img src={Part6} alt="Part 6" className="mt-4 rounded-md w-[10em] h-[7em]" />
                        </li>
                        <li>
                            <img src={Part5} alt="Part 5" className="rounded-md w-[7em] mt-[1em]" />
                        </li>
                        <li>
                            <img src={Part2} alt="Part 2" className="mb-4 rounded-md w-[10em] md:ml-12 lg:ml-2" />
                        </li>
                        <li>
                            <img src={Part3} alt="Part 3" className="mb-4 rounded-md w-[7em] mt-4 md:ml-12 lg:ml-2" />
                        </li>
                        <li>
                            <img src={Part13} alt="Part 3" className="mb-4 rounded-md w-[7em] mt-4 md:ml-12 lg:ml-2" />
                        </li>
                        <li>
                            <img src={Part4} alt="Part 4" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part7} alt="Part 7" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part8} alt="Part 8" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part9} alt="Part 9" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part10} alt="Part 10" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part11} alt="Part 11" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part12} alt="Part 12" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        {/* Render the parts again to seamlessly loop */}
                        <li>
                            <img src={Part6} alt="Part 6" className="mt-4 rounded-md w-[10em] h-[7em]" />
                        </li>
                        <li>
                            <img src={Part5} alt="Part 5" className="rounded-md w-[7em] mt-[1em]" />
                        </li>
                        <li>
                            <img src={Part2} alt="Part 2" className="mb-4 rounded-md w-[10em] md:ml-12 lg:ml-2" />
                        </li>
                        <li>
                            <img src={Part3} alt="Part 3" className="mb-4 rounded-md w-[7em] mt-4 md:ml-12 lg:ml-2" />
                        </li>
                        <li>
                            <img src={Part4} alt="Part 4" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part7} alt="Part 7" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part8} alt="Part 8" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part9} alt="Part 9" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part10} alt="Part 10" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part11} alt="Part 11" className="mt-10 rounded-md w-[10em]" />
                        </li>
                        <li>
                            <img src={Part12} alt="Part 12" className="mt-10 rounded-md w-[10em]" />
                        </li>
                    </ul>
                </marquee>
            </div>
        </>
    );
};

export default Part;

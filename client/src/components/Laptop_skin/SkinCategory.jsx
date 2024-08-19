import { useState } from "react";
import "../stickers/Category.css";
import LaptopSkin from "./LaptopSkin";

const SkinCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState("Regional_cultural");
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <div className="">
                <h1 className="text-[30px] font-[1000] text-center mt-[30px] mx-[0] mb-[50px]">Category</h1>
                <div className="
                flex justify-between my-[0] !overflow-x-scroll lg:!overflow-x [transition:transform_450ms]
                whitespace-nowrap text-[20px] font-normal mt-[10px] mx-[20px]  cursor-pointer !opacity-90  ">

                    <p className={`top  ${selectedCategory === "Regional_cultural" ? "selected border-y  p-1 text-orange-400" : ""} ml-2 mb-5`} onClick={() => handleCategoryChange("Regional_cultural")}> Regional cultural</p>

                    <p className={`top ${selectedCategory === "abstract" ? "selected border-y  p-1 text-orange-400" : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("abstract")}>Abstract</p>

                    <p className={`top ${selectedCategory === "minimalistic" ? "selected border-y  p-1 text-orange-400" : ""} mr-10 mb-5`} onClick={() => handleCategoryChange("minimalistic")}>Minimalistic</p>

                    <p className={`top ${selectedCategory === "Qoute" ? "selected border-y  p-1 text-orange-400" : ""}  mb-5`} onClick={() => handleCategoryChange("Qoute")}>Qoute</p>

                    <p className={`top ${selectedCategory === "wood" ? "selected border-y  p-1 text-orange-400" : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("wood")}>Wood</p>

                    <p className={`top ${selectedCategory === "Movie_and_game" ? "selected border-y  p-1 text-orange-400" : ""} mb-5`} onClick={() => handleCategoryChange("Movie_and_game")}>Movie and game</p>

                    <p className={`top ${selectedCategory === "Music_and_celebrities" ? "selected border-y  p-1 text-orange-400" : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("Music_and_celebrities")}>Music and celebrities</p>

                    <p className={`top ${selectedCategory === "Pattern" ? "selected border-y  p-1 text-orange-400" : ""} mb-5`} onClick={() => handleCategoryChange("Pattern")}>Pattern</p>


                    <p className={`top ${selectedCategory === "sport" ? "selected border-y  p-1 text-orange-400" : " "} mx-10 mb-5`} onClick={() => handleCategoryChange("sport")}>Sport</p>

                    <p className={`top ${selectedCategory === "cars" ? "selected border-y  p-1 text-orange-400" : ""} mb-5`} onClick={() => handleCategoryChange("cars")}>Cars</p>

                    <p className={`top ${selectedCategory === "Girlish" ? "selected border-y  p-1 text-orange-400" : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("Girlish")}>Girlish</p>

                    <p className={`top ${selectedCategory === "anime" ? "selected border-y  p-1 text-orange-400" : ""} mb-5`} onClick={() => handleCategoryChange("anime")}>Anime</p>


                    <p className={`top ${selectedCategory === "animation" ? "selected border-y  p-1 text-orange-400" : ""} ml-10 mb-5`} onClick={() => handleCategoryChange("animation")}>Animation M</p>


                    <p className={`top ${selectedCategory === "Black-ish" ? "selected border-y  p-1 text-orange-400" : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("Black-ish")}>Black-ish</p>



                    <p className={`top ${selectedCategory === "flower" ? "selected border-y  p-1 text-orange-400" : ""} mb-5`} onClick={() => handleCategoryChange("flower")}>Flowers</p>


                    <p className={`top ${selectedCategory === "Natural" ? "selected border-y  p-1 text-orange-400" : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("Natural")}>Natural </p>

                </div>
            </div>
            <LaptopSkin category={selectedCategory} />
        </>
    );
};
export default SkinCategory;

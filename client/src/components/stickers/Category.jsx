import { useState } from "react";
import Sticker from "../stickers/Stickers";
import "./category.css";

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState("programming");
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <div className=" ">
                <h1 className="gabiskin__category-title">Category Stickers</h1>
                <div className="
                flex justify-between my-[0] !overflow-x-scroll lg:!overflow-x [transition:transform_450ms]
                whitespace-nowrap text-[20px] font-normal mt-[10px] mx-[20px]  cursor-pointer !opacity-90  ">

                    <p className={`top ${selectedCategory === "programming" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mr-10 ml-4 mb-5`} onClick={() => handleCategoryChange("programming")}>Programming</p>

                    <p className={`top ${selectedCategory === "christmas" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""}  mb-5`} onClick={() => handleCategoryChange("christmas")}>Christmas</p>

                    <p className={`top ${selectedCategory === "Movies" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("Movies")}>Movie</p>


                    <p className={`top ${selectedCategory === "Music" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mb-5`} onClick={() => handleCategoryChange("Music")}>Music</p>

                    <p className={`top ${selectedCategory === "Amharic" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("Amharic")}>culture</p>

                    <p className={`top ${selectedCategory === "Football" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mb-5 mr-10`} onClick={() => handleCategoryChange("Football")}>Sports</p>

                    <p className={`top ${selectedCategory === "holy" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mb-5`} onClick={() => handleCategoryChange("holy")}>Holy</p>

                    <p className={`top ${selectedCategory === "Animation" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("Animation")}>Cartoon</p>

                    <p className={`top ${selectedCategory === "Anime" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mr-10 mb-5`} onClick={() => handleCategoryChange("Anime")}>Anime</p>

                    <p className={`top ${selectedCategory === "Series_movie" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mr-10 mb-5`} onClick={() => handleCategoryChange("Series_movie")}>Series</p>

                    <p className={`top ${selectedCategory === "English_tips" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mb-5`} onClick={() => handleCategoryChange("English_tips")}>english quotes</p>

                    <p className={`top ${selectedCategory === "Gaming" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mx-10 mb-5`} onClick={() => handleCategoryChange("Gaming")}>Gaming</p>

                    <p className={`top ${selectedCategory === "New_stickers" ? "selected border-b  p-1 rounded-lg text-orange-400 " : ""} mb-5`} onClick={() => handleCategoryChange("New_stickers")}>New stickers</p>
                </div>
            </div>
            <Sticker category={selectedCategory} />
        </>
    );
};

export default Category;

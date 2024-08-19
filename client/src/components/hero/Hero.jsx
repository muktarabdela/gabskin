import React from "react";
import { Link } from "react-router-dom";
import './Hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroOne from "../../../public/images/ourWork/1.png";
import heroTwo from "../../../public/images/ourWork/2.png";
import heroThree from "../../../public/images/ourWork/3.png";
import heroFour from "../../../public/images/ourWork/4.png";
import heroFife from "../../../public/images/ourWork/5.png";

const customArrowStyleLeft = {
    position: "absolute",
    left: 10,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#f5f5f5",
    fontSize: "20px",
    borderRadius: "50%",
    transition: "all 0.3s ease-in-out",
};
const customArrowStyleRight = {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#f5f5f5",
    fontSize: "20px",
    borderRadius: "50%",
    transition: "all 0.3s ease-in-out",
};


const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev" onClick={onClick} style={customArrowStyleLeft}>
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev" onClick={onClick} style={customArrowStyleRight}>
        </div>
    );
};

const Hero = () => {
    const sliderSettings = {
        dots: true,
        dotsclass: "slick-dots slick-thumb white-dots",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="heroSecMainParent mb-[150px]">
            <p className="text-2xl pt-20 text-center font-bold text-gray-300 sm:text34xl md:text-2xl lg:text-3xl xl:text-5xl mb-5">
                Welcome to <span className="text-blue-500">GabiSkin</span> Home
            </p>


            <Slider {...sliderSettings}>

                <div className="first-slide">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:w-1/2 pt-[40px] md:pt-[90px] lg:ml-[150px] mx-auto w-[17em]">
                            <p className="text-xs text-gray-500 uppercase mb-2">Services</p>
                            <p className="text-3xl font-bold mb-4">Introducing Laptop Skins,
                            </p>
                            <p className="leading-relaxed text-lg  md:mb-0 lg:mb-10">
                                in different designs. Get your old laptop looking   Fire
                                Get your custom Laptop skin cover done with any image of your choice
                            </p>
                        </div>
                        <img src={heroOne} alt="Hero One" className="w-[22em] mx-auto mb-3 md:w-auto lg:w-[40em]" />
                    </div>
                </div>

                <div className="second-slide">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:w-1/2 pt-[40px] md:pt-[90px] lg:ml-[150px] mx-auto w-[17em]">
                            <p className="text-xs text-gray-500 uppercase mb-2">Services</p>
                            <p className="text-3xl font-bold mb-4">Enhance Your Experience</p>
                            <p className="leading-relaxed text-lg ">
                                Protect your Laptop from scratch and small damage:  unleash Your Vibe with Gabi premium Laptop Skin!!
                            </p>
                        </div>
                        <img src={heroTwo} alt="Hero One" className="w-[22em] mx-auto mb-3 md:w-auto lg:w-[40em]" />
                    </div>
                </div>

                <div className="third-slide">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:w-1/2 pt-[40px] md:pt-[90px] lg:ml-[150px] mx-auto w-[18em]">
                            <p className="text-xs text-gray-500 uppercase mb-2">Services</p>
                            <p className="text-3xl font-bold mb-4">Gabi skin that is thin, light and stylish!</p>
                            <p className="leading-relaxed text-lg mb-5">
                                Our laptop skins are also available as an exact fit for all Laptop. Go to your favorite design and select the relevant size. we'll do the rest
                            </p>
                        </div>
                        <img src={heroThree} alt="Hero One" className="w-[22em] mx-auto mb-3 md:w-auto lg:w-[40em]" />
                    </div>
                </div>

                <div className="forth-slide">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:w-1/2 pt-[40px] md:pt-[90px] lg:ml-[150px] mx-auto w-[18em] md:mr-6 lg:mr:7">
                            <p className="text-xs text-gray-500 uppercase mb-2">Services</p>
                            <p className="text-3xl font-bold mb-4">Why have ordinary?
                            </p>
                            <p className="leading-relaxed text-lg mb-[1em] md:mb-0 lg:mb-0">
                                when you can have stylish designs Skins on your laptops! Fancy a matching Laptop skin? Why not check out our personalised Laptop skin/sticker to find your model and get customising!
                            </p>
                        </div>
                        <img src={heroFour} alt="Hero One" className="w-[22em] mx-auto mb-3 md:w-auto lg:w-[40em]" />
                    </div>
                </div>
                <div className="fifth-slide">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:w-1/2 pt-[40px] md:pt-[90px] lg:ml-[150px] mx-auto w-[18em] md:mr-6 lg:mr:7">
                            <p className="text-xs text-gray-500 uppercase mb-2">Services</p>
                            <p className="text-3xl font-bold mb-4">Gabi Laptop skins are made of durable material</p>
                            <p className="leading-relaxed text-lg ">
                                that will enhance your device's overall appearance and also protect it from scuff and scratches, plus they’re easy to apply/remove!
                            </p>
                        </div>
                        <img src={heroFife} alt="Hero One" className="w-[22em] mx-auto mb-3 md:w-auto lg:w-[35em]" />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Hero;

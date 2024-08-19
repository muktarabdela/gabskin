import React, { useContext, useEffect, useState } from 'react';
import DeliveryForm from './DeliveryInfoForm';
import RegisterForm from './RegistrationForm';
import PaymentForm from './PaymentForm';
import { Stepper, StepLabel, Step, Button, Drawer } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/CartSlice';

import { MultiStepContext } from '../../Context/checkoutContext';
import Telegram from '../../../public/images/telegram.png';
import tiktok from '../../../public/images/tiktok.png';
import instagram from '../../../public/images/instagram.png';
import youtube from '../../../public/images/youtube.png';

const CheckOut = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const cartItems = useSelector(selectCartItems);
    const cartStickers = useSelector((state) => state.cart.stickers);

    const totalAmountWithoutDiscount = cartStickers.reduce((total, sticker) => total + sticker.price * sticker.quantity, 0);

    const totalAmountWithDiscount = totalAmountWithoutDiscount / 5;
    const unPaid = totalAmountWithoutDiscount - totalAmountWithDiscount
    const { currentStep, finalData } = useContext(MultiStepContext)
    function showStep(step) {
        switch (step) {
            case 1:
                return <DeliveryForm />
            case 2:
                return <RegisterForm />
            case 3:
                return <PaymentForm />
        }
    }

    const socialMediaLinks = {
        telegram: 'http://t.me/gabiskin',
        tiktok: 'https://www.tiktok.com/@gabiskin',
        instagram: ' http://instagram.com/gabiskin_',
        youtube: ' https://youtube.com/@gabiskin_?si=OKwEAlr-AWUkGtS0',
    };
    return (
        <>
            <div className='w-[22em] mb-[9em] md:w-[30em] lg:w-[35em] h-[40em] rounded-lg mx-auto bg-white'>
                <h1 className="text-lg font-bold text-gray-700 leading-tight text-center mt-[90px] mb-">
                    payment form
                </h1>
                <Stepper style={{ width: '100%' }} activeStep={currentStep - 1} orientation='horizontal'>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                </Stepper>
                {showStep(currentStep)}
            </div>


            <div className="mx-2 cart-items-container my-6 rounded-md bg-gray-100 p-6 relative top-[10em]">
                <h2 className="text-black text-2xl font-bold mb-4">Your Orders</h2>
                <hr className="border-black" />
                <ul className="mt-4">
                    {cartItems.map((item) => (
                        <li key={item.id} className="mb-6 border-b pb-4">
                            <div className="flex items-center justify-evenly">
                                <img className="w-[9em] md:w-[9em] lg:w-[20em] lg:h-26 object-cover mr-[2em] md:mr-[20em] lg-[60em]" src={item.imageUrl} alt="" />
                                <div>
                                    <p className="text-black mb-2 md:text-lg font-mono">
                                        <span className="mr-2 text-gray-600">Category:</span>
                                        {item.category}
                                    </p>
                                    <p className="text-black mb-2 md:text-lg font-mono">
                                        <span className="mr-2 text-gray-600">Sticker Price:</span>
                                        {item.price}
                                    </p>
                                    <p className="text-black md:text-lg font-mono">
                                        <span className="mr-2 text-gray-600">Quantity:</span>
                                        {item.quantity}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <p className="text-black font-bold">
                        Total Price: {totalAmountWithoutDiscount} ETB
                    </p>
                </div>
                <div className="mt-6">
                    <p className="text-black font-bold">
                        Initial Price: {totalAmountWithDiscount} ETB
                    </p>
                </div>
                <div className="mt-6">
                    <p className="text-black font-bold">
                        unpaid Price: {unPaid} ETB
                    </p>
                </div>
                <h2 className='text-gray-600 text-center mt-6 text-lg font-semibold'>visit our social media</h2>
                <div className="flex justify-around mt-8 mx-auto w-[20em]">
                    <a href={socialMediaLinks.telegram} target="_blank" rel="noopener noreferrer">
                        <img src={Telegram} alt="Telegram" className="w-8 h-8 cursor-pointer" />
                    </a>
                    <a href={socialMediaLinks.tiktok} target="_blank" rel="noopener noreferrer">
                        <img src={tiktok} alt="TikTok" className="w-8 h-8 cursor-pointer" />
                    </a>
                    <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className="w-8 h-8 cursor-pointer" />
                    </a>
                    <a href={socialMediaLinks.youtube} target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="Youtube" className="w-8 h-8 cursor-pointer" />
                    </a>
                </div>
                <h2 className='text-gray-600 text-[1.1em] font-semibold mt-[1.6em] '>Address if you want to visit us in our office</h2>
                <p className='text-gray-600 text-[1.1em]'> Kality total KCBC building</p>
            </div>
        </>
    );
};

export default CheckOut;

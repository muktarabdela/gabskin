import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import SellIcon from "@mui/icons-material/Sell";
import PaymentIcon from "@mui/icons-material/Payment";

const advantagesData = [
    {
        icon: <LocalShippingIcon />,
        title: "Express Delivery",
        description: "Ships in 24 Hours",
    },
    {
        icon: <SecurityIcon />,
        title: "Brand Warranty",
        description: "100% Original products",
    },
    {
        icon: <SellIcon />,
        title: "Exciting Deals",
        description: "On all prepaid orders",
    },
    {
        icon: <PaymentIcon />,
        title: "Secure Payments",
        description: "SSL / Secure Certificate",
    },
];

const AdvantageItem = ({ icon, title, description }) => (
    <div className="flex items-center mb-5">
        <div className="text-purple-600 text-3xl mr-5">{icon}</div>
        <div className="right">
            <strong>
                <p>{title}</p>
            </strong>
            <small>
                <p>{description}</p>
            </small>
        </div>
    </div>
);

function Advantage() {
    return (
        <div className="mb-24">
            <h1 className="text-3xl font-semibold text-center my-5">
                Our Advantages
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center mt-16 ml-2 sm:ml-32 md:ml-32 lg:mx-32">
                {advantagesData.map((advantage, index) => (
                    <AdvantageItem key={index} {...advantage} />
                ))}
            </div>
        </div>
    );
}

export default Advantage;

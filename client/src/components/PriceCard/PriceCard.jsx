import React from "react";
import "./pricecard.css"
import mini from "../../../public/images/ourWork/mini-stickers.jpg";
import Half_package from "../../../public/images/ourWork/Half package.jpg";
import premium_full from "../../../public/images/ourWork/photo_2024-01-20_19-05-47.jpg";
import Regular_Package from "../../../public/images/ourWork/Regular Package.jpg";
import special_full_package from "../../../public/images/ourWork/special full package.jpg";
import custom from "../../../public/images/price3.jpg";
import { Link } from "react-router-dom";

function PriceCard() {
  return (
    <section className=" mt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Welcome to Gabiskin
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here is the price package for our products
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

          {/* Pricing Card 1*/}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Mini Stickers</h3>
            <img src={mini} alt="mini" className="" />
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-4">
              Here is Price package for our Mini stickers
            </p>

            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left ">
              <li className="pricing-table__product">
                Small-sized (5-7 cm) - 40 ETB
              </li>
              <li className="pricing-table__product margin">
                Medium-sized (7-10 cm) - 50 ETB
              </li>
              <li className="pricing-table__product pricing-table__product--excluded">
                Big-sized (10-15 cm) - 60 ETB
              </li>
              <li className="pricing-table__product pricing-table__product--excluded">
                Custom size up to (20-30 cm) - 100 Birr
              </li>
              <li className="pricing-table__product">
                Custom Mini-Stickers - with only puls 5 birr
              </li>
              <li className="pricing-table__product ">
                <li className="pricing-table__product"> Quality</li>
                By Clints Choice
                <p className="">And we Have a discount for those who want to order in Quantity. </p>
                <p className="">we receive Minimum 300ETB worth order.  </p>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Order Now
            </a>
          </div>

          {/* Pricing Card 3*/}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Full-Skin packages</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">
              Here is Price package for our Full Skin Stickers
            </p>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="pricing-table__product margin-1">
                Half package Laptop Skin - Only for the back of your screen Excluding Delivery - 350 ETB
              </li>
              <img
                src={Half_package}
                alt="full one"
                className=" w-full h-[35vh]"
              />
              <hr />
              <li className="pricing-table__product margin-1">
                Regular Package Laptop skin - For the Back of your screen and  the keyboard area,   Excluding delivery -  600 ETB
              </li>
              <img
                src={Regular_Package}
                alt="full one"
                className=" w-full"
              />
            </ul>
            <Link
              to="/"
              className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Order Now
            </Link>
          </div>
          {/* Pricing Card 3*/}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Full-Skin packages</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-5">
              Here is Price package for our Full Skin Stickers
            </p>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="pricing-table__product">
                Special Full package Laptop skin - For the Front, Back and for the screen edge + Free delivery  -  800 ETB
              </li>
              <img
                src={special_full_package}
                alt="full one"
                className=" w-full"
              />
              <hr />
              <li className="pricing-table__product">
                Premium Full package Laptop skin -  For the Front + For Back and For the bottom and screen edge  of the laptop + Free Delivery  -  1000 ETB
              </li>
              <img
                src={premium_full}
                alt="full one"
                className=" w-full"
              />
              <li className="pricing-table__product">
                FULL WRAP DESKTOP SKIN 🖥 1500
              </li>
            </ul>
            <Link
              to="/"
              className="text-white bg-blue-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriceCard;


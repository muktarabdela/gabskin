import React from 'react';
import { Link } from 'react-router-dom';
import Telegram from '../../../public/images/telegram.png';
import tiktok from '../../../public/images/tiktok.png';
import instagram from '../../../public/images/instagram.png';
import youtube from '../../../public/images/youtube.png';
const UserAccountDetails = ({ userInfo }) => {
  if (!userInfo.deliveryInfo) {
    return (
      <div className="container mx-auto p-8 mt-[60px] text-center">
        <p className="mt-10 text-gray-300 text-4xl animate__animated animate__fadeInDown">
          Welcome to Gabi Skin
        </p>
        <p className="text-gray-400 text-xl animate__animated animate__fadeInUp">
          Home of Sticker
        </p>
        <div className="mt-4 animate__animated animate__fadeIn">
          <p className="text-gray-300">
            You haven't placed any orders yet. Explore our collection and
            <Link to="/" className="text-blue-500 hover:underline"> order now!</Link>
          </p>
        </div>
      </div>
    );
  }
  let paymentStatusText = '';
  let deliveryStatusText = '';

  // Define the text based on paymentStatus
  if (userInfo.paymentStatus === 'Pending') {
    paymentStatusText = 'Your payment is currently being processed. We will send you a notification once it is approved.';
  } else if (userInfo.paymentStatus === 'Paid') {
    paymentStatusText = 'We have received your payment and your order is now being processed. You will receive a notification when it is shipped.';
  } else if (userInfo.paymentStatus === 'Failed') {
    paymentStatusText = "There was an error processing your payment. Please try again or contact support for assistance";
  }

  // Define the text based on deliveryStatus
  if (userInfo.deliveryStatus === 'Pending') {
    deliveryStatusText = 'Your order has been approved and is now being prepared for delivery.';
  } else if (userInfo.deliveryStatus === 'Delivered') {
    deliveryStatusText = "We hope you enjoy your new order! Please don't hesitate to contact us if you have any questions.";

  } else if (userInfo.deliveryStatus === 'in progress') {
    deliveryStatusText = 'Your order is currently being processed and is on its way to you.';
  }

  const totalAmountWithoutDiscount = userInfo.totalPrice
  const totalAmountWithDiscount = totalAmountWithoutDiscount / 5

  const unpaid = totalAmountWithoutDiscount - totalAmountWithDiscount

  const socialMediaLinks = {
    telegram: 'http://t.me/gabiskin',
    tiktok: 'https://www.tiktok.com/@gabiskin',
    instagram: ' http://instagram.com/gabiskin_',
    youtube: ' https://youtube.com/@gabiskin_?si=OKwEAlr-AWUkGtS0',
  };
  return (

    <div className="container mx-auto p-2 mt-[60px]">
      <div className="text-right ml-5 mb-5">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="font-bold text-lg text-right">Hello: {userInfo.name || userInfo.deliveryInfo.firstName}</p>
          </div>
        </div>
      </div>
      <>
        <div className="mb-8 md:mr-[7em] lg:ml-[6em] ">
          <h2 className="text-2xl font-bold mb-4">Payment and Delivery Status</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-md">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Payment Status:</h3>
              <p className="text-gray-700 dark:text-gray-400">{paymentStatusText}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Delivery Status:</h3>
              <p className="text-gray-700 dark:text-gray-400">     {deliveryStatusText}
              </p>
            </div>
          </div>
        </div>
      </>

      {/* Delivery Information */}
      <div className="">

        <div className="mb-4 md:mr-[7em] lg:ml-[6em] ">
          <h2 className="text-xl font-bold mb-2">Delivery Information</h2>
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    First Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    last Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Sub City
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Delivery Location
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Delivery Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {userInfo.deliveryInfo.firstName}
                  </th>

                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {userInfo.deliveryInfo.lastName}
                  </th>

                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {userInfo.deliveryInfo.phone}
                  </th>

                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {userInfo.deliveryInfo.subCity}
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {userInfo.deliveryInfo.deliveryLocation}
                  </th>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <span className='text-[1.2em] ml-[2em] md:ml-[3em] lg:ml-[5em] rounded w-5 text-white border p-2 bg-blue-400'>
                      {userInfo.deliveryStatus}
                    </span>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Information */}
        <div className="mb-4 md:mr-[7em] lg:ml-[6em] ">
          <div className="md:col-span-2">
            <div className="">
              <h2 className="text-xl font-bold mb-2">Payment Information</h2>
              <div class="relative overflow-x-auto">

                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        Payment Screenshot Receipt
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Payment Method
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Payment Status
                      </th>
                    </tr>
                  </thead>


                  <tbody>
                    <tr className=''>
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src={userInfo.receiptScreenshot} alt="Payment Screenshot" className="w-[11em] rounded-md" />
                      </th>

                      <th scope="row" class="px-6  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <span className='text-[1.3em] ml-[1em] md:ml-[3em] lg:ml-[5em]'>                          {userInfo.paymentMethod}
                        </span>
                      </th>

                      <th scope="row" className=''>
                        <span className='text-[1.2em] ml-[2em] md:ml-[3em] lg:ml-[5em] rounded w-5  text-white border p-2 bg-blue-400'>  {userInfo.paymentStatus}</span>

                      </th>

                      <td ></td>
                    </tr>
                    <tr>

                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* Orders */}


      <div className="cart-items-container my-6 rounded-md bg-gray-100 p-6 w-[em]" >
        <h2 className="text-black text-2xl font-bold mb-4">Your Orders</h2>
        <hr className="border-black" />
        <ul className="mt-4">
          {userInfo.orders.map((order) =>
            order.stickers.map((sticker, index) => (
              <li key={sticker.id} className="mb-6 border-b pb-4">
                <div className="flex items-center justify-evenly">
                  <img className=" w-[9em] md:w-[9em] lg:w-[17em] lg:h-26 object-cover mr-[2em] md:mr-[21em]" src={sticker.imageUrl} alt="" />
                  <div>
                    <p className="text-black mb-2 md:text-lg font-mono">
                      <span className="mr-2 text-gray-600">Category:</span>
                      {sticker.category}
                    </p>
                    <p className="text-black mb-2 md:text-lg font-mono">
                      <span className="mr-2 text-gray-600">Sticker Price:</span>
                      {sticker.price}
                    </p>
                    <p className="text-black md:text-lg font-mono">
                      <span className="mr-2 text-gray-600">Quantity:</span>
                      {sticker.quantity}
                    </p>
                  </div>
                </div>
              </li>
            ))
          )}
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
          <p className="text-black font-bold mt-2">
            unpaid Price: {unpaid} ETB
          </p>
        </div>
        <h2 className='text-gray-600 text-center mt-6 text-lg font-semibold'>visit our social media</h2>
        <div className="flex justify-around mt-8 mx-auto w-[13em]">
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
        <div>
          <p className='dark:text-gray-500 mt-5 text-md'>Address if you want to visit us in our office</p>
          <p className='dark:text-gray-500 text-md'>Kality total KCBC bledge</p>
        </div>
      </div>
    </div>
  );
};
export default UserAccountDetails;

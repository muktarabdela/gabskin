import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../store/CartSlice';
import Header from "../header/Header";
import { Link } from "react-router-dom";

function Cart() {
  const cartStickers = useSelector((state) => state.cart.stickers);
  const dispatch = useDispatch();

  const updateCartCount = (newCount) => {};

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    const newTotalQuantity = cartStickers.reduce((total, sticker) => total + sticker.quantity, 0);
    updateCartCount(newTotalQuantity);
  };

  const handleIncrementQuantity = (itemId, itemPrice) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrementQuantity = (itemId, itemPrice) => {
    dispatch(decrementQuantity(itemId));
  };

  const totalAmountWithoutDiscount = cartStickers.reduce((total, sticker) => total + sticker.price * sticker.quantity, 0);
  const totalAmountWithDiscount = totalAmountWithoutDiscount / 5;

  return (
    <>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @layer utilities {
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
              }
            `,
          }}
        />
        <div className="h-full bg-none pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartStickers.length === 0 ? (
                <Link to='/'>
                  <div className="flex items-center justify-center h-48 text-2xl">
                    <p className="text-center text-gray-500">
                      Your cart is empty.{" "}
                      <span className="text-blue-700 font-bold">Start shopping now!</span>
                    </p>
                  </div>
                </Link>
              ) : (
                cartStickers.map((sticker) => (
                  <div key={sticker.id} className="flex flex-col sm:flex-row justify-between mb-6 rounded-lg bg-white p-6 shadow-md">
                    <img
                      src={sticker.imageUrl}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {sticker.category}
                        </h2>
                        <p className="mt-1 text-gray-700">
                          <span className="font-semibold">Size: </span>{sticker.size}
                        </p>
                        <p className="mt-1 text-gray-700">
                          <span className="font-semibold">Price: </span>{sticker.price} ETB
                        </p>
                      </div>
                      <div className="mt-4 flex flex-col sm:flex-row sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span className="mr-2 text-gray-700 font-semibold">Quantity:</span>
                          <button
                            className="cursor-pointer rounded-l bg-gray-200 px-3 py-1 text-xl text-purple-700"
                            onClick={() => handleDecrementQuantity(sticker.id)}
                          >
                            -
                          </button>
                          <input
                            className="h-8 w-12 border text-center text-black outline-none"
                            type="number"
                            value={sticker.quantity}
                            min={1}
                            onChange={(e) => updateQuantity(sticker.id, e.target.value)}
                          />
                          <button
                            className="cursor-pointer rounded-r bg-gray-200 px-3 py-1 text-xl text-green-700"
                            onClick={() => handleIncrementQuantity(sticker.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                          <p className="text-sm">{sticker.price} ETB</p>
                        </div>
                        <button
                          className="cursor-pointer text-red-700 mt-4 sm:mt-0"
                          onClick={() => handleRemoveFromCart(sticker.id)}
                        >
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-6 mb-24 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">{totalAmountWithoutDiscount.toFixed(2)} ETB</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Delivery</p>
                <p className="text-gray-700">Free</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold text-black">20% initial payment</p>
                <p className="text-gray-700 text-lg">{totalAmountWithDiscount.toFixed(2)} ETB</p>
              </div>
              <Link to="/checkout">
                {totalAmountWithoutDiscount < 300 ? (
                  <Link to='/'>
                    <p className="text-red-500 mt-2">
                      We receive a minimum 300 ETB worth order.
                    </p>
                  </Link>
                ) : (
                  <button
                    className={`mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 ${totalAmountWithoutDiscount < 300 && "cursor-not-allowed bg-gray-300"}`}
                    disabled={totalAmountWithoutDiscount < 300}
                    title={totalAmountWithoutDiscount < 300 ? "For orders total value must be more than 300 ETB" : ""}
                  >
                    Check out
                  </button>
                )}
              </Link>
            </div>
          </div>
        </div>
        <Header updateCartCount={updateCartCount} />
      </div>
    </>
  );
}

export default Cart;

'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import capsi from '../images/capsi.jpg';
import red from '../images/red.jpg';
import { GiCancel } from "react-icons/gi";


const CartSection = () => {
  
  return (
    <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-8 mx-auto p-4">
      {/* Product Information Section */}
      <div className="lg:col-span-2">
        <div className="bg-white shadow-md p-4">
          {/* Table Headers */}
          <div className="list grid grid-cols-4 items-center w-[120%]  pb-2 text-sm md:text-base">
            <p className="font-semibold text-sm md:text-lg">Product</p>
            <p className="font-semibold text-sm md:text-lg">Price</p>
            <p className="font-semibold text-sm md:text-lg">Quantity</p>
            <p className="font-semibold text-sm md:text-lg">Subtotal</p>
          </div>

          {/* Cart Items */}
          <div className="max-w-full mx-auto border-t-2 bg-white p-6 shadow-lg rounded-lg">
            {/* Cart Item 1 */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-4">
              <div className="flex items-center">
                <Image src={capsi} alt="Green Capsicum" width={80} className=" object-cover rounded-lg" />

                <div className="ml-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-9">
                  <h2 className="text-base font-semibold">Green Capsicum</h2>
                  <p className="text-gray-500">$14.00</p>
                </div>
              </div>
              <div className="flex items-center mt-4 sm:mt-0">
                <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded" >-</button>
                <span className="mx-4">5</span>
                <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded" >+</button>
              </div>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <p className="text-gray-800">$70.00</p>
                <GiCancel />
              </div>
            </div>

            {/* Cart Item 2 */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-4">
              <div className="flex items-center">
                <Image src={red} alt="Green Capsicum" width={80} className=" object-cover rounded-lg" />

                <div className="ml-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-9">
                  <h2 className="text-lg font-semibold">Red Capsicum</h2>
                  <p className="text-gray-500">$14.00</p>
                </div>
              </div>
              <div className="flex items-center mt-4 sm:mt-0">
                <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded" >-</button>
                <span className="mx-4">1</span>
                <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded" >+</button>
              </div>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <p className="text-gray-800">$14.00</p>
                <GiCancel />
              </div>
            </div>


            {/* Coupon Code Section */}
            <div className="flex flex-col md:flex-row items-center space-x-2 mt-8 mb-6">
              <label className="text-lg py-3 md:py-0 font-semibold w-[150px] md:w-[200px]">Coupon Code</label>
              <div className="flex flex-col md:flex-row justify-between w-full border border-gray-300 rounded-3xl overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] p-3 focus:outline-none"
                />
                <button className="bg-black  text-white rounded-3xl px-6 py-3 hover:bg-gray-800">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Total Section */}
      <div className="bg-white shadow-md p-6 h-fit mt-4 sm:mt-0">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Cart Total</h2>
        <div className="flex justify-between mb-2 text-sm sm:text-base">
          <p>Subtotal:</p>
          <p>$84.00</p>
        </div>
        <div className="flex justify-between mb-2 text-sm sm:text-base">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between mb-4 border-t pt-4 text-sm sm:text-base">
          <p className="font-semibold">Total:</p>
          <p className="font-semibold">$84.00</p>
        </div>
        <button className="bg-green-500 text-white w-full py-3 rounded-full text-sm sm:text-base">
          Proceed to Checkout
        </button>
      </div>
    </div>


  );
}

export default CartSection;

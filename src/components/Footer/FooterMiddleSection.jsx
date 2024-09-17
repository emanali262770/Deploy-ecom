import React from 'react';
import { SiOverleaf } from 'react-icons/si';
import footerpic from '../../app/images/footerpic.png';
import Image from 'next/image';

const FooterMiddleSection = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-6 gap-6">
        {/* Left Section - Brand Info */}
        <div className="col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <SiOverleaf size={40} color="green" />
            <h2 className="text-3xl font-bold text-gray-800">Ecobazar</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex space-x-4">
            <p className="text-gray-700 font-semibold border-b-2 border-green-600 pb-2">
              (219) 555-0114
            </p>
            <span className="text-gray-500">or</span>
            <p className="font-semibold border-b-2 border-green-600 pb-2">
              Proxy@gmail.com
            </p>
          </div>
        </div>

        {/* Center Sections - Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800">My Account</h3>
          <ul className="text-gray-600 space-y-1">
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800">Helps</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Contact</li>
            <li>FAQs</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-800">Proxy</h3>
          <ul className="text-gray-600 space-y-1">
            <li>About</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Right Section - Download Mobile App */}
        <div className="flex flex-col space-y-4 w-[200px] col-span-1">
          <h3 className="font-semibold text-gray-800">Download Mobile App</h3>
          <div className="flex">
            <a href="#" className="w-[200px]">
              <Image src={footerpic} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddleSection;

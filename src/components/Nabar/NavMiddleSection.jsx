// components/NavMiddleSection.jsx
import React from 'react';
import { FaBars, FaPhoneAlt } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


import ecobazaar from '../../app/images/ecobazaar.jpg'
import { RiArrowDropDownLine } from "react-icons/ri";

import Image from 'next/image';
const NavMiddleSection = () => {
  return (
    <div>
      <header className="bg-white  ">
        {/* Top Section */}
        <div className="container w-[95vw] mx-auto px-2 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div>

            <Image src={ecobazaar} width={150} height={50} />

          </div>

          {/* Search Bar */}
          <div className="flex items-center w-1/2 bg-gray-100 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 text-sm border-none outline-none bg-transparent"
            />
            <button className="bg-green-600 text-white px-4 py-2">Search</button>
          </div>

          {/* Contact Info */}
          <div className="flex gap-3 items-center space-x-1 text-gray-500 text-sm">
            <FaPhoneAlt size={25}/> {/* Adjust icon size */}
            <div className="flex flex-col">
              <span className="text-xs">Customer Services</span> {/* Smaller text size */}
              <span className="font-bold text-black text-lg">(219) 555-0114</span> {/* Bold and larger number */}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <nav className="">
          <div className="container bg-black w-[95vw] mx-auto flex items-center px-6">
            {/* All Categories Button */}
            <div className="bg-green-600 p-3">
              <FaBars color="white" size={24} />
            </div>
            <div className="bg-[#393e46] p-3">
              <span className="text-white flex items-center">All Categories <RiArrowDropDownLine size={24} /></span>
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center space-x-6 ml-4 text-white">
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Pages
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Icons Section */}
            <div className="flex items-center ml-auto space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <CiHeart size={30} />
              </a>
              <a href="#" className="relative text-white hover:text-gray-300">
                <IoCartOutline size={30} />
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs rounded-full px-1">
                  2
                </span>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <CiUser size={30} />
              </a>
            </div>
          </div>
        </nav>
      </header>

    </div>
  );
};

export default NavMiddleSection;

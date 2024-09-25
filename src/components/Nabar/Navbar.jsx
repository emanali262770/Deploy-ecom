'use client'
import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import NavMiddleSection from './NavMiddleSection';
import Login from '@/components/form/Login';
import Signup from '@/components/form/Signup';

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState('login'); // New state to track the popup type

  const openPopup = (type) => {
    setPopupType(type);
    setIsPopupOpen(true);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed w-full top-0 left-0 right-0 z-50 bg-white">
        {/* Top bar */}
        <div className="flex flex-wrap md:flex-nowrap w-[95vw] mx-auto justify-between p-2 border-b-2 border-gray-200">
          <div className="flex items-center gap-2">
            <IoLocationOutline color="#6b7280" size={24} />
            <p className="text-gray-500 text-xs md:text-sm">Store Location: Lincoln-344, Illinois, Chicago, USA</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-0">
            <select className="text-gray-500 text-xs md:text-sm outline-none">
              <option className="text-gray-500 text-xs md:text-sm" value="">Eng</option>
              <option className="text-gray-500 text-xs md:text-sm" value="">Hindi</option>
            </select>
            <select className="text-gray-500 text-xs md:text-sm outline-none">
              <option className="text-gray-500 text-xs md:text-sm" value="">USD</option>
              <option className="text-gray-500 text-xs md:text-sm" value="">PKR</option>
            </select>
            <div>
              {/* Buttons to open login and signup popups */}
              <button onClick={() => openPopup('login')}>Login</button>
              <button onClick={() => openPopup('signup')}>Signup</button>
            </div>
          </div>
        </div>

        {/* Navbar middle section */}
        <NavMiddleSection />
      </div>

      {/* Conditionally render either the Login or Signup popup */}
      {popupType === 'login' ? (
        <Login isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
      ) : (
        <Signup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen} />
      )}

      {/* Extra space to accommodate the fixed navbar */}
      <div className="h-[166px]"></div>
    </>
  );
};

export default Navbar;

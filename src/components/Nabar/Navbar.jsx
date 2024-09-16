import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import NavMiddleSection from './NavMiddleSection';

const Navbar = () => {
  return (
    <>
     

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        {/* Top bar */}
        <div className="flex justify-between p-2 border-b-2 border-gray-200">
          <div className="flex items-center gap-2">
            <IoLocationOutline color="#6b7280" size={24} />
            <p className="text-gray-500 text-sm">Store Location: Lincoln-344, Illinois, Chicago, USA</p>
          </div>
          <div className="flex items-center gap-4">
            <select className="text-gray-500 text-sm outline-none">
              <option className="text-gray-500 text-sm" value="">Eng</option>
              <option className="text-gray-500 text-sm" value="">Hindi</option>
            </select>
            <select className="text-gray-500 text-sm outline-none">
              <option className="text-gray-500 text-sm" value="">USD</option>
              <option className="text-gray-500 text-sm" value="">PKR</option>
            </select>
          </div>
        </div>
        
        {/* Navbar middle section */}
        <NavMiddleSection />
      </div>

      {/* Extra space to accommodate the fixed navbar */}
      <div className="h-[166px] "></div> 
    </>
  );
}

export default Navbar;

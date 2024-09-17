import React from 'react'
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const FooterTopSection = () => {
  return (
    <div className='bg-black'>
    <div className=" text-white max-w-[1300px]  mx-auto flex items-center justify-between mt-10 p-6 space-x-4">
      <div className="flex  items-center space-x-6">
        <SlEnvolopeLetter color='green' size={330}/>
        <div>
          <h2 className="text-lg font-semibold">Subscribe to our Newsletter</h2>
          <p className="text-sm text-gray-400">
            Pellentesque eu nibh eget mauris congue mattis mattis.
          </p>
        </div>
      </div>
      <div className="flex items-center bg-gray-800 rounded-l-full ">
        <input
          type="email"
          placeholder="Your email address"
          className="px-4 py-2 w-[300px] bg-gray-800 text-white rounded-l-full focus:outline-none"
        />
        <button className="bg-green-500 px-6 py-2 rounded-3xl text-white font-semibold hover:bg-green-600">
          Subscribe
        </button>
      </div>
      <div className="flex items-center space-x-3">
        <a href="#" className=" text-gray-400 hover:text-white hover:bg-green-600 p-2 rounded-3xl duration-300">
          <FaFacebookF/>
        </a>
        <a href="#" className=" text-gray-400 hover:text-white hover:bg-green-600 p-2 rounded-3xl duration-300">
          <FaXTwitter/>
        </a>
        <a href="#" className=" text-gray-400 hover:text-white hover:bg-green-600 p-2 rounded-3xl duration-300">
          <FaInstagram/>
        </a>
        <a href="#" className="text-gray-400 hover:text-white hover:bg-green-600 p-2 rounded-3xl duration-300">
         <FaPinterestP/>
        </a>
      </div>
    </div>
    </div>
  )
}

export default FooterTopSection
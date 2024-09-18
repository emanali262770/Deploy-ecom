import React from 'react'
import pay from '../../app/images/pay.png'
import Image from 'next/image'
const FooterBottomSection = () => {
  return (
    <div className="bg-white w-[95vw] mx-auto   border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Copyright Text */}
        <p className="text-gray-500 text-sm">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </p>

        {/* Payment Icons */}
        <div className="flex items-center space-x-2">
         
          <Image src={pay} width={300} />
        </div>
      </div>
    </div>
  )
}

export default FooterBottomSection
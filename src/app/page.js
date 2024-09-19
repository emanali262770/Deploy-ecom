import Footer from '@/components/Footer/Footer'
import HeaderCategory from '@/components/Header/HeaderCategory'
import Navbar from '@/components/Nabar/Navbar'
import ShoppingBenefits from '@/components/Services/ShoppingBenefits'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeaderCategory/>
      {/* {/* <ShoppingBenefits/> */}
     <Footer/>  
    </div>
  )
}

export default page
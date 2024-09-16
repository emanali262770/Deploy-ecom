import React from 'react';
import { FaShippingFast, FaHeadset, FaShieldAlt, FaUndo } from 'react-icons/fa'; // Use relevant icons

const ShoppingBenefits = () => {
  const benefits = [
    {
      icon: <FaShippingFast className="text-green-600 text-4xl" />,
      title: 'Free Shipping',
      description: 'Free shipping with discount',
    },
    {
      icon: <FaHeadset className="text-green-600 text-4xl" />,
      title: 'Great Support 24/7',
      description: 'Instant access to Contact',
    },
    {
      icon: <FaShieldAlt className="text-white text-4xl bg-green-500 p-2 rounded-full" />,
      title: '100% Secure Payment',
      description: 'We ensure your money is safe',
    },
    {
      icon: <FaUndo className="text-green-600 text-4xl" />,
      title: 'Money-Back Guarantee',
      description: '30 days money-back',
    },
  ];

  return (
    <div className="flex justify-around items-center mt-10 bg-gray-100 py-5 px-3 lg:px-20">
      {benefits.map((benefit, index) => (
        <div key={index} className="flex flex-col items-center text-center mx-4">
          <div className="bg-green-100 rounded-full p-4 mb-3">{benefit.icon}</div>
          <h3 className="font-semibold text-lg">{benefit.title}</h3>
          <p className="text-gray-500 text-sm">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingBenefits;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import salad from '../../app/images/salad.png'; // Ensure the correct path to the image

const HeaderSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect="fade"
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Pagination, Autoplay]}
      className="mySwiper w-full" // Ensure full width
    >
      <SwiperSlide className="flex relative  items-center justify-between bg-[#0b592a] p-8 lg:p-16 w-full">
        {/* Text Content */}
        <div className="max-w-lg text-white flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Fresh & Healthy <br /> Organic Food
          </h1>
          <p className="text-lg lg:text-xl text-white mb-6">
            SALE UP TO <br />
            <span className="text-4xl lg:text-5xl font-bold">48% OFF</span>
          </p>
          <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-full hover:bg-green-600 transition duration-300">
            Shop now <span className="rotate-45">→</span>
          </button>
        </div>

        {/* Image Content */}
        <div className="top-4 right-0 absolute">
          <Image
            src={salad}
            alt="Organic Food"
            className="max-w-xs lg:max-w-sm object-contain rounded-lg"
            priority
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="flex relative  items-center justify-between bg-[#0b592a] p-8 lg:p-16 w-full">
        {/* Text Content */}
        <div className="max-w-lg text-white flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Salad <br /> Organic Food
          </h1>
          <p className="text-lg lg:text-xl text-white mb-6">
            SALE UP TO <br />
            <span className="text-4xl lg:text-5xl font-bold">48% OFF</span>
          </p>
          <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-green-500 text-white text-lg font-medium rounded-full hover:bg-green-600 transition duration-300">
            Shop now <span className="rotate-45">→</span>
          </button>
        </div>

        {/* Image Content */}
        <div className="top-4 right-0 absolute">
          <Image
            src={salad}
            alt="Organic Food"
            className="max-w-xs lg:max-w-sm object-contain rounded-lg"
            priority
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderSlider;

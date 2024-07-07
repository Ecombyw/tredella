"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/navigation';
// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const MainSlider = ({ MainImage }) => {
  return (
    <div className=" mt-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className=""
      >
        {MainImage.map((array, index) => (
          <SwiperSlide key={index}>
            <Image
              width={500}
              height={250}
              className="w-full h-full md:h-[250px] border-4 p-2 border-gray-100 bg-contain"
              src={array.image}
              alt="Image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;

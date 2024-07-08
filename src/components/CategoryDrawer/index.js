"use client";
import { Drawer } from "antd";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import imageUrl from "../../../public/images/aboutm1.jpg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiCloseFill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";

const CategoryDrawer = ({ drawerOpen, setDrawerOpen }) => {
  const [showCategory, setShowCategory] = useState(true);
  const [swiperRef, setSwiperRef] = useState(null);
  const pauseAutoplay = () => {
    if (swiperRef && swiperRef.autoplay) {
      swiperRef.autoplay.stop();
    }
  };

  // Function to resume autoplay
  const resumeAutoplay = () => {
    if (swiperRef && swiperRef.autoplay) {
      swiperRef.autoplay.start();
    }
  };
  let category = [
    { name: "Electronics" },
    { name: "Computers" },
    { name: "Smart Home" },
    { name: "Arts & Crafts" },
    { name: "Automotive" },
  ];
  let subCategory = [
    {
      name: "Electronics",
      childCategory: [
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
      ],
    },
    {
      name: "Computers",
      childCategory: [
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
      ],
    },
    {
      name: "Smart Home",
      childCategory: [
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
      ],
    },
    {
      name: "Arts & Crafts",
      childCategory: [
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
      ],
    },
    {
      name: "Automotive",
      childCategory: [
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
        { name: "computer" },
      ],
    },
  ];

  const renderCategories = () => {
    return category?.map((item ,index) => {
      return (
        <div
        key={index}
          onClick={() => setShowCategory(false)}
          className="flex items-center justify-between py-2 hover:bg-zinc-200 cursor-pointer px-2 rounded"
        >
          <p>{item?.name}</p>
          <FaAngleRight />
        </div>
      );
    });
  };

  const renderSubCategories = () => {
    const renderChildCategory = (childCategory) => {
      return childCategory?.map((item, index) => {
        return (
          <div key={index}  className="w-[100px] mb-2">
            <Image
              src={imageUrl}
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <p>{item?.name}</p>
          </div>
        );
      });
    };
    return subCategory?.map((item, index) => {
      return (
        <div key={index} className=" overflow-x-auto">
          <p className="mb-3">{item?.name}</p>
          <div className="flex items-center gap-4">
            {renderChildCategory(item?.childCategory)}
          </div>
        </div>
      );
    });
  };
  return (
    <Drawer
      closeIcon={null}
      placement="left"
      onClose={() => setDrawerOpen(false)}
      open={drawerOpen}
    >
      <div>
        <h2 className="font-semibold mb-5 flex items-center gap-2">
          {showCategory ? (
            <RiCloseFill
              onClick={() => setDrawerOpen(false)}
              size={20}
              className="cursor-pointer"
            />
          ) : (
            <IoMdArrowRoundBack
              onClick={() => setShowCategory(true)}
              size={20}
              className="cursor-pointer"
            />
          )}
          {showCategory ? "Categories" : "Sub Category"}
        </h2>
      </div>
      {showCategory && renderCategories()}
      {!showCategory && renderSubCategories()}
    </Drawer>
  );
};

export default CategoryDrawer;

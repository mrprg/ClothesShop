import React, { useState } from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import css from "../../styles/Slider.module.css";
import MotionDiv from "../components/MotionDiv";
import { SCALE_UP, SLIDE_LEFT, SLIDE_RIGHT } from "../../lib/framerMotionData";

const SliderComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderContents = [
    {
      image:
        "https://preview.colorlib.com/theme/fashe/images/master-slide-01.jpg.webp",
    },
    {
      image:
        "https://preview.colorlib.com/theme/fashe/images/master-slide-02.jpg.webp",
    },
    {
      image:
        "https://preview.colorlib.com/theme/fashe/images/master-slide-03.jpg.webp",
    },
    {
      image:
        "https://preview.colorlib.com/theme/fashe/images/master-slide-04.jpg.webp",
    },
  ];

  return (
    <div>
      <Carousel
        draggable
        swipeable
        className=" relative"
        responsive={responsive}
        customLeftArrow={
          <button className=" bg-black/40 absolute  hover:bg-red-500/80 duration-500  rounded-full left-2 md:left-10">
            <ChevronLeftIcon className=" text-white m-2 md:m-3 h-3 w-3 md:w-5 md:h-5" />
          </button>
        }
        customRightArrow={
          <button className=" bg-black/40 absolute  hover:bg-red-500/80 duration-500   rounded-full right-2 md:right-10">
            <ChevronRightIcon className=" text-white m-2 md:m-3 h-3 w-3 md:w-5 md:h-5" />
          </button>
        }
      >
        {sliderContents.map((item, index) => {
          return (
            <MotionDiv key={index}>
              <div className=" group relative ">
                <div
                  className={` z-10  flex flex-col items-center absolute md:top-[40%] top-[30%] left-[10%] sm:top-[30%] sm:left-[30%]   md:left-[40%] justify-center `}
                >
                  <motion.h1
                    variants={SLIDE_LEFT}
                    className={` text-white text-[16px] md:text-[18px] ${css.sliderText}   `}
                  >
                    Women Collection 2018
                  </motion.h1>
                  <motion.h1
                    variants={SLIDE_RIGHT}
                    className=" uppercase text-[40px] md:text-[60px] font-bold tracking-wide text-white"
                  >
                    new arrivals
                  </motion.h1>
                  <motion.button
                    variants={SCALE_UP}
                    className=" bg-white uppercase p-2 md:px-6 px-3 text-sm md:text-base font-[300] tracking-wide hover:bg-red-500/80 duration-500 hover:text-white rounded-full"
                  >
                    Shop now
                  </motion.button>
                </div>
                <img
                  draggable
                  src={item.image}
                  className={` md:h-[570px] h-[370px]  object-cover object-center w-full`}
                />
              </div>
            </MotionDiv>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SliderComponent;

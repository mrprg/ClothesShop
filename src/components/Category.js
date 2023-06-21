import React from "react";
import css from "../../styles/Category.module.css";

const categoryContents = [
  [
    {
      image: "https://preview.colorlib.com/theme/fashe/images/banner-02.jpg",
      isOffSection: false,
      name: "dresses",
    },
    {
      image: "https://preview.colorlib.com/theme/fashe/images/banner-05.jpg",
      isOffSection: false,
      name: "Sunglasses",
    },
  ],

  [
    {
      image: "https://preview.colorlib.com/theme/fashe/images/banner-03.jpg",
      isOffSection: false,
      name: "watches",
    },
    {
      image: "https://preview.colorlib.com/theme/fashe/images/banner-04.jpg",
      isOffSection: false,
      name: "footerwear",
    },
  ],
  [
    {
      image: "https://preview.colorlib.com/theme/fashe/images/banner-07.jpg",
      isOffSection: false,
      name: "bags",
    },
    {
      image: "",
      isOffSection: true,
    },
  ],
];

const Category = () => {
  const handleButtonClick = (image) => {
    console.log(`Button clicked for ${image}`);
  };

  return (
    <div className="flex  justify-center items-start mt-8 py-10 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className={` flex md:flex-row flex-col`}>
          {categoryContents.map((row, index) => {
            return (
              <div key={index} className="  flex flex-col mx-3 ">
                {row.map((col, index) => {
                  return !col.isOffSection ? (
                    <div key={index} className={` relative w-full my-3 `}>
                      <img
                        src={col.image}
                        alt="Image 1"
                        className="w-full  h-auto grow transition duration-300 ease-in transform hover:scale-[1.03]  "
                      />
                      <button
                        className="  h-10 absolute bottom-10 left-1/2 transform
                 -translate-x-1/2 bg-white text-gray-700 hover:bg-red-500/80 
                  hover:text-white transition-colors duration-300 ease-in hover:transition-delay-300 px-10 py-2 "
                        onClick={() => handleButtonClick("Image 1")}
                      >
                        <a className=" uppercase"   href="#">{col.name}</a>
                      </button>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className={` w-full my-3 bg-[rgb(242,242,242)] flex flex-col py-10 px-10 items-center justify-center  h-full  `}
                    >
                      <h1 className="  text-black   text-center  font-semibold  text-4xl">
                        Sign up & get <br /> 20% off
                      </h1>
                      <p className=" text-gray-500 text-center">
                        Be the frist to know about the latest fashion news and
                        get exclusive offers
                      </p>
                      <button className=" uppercase mt-8 rounded-full hover:bg-red-500/80 duration-500 bg-black  p-3 px-12   text-white">
                        sign up
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;

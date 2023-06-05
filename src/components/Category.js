import React from "react";
import css from "../../styles/Category.module.css";

const Category = () => {
  const handleButtonClick = (image) => {
    console.log(`Button clicked for ${image}`);
  };

  return (
    <div className="flex justify-center items-start mt-8 py-10 px-40">
      <div className="w-full max-w-3xl mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className={`${css.imagecontainer} `}>
            <img
              src="https://preview.colorlib.com/theme/fashe/images/banner-02.jpg"
              alt="Image 1"
              className="w-full h-auto transition-transform transform hover:scale-110  "
            />
            <button
              className=" w-500 h-10 absolute bottom-10 left-1/2 transform
               -translate-x-1/2 bg-white text-gray-700 hover:bg-red-600
                hover:text-white transition-colors duration-500 ease-in-out hover:transition-delay-100 px-4 py-2 rounded"
              onClick={() => handleButtonClick("Image 1")}
            >
              <a href="#">DRESSES</a>
            </button>
          </div>
          <div className={css.imagecontainer}>
            <img
              src="https://preview.colorlib.com/theme/fashe/images/banner-03.jpg"
              alt="Image 2"
              className="w-full h-auto transition-transform transform hover:scale-110"
            />
            <button
              className=" w-500 h-10 absolute bottom-10 left-1/2 transform
               -translate-x-1/2 bg-white text-gray-700 hover:bg-red-600
                hover:text-white transition-colors duration-500 ease-in-out hover:transition-delay-100 px-4 py-2 rounded"
              onClick={() => handleButtonClick("Image 1")}
            >
              <a href="#">WATCHES</a>
            </button>
          </div>
          <div className={css.imagecontainer}>
            <img
              src="https://preview.colorlib.com/theme/fashe/images/banner-04.jpg"
              alt="Image 3"
              className="w-full h-auto transition-transform transform hover:scale-110"
            />
            <button
              className=" w-500 h-10 absolute bottom-10 left-1/2 transform
               -translate-x-1/2 bg-white text-gray-700 hover:bg-red-600
                hover:text-white transition-colors duration-500 ease-in-out hover:transition-delay-100 px-4 py-2 rounded"
              onClick={() => handleButtonClick("Image 1")}
            >
              <a href="#">BAGS</a>
            </button>
          </div>
          <div className={css.imagecontainer}>
            <img
              src="https://preview.colorlib.com/theme/fashe/images/banner-05.jpg"
              alt="Image 4"
              className="w-full h-auto transition-transform transform hover:scale-110"
            />
            <button
              className=" w-500 h-10 absolute bottom-10 left-1/2 transform
               -translate-x-1/2 bg-white text-gray-700 hover:bg-red-600
                hover:text-white transition-colors duration-500 ease-in-out hover:transition-delay-100 px-4 py-2 rounded"
              onClick={() => handleButtonClick("Image 1")}
            >
              <a href="#">SUNGLASSES</a>
            </button>
          </div>
          <div className={css.imagecontainer}>
            <img
              src="https://preview.colorlib.com/theme/fashe/images/banner-07.jpg"
              alt="Image 5"
              className="w-full h-auto transition-transform transform hover:scale-110"
            />
            <button
              className=" w-500 h-10 absolute bottom-10 left-1/2 transform
               -translate-x-1/2 bg-white text-gray-700 hover:bg-red-600
                hover:text-white transition-colors duration-500 ease-in-out hover:transition-delay-100 px-4 py-2 rounded"
              onClick={() => handleButtonClick("Image 1")}
            >
              <a href="#">SHOES</a>
            </button>
          </div>
          <div className={css.imagecontainer}>
            <img
              src="https://preview.colorlib.com/theme/fashe/images/icons/bg-01.jpg"
              alt="Image 6"
              className="w-full h-auto transition-transform transform hover:scale-110"
            />
            {/* <h3 className="z-10  text-gray-700">SIGN UP & GET 20% OFF</h3>
            <p>
              Be the frist to know about the latest fashion news and get
              exclu-sive offers
            </p> */}

            <button
              className=" w-100 h-70 absolute bottom-10 left-1/2 transform
               -translate-x-1/2 bg-black text-white hover:bg-red-600
                hover:text-white transition-colors duration-500 ease-in-out hover:transition-delay-100 px-4 py-2 rounded-full"
              onClick={() => handleButtonClick("Image 1")}
            >
              <a href="#">SIGN UP</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

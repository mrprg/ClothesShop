import { React, useState, useEffect } from "react";

const Discount = () => {
  const [countdown, setCountdown] = useState(86400);

  useEffect(() => {
    // Start the countdown
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear the timer when the component is unmounted or countdown reaches 0
    if (countdown === 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [countdown]);

  // Calculate days, hours, minutes, and seconds from the countdown value
  const days = Math.floor(countdown / (60 * 60 * 24));
  const hours = Math.floor((countdown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  return (
    <section className="bg-slate-100 flex items-center justify-center space-x-10 mt-9 mb-16 ">
      <div className="relative ">
        <img
          src="https://preview.colorlib.com/theme/fashe/images/banner-08.jpg"
          className="max-w-lg py-20 brightness-50  transition duration-400 ease-in-out hover:brightness-90   "
          alt="Banner Image"
        />
        <div className="tracking-wide text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className=" text-white text-3xl font-bold tracking-wide">
            The Beauty
          </p>
          <p className="text-white text-5xl font-bold whitespace-nowrap filter  ">
            LOOK BOOK
          </p>
          <a
            href="#"
            className=" text-white p-4 leading-10 border-b border-white hover:border-white"
          >
            view collection
          </a>
        </div>
      </div>
      <div className="relative w-max">
        <img
          src="https://preview.colorlib.com/theme/fashe/images/shop-item-09.jpg"
          className="max-w-lg "
          alt="Shop Item Image"
        />
        <div className="tracking-wide text-center absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-center">Gafas sol Hawkers one</p>
          <p className="text-center p-3">
            <span className="line-through px-3">$29.50</span>
            <span className="text-red-500">$15.90</span>
          </p>
          <p className="text-center whitespace-nowrap text-lg font-semibold text-gray-800">
            {days} days | {hours} hours | {minutes} minutes | {seconds} seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discount;

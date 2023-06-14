import React from "react";

const Shipping = () => {
  return (
    <section className="flex justify-center pt-16 pb-3">
      <div className="flex space-x-9">
        <div className="border-r pr-9 text-center">
          <h3 className="text-center">Free Delivery Worldwide</h3>
          <a
            className="text-center text-sm text-gray-500 hover:text-red-500"
            href="#"
          >
            Click here for more info
          </a>
        </div>
        <div className="border-r pr-8 text-center">
          <h3 className="text-center">30 Days Return</h3>
          <p className="text-sm text-gray-500">
            Simply return it within 30 days for an exchange.
          </p>
        </div>
        <div className="pl-8 text-center">
          <h3 className="text-center ">Store Opening</h3>
          <p className="text-sm text-gray-500 ">
            Shop open from Monday to Sunday
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shipping;

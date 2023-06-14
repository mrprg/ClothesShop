import React from "react";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import css from "../../styles/Header.module.css";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-4 mt-16 h-96">
      <div className="flex justify-center space-x-20 mt-14">
        <section>
          <h4 className="font-bold text-black pb-8">GET IN TOUCH</h4>
          <p className="w-96 text-sm text-gray-500 mb-8">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
            York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className=" py-4 flex items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-black hover:text-gray-400">
                <FaInstagram
                  size={18}
                  style={{ marginRight: "5px" }}
                  className={css.icons}
                />
              </a>
              <a href="#" className="text-black hover:text-gray-400">
                <FaFacebook
                  size={18}
                  style={{ marginRight: "5px" }}
                  className={css.icons}
                />
              </a>
              <a href="#" className="text-black hover:text-gray-400">
                <FaPinterest
                  size={18}
                  style={{ marginRight: "5px" }}
                  className={css.icons}
                />
              </a>
            </div>
          </div>
        </section>

        <section>
          <section class="flex space-x-9">
            <div class="flex-shrink-0">
              <h4 class="font-bold text-black pb-8">CATEGORIES</h4>
              <ul class="text-sm text-gray-500 mb-8">
                <li class="pb-4">
                  <a href="#" class="">
                    Men
                  </a>
                </li>
                <li class="pb-4">
                  <a href="#" class="">
                    Women
                  </a>
                </li>
                <li class="pb-4">
                  <a href="#" class="">
                    Dresses
                  </a>
                </li>
                <li class="pb-4">
                  <a href="#" class="">
                    Sunglasses
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-shrink-0">
              <h4 class="font-bold text-black pb-8">LINKS</h4>
              <ul class="text-sm text-gray-500 mb-8">
                <li class="pb-4">
                  <a href="#" class="">
                    Search
                  </a>
                </li>
                <li class="pb-4">
                  <a href="#" class="">
                    About Us
                  </a>
                </li>
                <li class="pb-4">
                  <a href="#" class="">
                    Contact Us
                  </a>
                </li>
                <li class="pb-4">
                  <a href="#" class="">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-shrink-0">
              <h4 class="font-bold text-black pb-8">HELP</h4>
              <ul class="text-sm text-gray-500 mb-8">
                <li class="pb-4">
                  <a href="#" class="">
                    Track Order
                  </a>
                </li>
                <li class="pb-4">
                  <a href="#" class="">
                    Returns
                  </a>
                </li>
                <li class="pb-4">
                  <a href="#" class="">
                    Shipping
                  </a>
                </li>
                <li class="pb-4">
                  <a href="#" class="">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section class="flex flex-col">
          <h3 class="font-bold text-black pb-8">NEWSLETTER</h3>
          <input
            placeholder="email@example.com"
            className="bg-transparent mb-6 border-b border-black hover:border-red-500 outline-none "
          />
          <button
            className="w-100 h-70 bg-black text-white hover:bg-red-600 hover:text-white
          transition-colors duration-500 ease-in-out hover:transition-delay-100 px-4 py-2 rounded-full"
          >
            SUBSCRIBE
          </button>
        </section>
      </div>
      <div class="text-center text-gray-400 text-sm mt-9">
        Copyright © 2023 <span className="hover:text-red-600">Fashe.</span> All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

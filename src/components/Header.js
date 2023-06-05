import React from "react";
import Main from "./Main";
import { FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import css from "../../styles/Header.module.css";

const Header = () => {
  return (
    <section>
      <topbar className="bg-gray-100 py-4 px-6 flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-400">
            <FaInstagram
              size={21}
              style={{ marginRight: "5px" }}
              className={css.icons}
            />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaFacebook
              size={21}
              style={{ marginRight: "5px" }}
              className={css.icons}
            />
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            <FaPinterest
              size={21}
              style={{ marginRight: "5px" }}
              className={css.icons}
            />
          </a>
        </div>
        <div className="text-black">
          <p className="text-sm">info@fashe.com</p>
        </div>
      </topbar>
      <header className="bg-white text-black py-4 px-8 z-10 ">
        <a>
          <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png"></img>
        </a>
        <div className="container mx-auto flex items-center justify-center ">
          <nav className="">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="#" className="text-black hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-400">
                  Cart
                </a>
              </li>
              <Main />
            </ul>
          </nav>
        </div>
      </header>
      {/* <div className="bg-gray-300 text-black py-4 px-8">
        <p>slider here...</p>
      </div> */}
    </section>
  );
};

export default Header;

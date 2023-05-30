import React from "react";
import Main from "./Main";

const Header = () => {
  return (
    <section>
      <topbar className="bg-gray-100 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-400">
            {/* <i>facebook </i> */}
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            {/* <i>instagram </i> */}
          </a>
          <a href="#" className="text-black hover:text-gray-400">
            {/* <i>pinterest</i> */}
          </a>
        </div>
        <div className="text-black">
          <p className="text-sm">Follow us on social media:</p>
          <p className="text-sm">example@example.com</p>
        </div>
      </topbar>
      <header className="bg-white text-black py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <a>
            <img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png"></img>
          </a>
          <nav>
            <ul className="flex space-x-4">
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
              <Main /> {/*Implement session-based conditional rendering */}
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-gray-300 text-black py-4 px-8">
        <p>slider here...</p>
      </div>
    </section>
  );
};

export default Header;

import React from "react";
import Main from "./Main";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">E-Commerce Store</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Cart
              </a>
            </li>
            <Main />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

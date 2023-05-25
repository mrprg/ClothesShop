// components/Header.js

import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("http://localhost:3000/");
  };
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-white text-xl font-bold">User Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300"
                onClick={handleRedirect}
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Users
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

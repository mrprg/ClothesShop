// components/Sidebar.js

import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 flex-shrink-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Logo</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span>Home</span>
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 20h9M3 20h9M3 10h9m9 10V4H3v16z"
              />
            </svg>
            <span>Analytics</span>
          </li>
          <li className="flex items-center">
            <svg
              className="w-5 h-5 text-gray-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7v10l10-5-10-5z"
              />
            </svg>
            <span>Calendar</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

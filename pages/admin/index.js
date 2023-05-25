// pages/dashboard.js

import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Notification from "./components/Notification";
import Widgets from "./components/Widget";
import DataTableComponent from "./components/DataTableComponent";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow bg-gray-100">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center mb-2">
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 21H9.172a2 2 0 01-1.729-1.006l-1.442-2.442A2 2 0 015.171 16H2V9c0-2.757 2.243-5 5-5h10c2.757 0 5 2.243 5 5v7h-3.171a2 2 0 01-1.729 1.552l-1.442 2.442A2 2 0 0114.828 21z"
                    />
                  </svg>
                  <span className="text-gray-700">Settings</span>
                </div>
                <p className="text-gray-500">Manage your account settings.</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center mb-2">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-gray-700">Users</span>
                </div>
                <p className="text-gray-500">
                  Manage user profiles and permissions.
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="flex items-center mb-2">
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span className="text-gray-700">Messages</span>
                </div>
                <p className="text-gray-500">View and reply to messages.</p>
              </div>
              <UserProfile />
              <Widgets />
              <DataTableComponent />

              {/* <Notification
                type="success"
                message="Success! Your settings have been saved."
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

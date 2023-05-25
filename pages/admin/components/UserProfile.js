import React from "react";

const UserProfile = () => {
  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;

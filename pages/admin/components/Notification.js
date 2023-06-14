import React from "react";

const Notification = ({ type, message }) => {
  let bgColor = "bg-blue-500";
  let icon = "information-circle";

  if (type === "success") {
    bgColor = "bg-green-500";
    icon = "check-circle";
  } else if (type === "warning") {
    bgColor = "bg-yellow-500";
    icon = "alert-circle";
  } else if (type === "error") {
    bgColor = "bg-red-500";
    icon = "close-circle";
  }

  return (
    <div
      className={`flex items-center justify-between p-4 rounded ${bgColor} text-white`}
    >
      <div className="flex items-center">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d={`path-for-${icon}`} clipRule="evenodd" />
        </svg>
        <span className="font-medium">{message}</span>
      </div>
      <button className="text-white focus:outline-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 12.586l4.95 4.95-1.414 1.414L8.586 12l-5.95 5.95L1.222 17.536 7.172 11.586 1.222 5.636 2.636 4.222 8.586 10.172l5.95-5.95 1.414 1.414L12.414 12l5.95 5.95-1.414 1.414L11.586 13.414l4.95-4.95z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Notification;

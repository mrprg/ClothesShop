import { useState } from "react";
import Head from "next/head";

const YourPage = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(activeButton === buttonId ? null : buttonId);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Head>
        <title>Accordion Menu Example</title>
      </Head>

      <div className="w-96">
        <button
          className={`w-full bg-gray-200 text-left p-4 outline-none focus:outline-none ${
            activeButton === 1 ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          Button 1
        </button>
        {activeButton === 1 && (
          <div className="w-full bg-white p-4">
            <ul>
              <li className="py-2">Item 1</li>
            </ul>
          </div>
        )}

        <button
          className={`w-full bg-gray-200 text-left p-4 outline-none focus:outline-none ${
            activeButton === 2 ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          Button 2
        </button>
        {activeButton === 2 && (
          <div className="w-full bg-white p-4">
            <ul>
              <li className="py-2">Item 2</li>
            </ul>
          </div>
        )}

        <button
          className={`w-full bg-gray-200 text-left p-4 outline-none focus:outline-none ${
            activeButton === 3 ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          Button 3
        </button>
        {activeButton === 3 && (
          <div className="w-full bg-white p-4">
            <ul>
              <li className="py-2">Item 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourPage;

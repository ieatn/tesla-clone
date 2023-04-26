import React from "react";

const Model = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold">Model 3</h1>
        <p className="p-2">
          Order Online for
          <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
            <span className="underline underline-offset-4">
              Touchless Delivery
            </span>
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center text-sm absolute inset-x-0 bottom-[10%] lg:flex-row">
        <a href="https://www.tesla.com/model3/design">
          <button className="bg-[#393c41] h-10 rounded-md w-96 mt-2 text-white lg:w-64 lg:mx-4">
            Custom Order
          </button>
        </a>
        <a href="https://www.tesla.com/model3/design">
          <button className="bg-[#f4f4f4] h-10 rounded-md w-96 mt-2 lg:w-64 lg:mx-4">
            Existing Inventory
          </button>
        </a>
      </div>
      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Model;

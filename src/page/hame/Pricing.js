
import React from "react";

const Pricing = () => {
  return (
    <div>
      <h5
        style={{ color: "#9798AA" }}
        className="  text-[10px] text-center mb-2 font-semibold  tracking-widest"
      >
        SALE AS YOU GROW
      </h5>
      <h3 className="text-2xl text-center pb-4">Pricing</h3>
      <h4 style={{ color: "#62677F" }} className="text-base text-center mb-6">
        Choose plan that suits you business best
      </h4>

      
      {/* all box of pricing */}
      <div className="flex max-w-3xl justify-center  items-center mx-auto gap-2 mb-16">
        {/* single box of procing */}
        <div className="rounded  p-2">
          <h5 className="text-base">Single</h5>
          <h4 className="mb-3">
            <span className="text-3xl">$10</span>
            <span className="text-[12px]"> \month</span>
          </h4>
          <p className="text-xs mb-4">
            Best choice for your restaurant! Install and start deliveries today!
          </p>
          {/* in pricing box of service */}
          <div className="flex flex-col gap-1">
            {/* service provided */}
            <div className="flex gap-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Up to 20 drivers tracked</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Manage schedules, prices and offer</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Unlimited deliveries</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Basic Al</h2>
            </div>

            <button
              style={{ backgroundColor: "#0070FF" }}
              className=" text-white rounded-lg w-48 px-3 py-2 mt-6"
            >
              {" "}
              Choose basic plan
            
            <span className="fa-solid fa-angle-right fa-beat ml-1"></span>

            </button>
          </div>
        </div>
        <div className=" rounded-xl shadow-2xl shadow-gray-400 drop-shadow-md px-3 py-8">
          <div className="flex justify-between">
          <h5 className="text-base">Small chain </h5>
          <h4 className="text-[#A68E40] text-xs bg-[#E9E1C6] px-3 py-1 rounded-2xl">👑 Best offer</h4>
          </div>
          <h4 className="mb-3">
            <span className="text-3xl">$50</span>
            <span className="text-[12px]"> \month</span>
          </h4>
          <p className="text-xs mb-4 ">
            Grow or expand you business like never befor with our advance tools
          </p>
          {/* in pricing box of service */}
          <div className="flex flex-col gap-1">
            {/* service provided */}
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Unlimited order</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Manage scheduling , price , offers</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Unlimited delivery tracking</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Advance Al tools and smartBot™ </h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Advance Analytics and Reporting</h2>
            </div>
            <button
              style={{ backgroundColor: "#0070FF" }}
              className=" rounded-lg w-52 text-white px-3 py-2 mt-6"
            >
              {" "}
              Choose popular plan
              <span className="fa-solid fa-angle-right fa-beat ml-1"></span>
            </button>
          </div>
        </div>
        <div className="rounded  p-2">
          <h5 className="text-base">Enterprise</h5>
          <h4 className="mb-3">
            <span className="text-3xl">$75+</span>
            <span className="text-[12px]"> \month</span>
          </h4>
          <p className="text-xs mb-4">
            Talk to us, so we can create an exact pricing model to fit your
            business
          </p>
          {/* in pricing box of service */}
          <div className="flex flex-col gap-1">
            {/* service provided */}
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">All from the other plans, and</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Self-deployment of the platform</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Advance security</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">You own Al model traning</h2>
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#D9EBD1"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#80C45F"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xs">Locally hosted analytics</h2>
            </div>
            <button
              style={{ backgroundColor: "#2E384E" }}
              className="rounded-lg w-52 px-3 py-2 mt-6 text-white"
            >
              {" "}
              <span className="mr-1 fa-solid fa-envelope fa-shake"> </span>
              Request an offer
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Pricing;

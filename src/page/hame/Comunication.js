import React from "react";

import delevarmanImage from "../../image/section 4/decoration.png";
import locationImage from "../../image/section 4/decoration-1.png";
import phoneImage from "../../image/section 4/Group 113.png";
import airpodImage from "../../image/section 4/Group 123.png";
import callcustomerImage from "../../image/section 4/Group 111.png";
import calldriverImage from "../../image/section 4/Group 110.png";
import earphoneimage1 from "../../image/section 4/decoration - airpod-1.png";
import earphoneimage2 from "../../image/section 4/decoration - airpod.png";

const Comunication = () => {
  return (
    <div className="my-20">
      <div className="flex max-w-3xl mx-auto gap-20">
        <div className="relative basis-1/2">
          <img src={delevarmanImage} className="w-80 mb-3 " alt="" />
          <div>
            <img
              src={locationImage}
              className="w-64 absolute left-20 "
              alt=""
            />
            <img src={phoneImage} className="absolute w-32" alt="" />
            <img
              src={airpodImage}
              className="absolute w-28 -right-12 top-28"
              alt=""
            />
            <img
              src={callcustomerImage}
              className="absolute w-16 right-12 bottom-20"
              alt=""
            />
            <img
              src={calldriverImage}
              className="absolute w-16 top-3 left-36"
              alt=""
            />
            <img
              src={earphoneimage1}
              className="absolute w-20 top-3 -right-12"
              alt=""
            />
            <img
              src={earphoneimage2}
              className="absolute w-20 top-3 right-4"
              alt=""
            />
            <div className="h-64 w-64  bg-slate-200 absolute rounded-2xl -top-8 -left-28  -z-50 "></div>
            <div className="h-32 w-32  bg-slate-200 absolute rounded-2xl top-44 -right-2  -z-50 "></div>
          </div>
        </div>
        <div className="basis-1/2">
          <h4 className="text-xs tracking-widest font-semibold text-[#0070FF] px-3 py-2 w-36 rounded-lg bg-[#E5F1FF] ">
            COMMUNICATION
          </h4>
          <h2 className="text-4xl my-2 ">
            Great communicatin means more time and profit.
          </h2>
          <p className="text-[#62677F] text-base mb-4 w-80">
            Communication is key! That's why we make it easy and hassle-free, so
            you don't waste time on unnecessary interactions.
          </p>
          <p className="text-[#62677F] text-base ">
            {" "}
            Keep track of your employees, drivers and vehicles, manage social
            media and stay in touch with your customers.
          </p>
        </div>
      </div>

      {/* horijontal line */}
      <div className="flex mx-auto justify-center items-center my-24 font-semibold">
        <div className="">
          <h5 className="text-xs px-6 text-center  ">
            Communicate with your employees
          </h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ flex: 1, backgroundColor: "#0070FF", height: "1px" }}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#80C45F"
              class="w-6 h-6 center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div
              style={{ flex: 1, backgroundColor: "#0070FF", height: "1px" }}
            />
          </div>
        </div>
        <div>
          {" "}
          <h5 className="text-xs px-6 text-center ">
            Track both drivers and orders
          </h5>{" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ flex: 1, backgroundColor: "#0070FF", height: "1px" }}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#80C45F"
              class="w-6 h-6 center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div
              style={{ flex: 1, backgroundColor: "#0070FF", height: "1px" }}
            />
          </div>
        </div>
        <div>
          {" "}
          <h5 className="text-xs px-6  text-center ">
            Keep in touch with the customers
          </h5>{" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ flex: 1, backgroundColor: "#0070FF", height: "1px" }}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#80C45F"
              class="w-6 h-6 center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div
              style={{ flex: 1, backgroundColor: "#0070FF", height: "1px" }}
            />
          </div>
        </div>
        <div>
          <h5 className="text-xs px-6  text-center ">
            Manage delivery with your supplier
          </h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ flex: 1, backgroundColor: "#0070FF", height: "1px" }}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#80C45F"
              class="w-6 h-6 center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <div
              style={{ flex: 1, backgroundColor: "#0070FF", height: "1px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comunication;

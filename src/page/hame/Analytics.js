import React from "react";
import pizzaTomatoImage from "../../image/section 5/Group 122.png";
import masinIcon from "../../image/section 5/Union-2.png";
import NetworkIcon from "../../image/section 5/Union.png";
import salesMonthImage from "../../image/section 5/Group 115.png";
import penImage from "../../image/section 5/Group 119.png";
import flowerImage from "../../image/section 5/succulent plant.png";
import arrowImage from "../../image/Section 1/Vector 21.png";

const Analytics = () => {
  return (
    <div className=" mx-auto max-w-5xl flex justify-center  items-center my-32">
      <div>
        <h2
          style={{ color: "#0070FF", backgroundColor: "#E5F1FF" }}
          className="text-xs px-3 py-2  w-28 rounded-lg tracking-widest -mb-10"
        >
          ANALYTICS{" "}
        </h2>
        <div className="flex justify-between items-center gap-36">
          <div className="basis-3/6">
            <h2 style={{ color: "#181E28" }} className="text-2xl mb-2">
              We analyse your data, to give <br /> you a roadmap to success.
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-6">
                <img
                  src={masinIcon}
                  className="p-4 w-12 bg-slate-50 shadow-lg shadow-slate-300 border rounded-lg "
                  alt=""
                />
                <div className="flex flex-col ">
                  <h5 className="text-xm font-semibold text-slate-500">
                    Sales analytic
                  </h5>
                  <p className="text-xs text-slate-400">
                    {" "}
                    We monitor your sales in real-time and
                    <br /> determine patterns for growth
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <img
                  src={NetworkIcon}
                  className="p-4 w-12 bg-slate-50 shadow-lg shadow-slate-300 border rounded-lg "
                  alt=""
                />
                <div className="flex flex-col ">
                  <h5 className="text-xm font-semibold text-slate-500">
                    Marketing analytics
                  </h5>
                  <p className="text-xs text-slate-400">
                    {" "}
                    Track your campaigns with multiple metrics <br /> and
                    correlation to in-house data.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <img
                  src={masinIcon}
                  className="p-4 w-12 bg-slate-50 shadow-lg shadow-slate-300 border rounded-lg "
                  alt=""
                />
                <div className="flex flex-col ">
                  <h5 className="text-xm font-semibold text-slate-500">
                    Employees analytics
                  </h5>
                  <p className="text-xs text-slate-400">
                    {" "}
                    Help your employees perform their best, <br /> take the time
                    off when nee ded and more.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative basis-3/6">
            <img src={salesMonthImage} className="w-80" alt="" />
            <img src={pizzaTomatoImage} className="w-64" alt="" />
            <div>
              <img
                src={penImage}
                className="w-48 absolute top-20 -left-32"
                alt=""
              />
              <img
                src={arrowImage}
                style={{ rotate: "-70deg" }}
                className="w-16 absolute top-10 -left-12 "
                alt=""
              />
              <img
                src={flowerImage}
                className="w-24 absolute -top-12 -right-12"
                alt=""
              />
              <div className="h-24 w-20  bg-slate-200 absolute rounded-2xl bottom-10 -left-10  -z-50 "></div>
              <div className="h-64 w-64  bg-slate-200 absolute rounded-tl-2xl rounded-bl-lg -top-16 -right-32  -z-50 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

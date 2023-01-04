import React from "react";
import dashboardImage from "../../image/Section 1/Dashbord- mask.png";
import earphoneImage from "../../image/Section 1/decoration - airpod.png";
import callingImage from "../../image/Section 1/decoration- calling.png";
import growthImage from "../../image/Section 1/decoration- growth.png";
import progressImage from "../../image/Section 1/decoration-3.png";
import activeOnline from "../../image/Section 1/decoration.png";
import activeOfline from "../../image/Section 1/decoration-1.png";
import grapIconImage from "../../image/Section 1/decoration-2.png";
import arrowImage from "../../image/Section 1/Vector 21.png";

const HeroSection = () => {
  return (
    <section>
      <div className="flex justify-center align-center mt-16 ">
        <div className="text-center">
          <h2
            style={{ lineHeight: "20px", color: "#2E384E" }}
            className="text-5xl leading-normal "
          >
            Restaurant management
          </h2>
          <br />
          <h2
            style={{ lineHeight: "20px", color: "#2E384E" }}
            className="text-5xl "
          >
            made as easy as pie
          </h2>
          <br />
          <p style={{ color: "#62677F", fontSize: "18px", marginTop: "8px" }}>
            See how platform can revolutionise your business
          </p>
          <div className="mt-4 flex gap-4 items-center justify-center">
            <button className="border rounded-lg px-6 py-1 border-cyan-200 text-base">
              Watch video
            </button>
            <button
              style={{ backgroundColor: "#0070FF" }}
              className="border rounded-lg px-6 py-1 text-white"
            >
              Try the Demo!
            </button>
          </div>
        </div>
      </div>
      <section className="h-56 mt-6 bg-gradient-to-t from-indigo-300 to-state-100">
        <div className="relative">
          <img src={dashboardImage} alt="" />
          <img
            src={growthImage}
            className="absolute w-40 top-28 right-24 "
            alt=""
          />
          <img
            src={progressImage}
            className="w-48 absolute top-32 left-24"
            alt=""
          />
          <img
            src={earphoneImage}
            style={{ top: "-20px" }}
            className="w-16 absolute left-64"
            alt=""
          />
          <img
            src={grapIconImage}
            className="w-20 absolute top-8 left-16"
            alt=""
          />
          <img
            src={activeOnline}
            className="w-24 absolute top-8 right-16 "
            alt=""
          />
          <img
            style={{ top: "-28px" }}
            src={arrowImage}
            className="w-20 absolute right-60"
            alt=""
          />
          <img
            style={{ top: "-38px" }}
            src={activeOfline}
            className="w-20 absolute left-36"
            alt=""
          />
          <img
            style={{ top: "-48px" }}
            src={callingImage}
            className="w-20 absolute right-32"
            alt=""
          />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;

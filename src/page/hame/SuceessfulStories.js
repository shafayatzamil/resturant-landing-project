import React from "react";
import successfulManImage from "../../image/section 9/austin-distel-h1RW-NFtUyc-unsplash 1.png";
import CoffeImage from "../../image/section 9/Coffee.png";
import aboburgerImage from "../../image/section 9/Group 165.png";
import treeImage from "../../image/section 9/Group 167.png";
import arrowImage from "../../image/Section 1/Vector 21.png";

const SuceessfulStories = () => {
  return (
    <div>
      <h5 className="text-xs text-center tracking-wider font-semibold mb-1 text-[#9798AA]">
        WE LOVE TO SEE YOU GROW
      </h5>
      <h3 className="text-[#181E28] text-center text-4xl mb-4">
        Success stories
      </h3>
      <h4 className="text-[#62677F] text-center w-96 mx-auto leading-none mb-4">
        Platform helps businesses thrive - see how we help our clients mange
        their restaurant nd grow their revenue!
      </h4>

      {/* stories */}
      <div className="mt-6 relative ">
        <img src={successfulManImage} className="w-96 " alt="" />
        <div>
          <img
            src={aboburgerImage}
            className="w-36 absolute top-12 z-50 left-72 "
            alt=""
          />
          <div className=" absolute rounded-lg shadow-2xl p-6 top-24 left-80 bg-white z-40">
            <h5 className="text-[#62677F] text-xs w-72 mb-2">
              See how our friends at Avoburger used our Al tools to optimize
              their routes, reach new customers, and explode their reach in just
              a year
            </h5>
            <h5 className="text-[#62677F] text-xs w-72">
              An interview with Avoburger CEO Mark Smith
            </h5>
            <div className="mt-4 flex gap-4 items-center justify-center">
              <button className="border rounded-lg px-5 py-1 text-sm border-cyan-200">
                <i className="fa-solid fa-play fa-bounce m-1"></i>
                Watch interview
              </button>
              <button className=" px-2 py-1 text-sm">
                See all success stories
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* platform boost the buissness */}
      <div className="py-12 w-6xl bg-gradient-to-t from-indigo-300 to-state-100 pb-12 relative ">
        <h3 className="text-center text-2xl mb-2">
          {" "}
          Let platform boost your business!
        </h3>
        <h5 className="text-center text-sm w-80 mt-4 mx-auto text-[#62677F] ">
          Join 250+ restaurants and cafe that are already using platform and
          growing their reach, revenues and sales.
        </h5>
        <div className="mt-4 flex gap-4 items-center justify-center">
          <button className="border rounded-lg px-6 py-1 bg-white border-cyan-200 text-base">
            <i className="fa-solid fa-play fa-bounce m-1"></i>
            Watch video
          </button>
          <button
            style={{ backgroundColor: "#0070FF" }}
            className="border rounded-lg px-6 py-1 text-white"
          >
            Try the Demo!
          </button>
          <img
            src={CoffeImage}
            className="absolute -bottom-16 left-4 w-36"
            alt=""
          />
          <img
            src={treeImage}
            className="w-36 absolute -top-20 -right-0"
            alt=""
          />
          <img
            src={arrowImage}
            className="w-16 origin-center absolute bottom-16 right-60 rotate-90"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SuceessfulStories;

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
    // <section>
    //   <div className="flex justify-center align-center mt-16 ">
    //     <div className="text-center">
    //       <h2
    //         style={{ lineHeight: "20px", color: "#2E384E" }}
    //         className="text-5xl leading-normal "
    //       >
    //         Restaurant management
    //       </h2>
    //       <br />
    //       <h2
    //         style={{ lineHeight: "20px", color: "#2E384E" }}
    //         className="text-5xl "
    //       >
    //         made as easy as pie
    //       </h2>
    //       <br />
    //       <p style={{ color: "#62677F", fontSize: "18px", marginTop: "8px" }}>
    //         See how platform can revolutionise your business
    //       </p>
    //       <div className="mt-4 flex gap-4 items-center justify-center">
    //         <button className="border rounded-lg px-6 py-1 border-cyan-200 text-base">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="black"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             className="w-4 h-4 inline mx-1"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
    //             />
    //           </svg>
    //           Watch video
    //         </button>
    //         <button
    //           style={{ backgroundColor: "#0070FF" }}
    //           className="border rounded-lg px-6 py-1 text-white"
    //         >
    //           Try the Demo!
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <section className="h-56 w-full mt-6 bg-gradient-to-t from-indigo-300 to-state-100">
    //     <div className="relative">
    //       <img src={dashboardImage} alt="" />
    //       <div>
    //         <img
    //           src={growthImage}
    //           className="absolute w-40 top-28 right-24 "
    //           alt=""
    //         />
    //       </div>
    //       <img
    //         src={progressImage}
    //         className="w-48 absolute top-32 left-24"
    //         alt=""
    //       />
    //       <img
    //         src={earphoneImage}
    //         style={{ top: "-20px" }}
    //         className="w-16 absolute left-64"
    //         alt=""
    //       />
    //       <img
    //         src={grapIconImage}
    //         className="w-20 absolute top-8 left-16"
    //         alt=""
    //       />
    //       <img
    //         src={activeOnline}
    //         className="w-24 absolute top-8 right-16 "
    //         alt=""
    //       />
    //       <img
    //         style={{ top: "-28px" }}
    //         src={arrowImage}
    //         className="w-20 absolute right-60"
    //         alt=""
    //       />
    //       <img
    //         style={{ top: "-38px" }}
    //         src={activeOfline}
    //         className="w-20 absolute left-36"
    //         alt=""
    //       />
    //       <img
    //         style={{ top: "-48px" }}
    //         src={callingImage}
    //         className="w-20 absolute right-32"
    //         alt=""
    //       />
    //     </div>
    //   </section>
    // </section>


    // new Section
    <section >
      {/* header section with text */}
      <div className="flex justify-center items-center mt-4">
        <div className="text-center">
          <h2
            style={{ lineHeight: "20px", color: "#2E384E" }}
            className="text-5xl leading-normal mt-8 "
          >
            Restaurant management
          </h2>
          <br />
          <h2
            style={{ lineHeight: "50px", color: "#2E384E" }}
            className="text-5xl "
          >
            made as easy as pie
          </h2>
          <br />
          <p style={{ color: "#62677F", fontSize: "18px", marginTop: "2px" }}>
            See how platform can revolutionise your business
          </p>
          
          {/* Watch video btn */}
          <div className="mt-8 flex gap-4  justify-center items-center">
            <button className="border rounded-lg px-8 py-3 border-cyan-200 text-base font-medium">
              <span className="mr-2"><i className="fa-solid fa-play fa-bounce"></i></span>
              Watch video
            </button>
            <button
              style={{ backgroundColor: "#0070FF" }}
              className="border rounded-lg px-8 py-3 font-medium text-white"
            >
              Try the demo!
            </button>
          </div>






        </div>
      </div>


      <section className=" h-64 w-full mt-8 bg-gradient-to-t from-indigo-300 to-state-100 relative">

        {/* backgroundimage */}
          <img src={dashboardImage} className="h-64 w-full" alt="" />
          {/* essential images like earphone,user,groth */}
         <div>
         <img
            src={progressImage}
            className="w-48 absolute top-32 left-40"
            alt=""
          />
          <img
            src={earphoneImage}
            style={{ top: "-20px" }}
            className="w-16 absolute left-80"
            alt=""
          />
          <img
            src={grapIconImage}
            className="w-20 absolute top-8 left-16"
            alt=""
          />
          <img
            src={activeOnline}
            className="w-24 absolute top-12 right-20 "
            alt=""
          />
          <img
            style={{ top: "-40px" }}
            src={arrowImage}
            className="w-20 absolute right-80"
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
          <img
              src={growthImage}
              className="absolute w-40 top-32 right-48 "
              alt=""
            />
         </div>
      </section>
    </section>
  );
};

export default HeroSection;

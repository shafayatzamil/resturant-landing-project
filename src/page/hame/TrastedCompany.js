import React from "react";
import compani1 from "../../image/section 2/Group 43.png";
import compani2 from "../../image/section 2/Group 44.png";
import compani3 from "../../image/section 2/Group 45.png";
import compani4 from "../../image/section 2/Group 46.png";
import compani5 from "../../image/section 2/SHAKEY.png";
import easytoLearnIcon from "../../image/section 2/Group 47.png";
import speedIcon from "../../image/section 2/Group 77.png";

const TrastedCompany = () => {
  return (
    <div className="flex flex-col justify-center align-center my-16">
      <div>
        {" "}
        <h2
          style={{ color: "#9798AA", fontSize: "10px" }}
          className="tracking-widest text-center mb-6"
        >
          SOFTWARE BUILT FOR AND TRUSTED BY 250+ COMAPNY
        </h2>
        <div className="flex justify-center align=center gap-10">
          <img src={compani5} className="w-16 h-3" alt="" />
          <img src={compani4} className="w-16 h-4" alt="" />
          <img src={compani2} className="w-16  h-5" alt="" />
          <img src={compani3} className="w-16 h-5" alt="" />
          <img src={compani1} className="w-16 h-5" alt="" />
        </div>
      </div>

      <div className="mt-20">
        <h4
          style={{ color: "#9798AA", fontSize: "10px" }}
          className="text-center tracking-widest"
        >
          THIS IS PLATFORM
        </h4>

        <h2 className="text-3xl text-center">Restaurant reimagined.</h2>
        <p style={{ color: "#62677F" }} className="text-center my-4 text-sm">
          We are a one-stop solution to track, optimize and deliver food
          <br /> with an easy to use mobile app for ordering and our award
          <br />
          winning desktop app for management.
        </p>

        <div className="flex justify-center align-center gap-12 mt-2">
          <div className="flex justify-center align-center gap-2 ">
            <div>
              {" "}
              <img
                src={speedIcon}
                className="w-10 h-10 p-2 bg-indigo-100 rounded-lg"
                alt=""
              />
            </div>
            <div>
              {" "}
              <h4 className=" text-xs">Fast deploy</h4>
            </div>
          </div>
          <div className="flex justify-center align-center gap-2">
            <img
              src={easytoLearnIcon}
              className="w-10 p-2 bg-indigo-100 rounded-lg"
              alt=""
            />
            <h4 className="text-center text-xs">Easy to learn</h4>
          </div>
          <div className="flex justify-center align-center gap-2">
            <img
              src={speedIcon}
              className="w-10 p-2 gap-2  bg-indigo-100 rounded-lg"
              alt=""
            />
            <h4 className="text-center text-xs">Feature rich</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrastedCompany;

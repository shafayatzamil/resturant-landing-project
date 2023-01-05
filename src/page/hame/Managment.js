import React from "react";
import totalSaleImage from "../../image/section 3/Group 173.png";
import coffeImage from "../../image/section 3/Coffee.png";
import pizzaImage1 from "../../image/section 3/Group 107.png";
import pizzaImage2 from "../../image/section 3/Group 108.png";
import arrowImage from "../../image/Section 1/Vector 21.png";
import treeImage from "../../image/Section 1/Group 167.png";
import BurgerImage from "../../image/section 3/Union.png";
import networkImage from "../../image/section 3/Union-1.png";

const Managment = () => {
  return (
    <div className=" mx-auto max-w-3xl flex justify-center  items-center mt-36">
      <div>
        <h2
          style={{ color: "#0070FF", backgroundColor: "#E5F1FF" }}
          className="text-xs px-3 py-2  w-32 rounded-lg tracking-widest -mb-4"
        >
          MANAGEMENT
        </h2>
        <div className="flex justify-between items-center gap-16">
          <div>
            <h2 style={{ color: "#181E28" }} className="text-3xl mb-2">
              Focus on your business
              <br /> We’ll do the rest!
            </h2>

            <div style={{ color: "#62677F" }} className="text-sm">
              <p>
                <span className="font-bold">Platform </span>
                takes care of your orders and employees, lets you manage sales,
                marketing campaigns - easily and all in one place.
              </p>
              <br />
              <p>
                With our Al based optimization tool, the system will suggest
                small, easy to implement changes to make your business run bettr
                and smoother.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src={totalSaleImage} alt="" />

            <div>
              <img
                src={coffeImage}
                className="w-28 rotate-180 absolute top-16 -left-20"
                alt=""
              />
              <img
                src={pizzaImage1}
                className="w-20 absolute bottom-1 left-20"
                alt=""
              />

              <img
                src={pizzaImage2}
                className="w-20 absolute bottom-3 right-12"
                alt=""
              />
              <img
                src={arrowImage}
                className="absolute w-16  rotate-180 top-10 -left-10"
                alt=""
              />
              <img
                src={treeImage}
                className="absolute w-52 -top-20 rotate-90 -right-28"
                alt=""
              />
              <div className="h-36 w-36  bg-slate-200 absolute rounded-2xl top-36 -left-6  -z-50 "></div>
              <div className="h-52 w-52  bg-slate-200 absolute rounded-2xl -top-16 -right-32  -z-50 "></div>
            </div>
          </div>
        </div>

        {/* icon section */}

        <div className="flex justify-between my-16">
          <div className="flex gap-2">
            <img
              src={networkImage}
              className="w-10 p-2 bg-indigo-200 rounded-lg"
              alt=""
            />
            <h4 className="text-xs font-semibold">
              All sale statistics in one place
            </h4>
          </div>
          <div className="flex gap-2">
            <img
              src={BurgerImage}
              className="w-10 p-2  bg-indigo-200 rounded-lg "
              alt=""
            />
            <h4 className="text-xs font-semibold ">Manage multiple location</h4>
          </div>
          <div className="flex gap-2">
            <img
              src={networkImage}
              className="w-10 p-2  bg-indigo-200 rounded-lg"
              alt=""
            />
            <h4 className="text-xs font-semibold">
              Keep track of marketing campaign
            </h4>
          </div>
          <div className="flex gap-2">
            <img
              src={BurgerImage}
              className="w-10 p-2  bg-indigo-200 rounded-lg"
              alt=""
            />
            <h4 className="text-xs font-semibold ">
              Fully customizeable suit your business best
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managment;

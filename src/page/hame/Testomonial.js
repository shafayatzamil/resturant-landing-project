import React from "react";
import person1 from "../../image/section 7/person 1.png";
import person2 from "../../image/section 7/person 4.png";
import person3 from "../../image/section 7/person 5.png";
import person4 from "../../image/section 7/person 6.png";
import person5 from "../../image/section 7/person 7.png";

const Testomonial = () => {
  return (
    <div className="mt-20 mb-20 bg-gradient-to-t from-indigo-300 to-state-100 h-72 relative ">
      <h5 className="text-center mt-12 text-[10px] tracking-widest text-[#9798AA]">
        TESTIMONIALS
      </h5>
      <h3 className="text-center text-2xl text-[#181E28] mb-4">
        What people say
      </h3>
      <h5 className="text-[#62677F] text-center text-xs w-44  mx-auto">
        Our customer are our top priority Let's hear what they have to say.
      </h5>
      {/* box of people say */}
      <div>
        {/* single box */}
        <div className=" absolute left-12 top-44 border rounded-lg bg-white w-44 p-4">
          <h2 className="text-[#96A0B0] text-xl font-extrabold ">vegancake</h2>
          <img src={person1} className="w-12 mb-2" alt="" />
          <h5 className="text-[#62677F]  text-sm mb-2">
            “Best.Product.Ever! Very easy to use. I strongly recommend platform
            to everyone involved in running a restaurant business!
          </h5>

          <h5 className="text-[#A6A9B7] text-[10px] mb-2">
            --- Saif, Head of Marketing
          </h5>
        </div>
        {/* second box */}
        <div className=" absolute left-64 top-28 border rounded-lg bg-white w-44 p-4">
          <h2 className="text-[#96A0B0] text-xl font-extrabold ">vegancake</h2>
          <img src={person2} className="w-12 mb-2" alt="" />
          <h5 className="text-[#62677F]  text-sm mb-2">
            “Best.Product.Ever! Very easy to use. I strongly recommend platform
            to everyone involved in running a restaurant business!
          </h5>

          <h5 className="text-[#A6A9B7] text-[10px] mb-2">
            --- Saif, Head of Marketing
          </h5>
        </div>
        {/* third box */}
        <div className=" absolute right-72 top-44 border rounded-lg bg-white w-44 p-4">
          <h2 className="text-[#96A0B0] text-xl font-extrabold ">vegancake</h2>
          <img src={person3} className="w-12 mb-2" alt="" />
          <h5 className="text-[#62677F]  text-sm mb-2">
            “Best.Product.Ever! Very easy to use. I strongly recommend platform
            to everyone involved in running a restaurant business!
          </h5>

          <h5 className="text-[#A6A9B7] text-[10px] mb-2">
            --- Saif, Head of Marketing
          </h5>
        </div>
        {/* forth box */}
        <div className=" absolute right-20 top-28 border rounded-lg bg-white w-44 p-4">
          <h2 className="text-[#96A0B0] text-xl font-extrabold ">vegancake</h2>
          <img src={person4} className="w-12 mb-2" alt="" />
          <h5 className="text-[#62677F]  text-sm mb-2">
            “Best.Product.Ever! Very easy to use. I strongly recommend platform
            to everyone involved in running a restaurant business!
          </h5>

          <h5 className="text-[#A6A9B7] text-[10px] mb-2">
            --- Saif, Head of Marketing
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;

import React from "react";
import companyImage1 from "../../image/section 8/Group 160.png";
import companyImage2 from "../../image/section 8/Union-1.png";
import companyImage3 from "../../image/section 8/Union-2.png";
import companyImage4 from "../../image/section 8/Union.png";
import handIcon from "../../image/section 8/Easy.png";

const Patner = () => {
  return (
    <div className="mb-28 mt-56">
      <h2 className="text-3xl text-center text-[#181E28] mb-4">
        Partners and Integrations
      </h2>
      <h5 className="text-center text-[#62677F] text-sm mt-2">
        Enhance your workflow with these integrations.
      </h5>
      {/* btn */}
      <div className="border rounded-full px-2 py-1 w-44 mt-4 mb-8 mx-auto ">
        <div>
          <button className="rounded-full py-1 px-6 w-24  text-xs font-semibold text-[#0070FF] bg-[#BDDAFF] mr-2 ">
            Sales
          </button>
          <button className=" text-xs font-semibold ml-2"> Hiring</button>
        </div>
      </div>

      {/* company image */}
      <div className="flex gap-10 justify-center items-center ">
        <img src={companyImage2} className="w-32" alt="" />
        <img src={companyImage1} className="w-32" alt="" />
        <img src={companyImage4} className="w-32" alt="" />
        <img src={companyImage3} className="w-20" alt="" />
      </div>

      <div className="flex justify-center items-center text-sm my-10 gap-4">
        <button className="border-[#85C4D7]  border rounded-md py-2 px-8">
          See full list
        </button>
        <button className="bg-[#0070FF] text-white px-4 py-2 rounded-md">
          <img src={handIcon} className="inline w-4 mr-2" alt="" />
          Become a Partner
        </button>
      </div>
    </div>
  );
};

export default Patner;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <nav className="flex  items-center justify-around py-4 text-gray-700 text-sm">
      <div className="font-bold">Platfrom</div>
      <div>
        <ul className="flex gap-6 ml-20 ">
          <li>About us</li>
          <li>Features</li>

          <li>Testomonials</li>

          <li>integrations</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="">
        <button className="mr-5"> 
     <span className="mr-2"> <i className="fa-solid fa-user fa-shake"></i></span>
        Sign Up</button>
        <Link to="dashboard">
          {" "}
          <button className="border rounded-lg border-cyan-200 px-7 py-3">
            {" "}
            Get started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

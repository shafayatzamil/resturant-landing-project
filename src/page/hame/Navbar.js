import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-around py-4 text-gray-700 text-sm">
      <div className="font-bold">Platfrom</div>
      <div>
        <ul className="flex gap-5">
          <li>About us</li>
          <li>Features</li>

          <li>Testomonials</li>

          <li>integrations</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="">
        <button className="mr-5">Sign Up</button>
        <Link to="dashboard">
          {" "}
          <button className="border rounded-lg border-cyan-200 px-5 py-2">
            {" "}
            Get started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle "
        />
        <div className="drawer-content bg-gray-200">
        {/* nav bar of search */}
          <div className="navbar bg-gray-200">
            <div className="navbar-start">
              <div className="form-control border-b-2 border-gray-300 w-96">
                  <input type="text" placeholder="🔎 Search" className="input rounded-none input-sm" />
                </div>
            </div>
            <div className="navbar-end">
              <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
          </div>


          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-2 overflow-y-auto w-44 bg-white text-sm  font-semibold relative">
            <li>
              {" "}
              <Link to="/">
                <div className="flex">
                  <img src="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png" className="w-6 -mr-2" alt="" />
                  <h2 className="w-32 text-sm">avoburger</h2>
                </div>
              </Link>
            </li>
            <li>
              <Link to="Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="dashboard/Orders">Orders</Link>
            </li>
            <li>
              <Link to="dasgboard/Restaurants">Restaurants</Link>
            </li>
            <li>
              <Link to="dashboard/Drivers">Drivers</Link>
            </li>

            <div className="absolute mb-2 bottom-12 ">
              <button className="btn bg-[#21D997] btn-sm h-10 w-36 text-white lowercase">
                Log out{" "}
              </button>
            </div>
            <div className="absolute mt-4  bottom-2 flex justify-center items-center ">
              <hr />
            <div className="w-8 mr-2">
             <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" className="rounded-full" alt="" />
            </div>
            <h5 className="text-[12px] mr-2" >Shafayat zamil</h5>
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
</svg>

            </div>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
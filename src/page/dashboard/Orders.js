import { useQuery } from "@tanstack/react-query";
import React from "react";

const Orders = () => {
  const { data: orders = [] } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      // https://resturant-mangement-server.vercel.app/
      const res = await fetch(`http://localhost:5000/order`);
      const data = await res.json();
      return data.data;
    },
  });

  return (
    <div className="px-2">
      {/* navbar of orders */}
      <div className="navbar bg-base-100 rounded-md">
        <div className="flex-1">
          <div className="p-2 bg-[#D8F3E9] rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">64</h3>
            <h5 className="text-xs">Ongoing</h5>
          </div>
        </div>

        <div className="flex-1">
          <div className="p-2 bg-[#EFF1A7] rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">137</h3>
            <h5 className="text-xs">Delivered</h5>
          </div>
        </div>

        <div className="flex-1">
          <div className="p-2 bg-[#E6E6E6] rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">201</h3>
            <h5 className="text-xs">Total orders</h5>
          </div>
        </div>

        <div className="flex-1">
          <div className="p-2 bg-[#D8F3E0] rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#22DD56"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M1.72 5.47a.75.75 0 011.06 0L9 11.69l3.756-3.756a.75.75 0 01.985-.066 12.698 12.698 0 014.575 6.832l.308 1.149 2.277-3.943a.75.75 0 111.299.75l-3.182 5.51a.75.75 0 01-1.025.275l-5.511-3.181a.75.75 0 01.75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 00-3.528-5.617l-3.809 3.81a.75.75 0 01-1.06 0L1.72 6.53a.75.75 0 010-1.061z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">$1280</h3>
            <h5 className="text-xs">Sales Today</h5>
          </div>
        </div>

        <div className="flex-1">
          <div className="p-2 bg-[#F3DBD8] rounded-md mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#DD4422"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold">$45,283</h3>
            <h5 className="text-xs">Sales This Month</h5>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="overflow-x-auto bg-base-100 rounded-lg">
          <h2 className="p-2 text-xl font-semibold">Orders</h2>
          <hr />
          <table className="table table-compact w-full">
            {/* table header */}
            <tr className="text-[#ADADAD]">
              <th>Restaurant</th>
              <th>Order</th>
              <th>Order ID</th>
              <th>Delivery address</th>
              <th>Value</th>
              <th>ETA</th>
              <th>Driver</th>
              <th>Status</th>
            </tr>

            {orders.map((order) => (
              <tr>
                <td className="text-[#ADADAD]">Sultan dine</td>
                <td>{order.productName.slice(0, 10)}</td>
                <td>{order.orderId}</td>
                <td>2 College Gate st.</td>
                <td>${order.price}</td>
                <td>{order.time}</td>
                <td>Kim</td>
                <td>Delivered</td>
              </tr>
            ))}

            {/* <tr>
              <td className="text-[#ADADAD]">Sultan dine</td>
              <td>2xkhacci,..</td>
              <td>ML6528</td>
              <td>Polash</td>
              <td>2 College Gate st.</td>
              <td>$25</td>
              <td>2:03s</td>
              <td>Kim</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td className="text-[#ADADAD]">Star kabab</td>
              <td>3xtanduri</td>
              <td>JK3584</td>
              <td>Eva</td>
              <td>15, 23rd ave </td>
              <td>$40</td>
              <td>5:13s</td>
              <td>Nick</td>
              <td>In-delivery</td>
            </tr>
            <tr>
              <td className="text-[#ADADAD]">Chilox food</td>
              <td>2xburger</td>
              <td>BE5487</td>
              <td>Badon</td>
              <td>31 Winston st.</td>
              <td>$30</td>
              <td>- </td>
              <td>Adam</td>
              <td>Pending </td>
            </tr>
            <tr>
              <td className="text-[#ADADAD]">Burger King</td>
              <td>4xburger</td>
              <td>EZ1276</td>
              <td>Adam</td>
              <td>17/562 Basurhat Dock st.</td>
              <td>$125</td>
              <td>13:23s</td>
              <td>Jon</td>
              <td>Ordered</td>
            </tr>
            <tr>
              <td className="text-[#ADADAD]">Yancy Tear</td>
              <td>2xLargePizza</td>
              <td>EZ1276</td>
              <td>Eva</td>
              <td>15, 23rd ave </td>
              <td>$40</td>
              <td>5:13s</td>
              <td>Nick</td>
              <td>In-delivery</td>
            </tr> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

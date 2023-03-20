import React from "react";
import { useState } from "react";
import AddOrder from "./AddOrder";

const SingleProducts = ({ product }) => {
  const { _id, name, image, ingredient, price, vegans, weight, calories } =
    product;

  const [openOrder, setOpenOrder] = useState(false);

  const handleOrderSubmit = (product) => {
    // const order = {
    //   productId: product._id,
    //   productName: product.name,
    //   orderId: Math.floor(Math.random() * 100) * Date.now(),
    // };
    // console.log(order);
    // fetch("http://localhost:5000/order", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.sucess) {
    //       console.log(data.message);
    //     } else {
    //       console.error(data.error);
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //   });

    setOpenOrder(true);
  };

  return (
    <div>
      <div className="card  bg-base-100 h-80 shadow-xl">
        <figure className="-mt-6">
          <img src={image} className="w-36 " alt="Shoes" />
        </figure>
        <div className="card-body text-center -mt-3">
          <h2 className="text-md font-bold">{name}</h2>
          <p className="text-xs text-[#AEAEAE]">{weight}g</p>
          <p className="text-xs">
            {ingredient ? ingredient.slice(0, 5) : "white bun"}
          </p>

          <div className="flex justify-between  items-center  gap-4 mt-3 ">
            <div>
              <h2 className="font-bold">${price}</h2>
            </div>

            {/* take order */}
            {/* <div>
              <button
                onClick={() => handleOrderSubmit(product)}
                className="border rounded-lg bg-blue-500 text-xs px-2  "
              >
                order now
              </button>
            </div> */}

            {/* The button to open modal */}
            <div>
              <label
                htmlFor="my-modal-3"
                onClick={() => handleOrderSubmit(product)}
                className=" bg-blue-500 bg-blue-500 text-white p-2 rounded-lg "
              >
                order
              </label>
              {openOrder && <AddOrder product={product}></AddOrder>}
            </div>
            {/* order end  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;

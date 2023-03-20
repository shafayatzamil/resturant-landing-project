import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddOrder = ({ product }) => {
  const { _id, name, image, ingredient, price, vegans, weight, calories } =
    product;
  const [orderPrice, setOrderPrice] = useState(1);
  const [increment, setIncrement] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const today = new Date();

  const handleOrder = () => {
    setOrderPrice(price * increment + 30 + 3);
    const order = {
      productId: product._id,
      productName: product.name,
      orderId: Math.floor(Math.random() * 10) * Date.now(),
      price: orderPrice,
      time:
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      staus: "in-order",
    };
    // console.log(order);

    fetch("http://localhost:5000/addorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          console.log(data.message);
        } else {
          console.error(data.error);
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  if (increment < 0) {
    return setIncrement(0);
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleSubmit(handleOrder)}>
            <h2>Order name:{product.name}</h2>
            <div className="flex justify-end items-center">
              <img src={image} className="w-48 mx-auto" alt="" />
              <div className="font-extrabold text-xl text-red-500">
                price:${price}
              </div>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">{name}</span>
              </label>

              <div className="flex gap-3 justify-end ">
                <div>
                  Quantity: <span className="text-red-600">{increment}X</span>
                </div>
                <button
                  onClick={() => setIncrement((e) => e - 1)}
                  className="btn btn-outline btn-sm"
                >
                  {" "}
                  <span className="text-xs">-</span>{" "}
                </button>
                <button
                  onClick={() => setIncrement((e) => e + 1)}
                  className="btn btn-outline btn-sm  "
                >
                  <span className="text-xs">+</span>
                </button>
              </div>

              <div className="flex flex-col gap-3 justify-end   ">
                <h2>Subtotal:${price}</h2>
                <h2>Delivary fee:30</h2>
                <h2>Vat : $ 3</h2>

                <h2 className="text-red-600">Total:${orderPrice}</h2>
              </div>
            </div>

            {/* btn  */}
            <div className="form-control mt-12">
              <button className="border p-2 rounded-md bg-[#2E2E2E] text-white text-sm">
                Add order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;

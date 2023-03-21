import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

import "./BookingModal.css";
import { toast } from "react-hot-toast";

const BookingModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const imghostkey = process.env.REACT_APP_imgbb_key;
  const options = [
    { value: "white bun", label: "white bun" },
    { value: "Bean based veggi patty", label: "Bean based veggi patty" },
    { value: "Lettuce", label: "Lettuce" },
    { value: "Jalapeno pappers", label: "Jalapeno pappers" },
  ];

  const handleSelectedOptionsChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  const handleProduct = (data) => {
    // console.log(data, data.image[0], selectedOptions);

    const product = data;

    // image hosting
    // const image = data.image[0];
    // const formData = new FormData();
    // formData.append("image",image);
    // const uri = `https://api.imgbb.com/1/upload/e1cab9f1ed30cd28fda6daa3500d2389`;
    // fetch(uri, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imageData) => {
    //     console.log(imageData);
    //   });

    // product
    // https://resturant-mangement-server.vercel.app/
    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          toast(data.message);
        } else {
          toast(data.error);
        }
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-5"
        className="modal-toggle relative "
      />
      <div className="modal">
        <div className="modal-box absolute right-1 top-1  w-1/3 h-auto  max-w-5xl">
          <h3 className="font-bold text-lg mb-2">Add a new product</h3>

          <form onSubmit={handleSubmit(handleProduct)}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Name of the product</span>
              </label>
              <input
                type="text"
                placeholder=""
                {...register("name", { required: "fillup  the name field" })}
                className="py-2 border-2 text-black"
              />
              {errors.name && <p className="text-red">{errors.name.message}</p>}
            </div>

            {/* INGREDIENT */}
            <h4 className="text-sm">Ingredients</h4>
            <div className="border form-control mb-4">
              <Select
                {...register("ingredient")}
                options={options}
                isMulti
                value={selectedOptions}
                onChange={handleSelectedOptionsChange}
              />
            </div>

            {/* checkbox */}
            <div className="form-control flex flex-row items-center ">
              <input
                type="checkbox"
                className="h-6 w-6 "
                {...register("vegans")}
                id="vegans"
              />
              <label htmlFor="vegans" className="ml-2 text-md ">
                Suitable for vegans
              </label>
            </div>

            {/* weight and calories */}
            <div className="form-control">
              <div className="flex gap-2 mt-6">
                <div className="flex-1 w-50%">
                  <h4 className="text-sm">Weight in grams</h4>
                  <input
                    type="text"
                    placeholder=""
                    {...register("weight", { required: "fillup  the weight" })}
                    className="py-2 w-36  border-2 text-black"
                  />
                </div>
                <div className="flex-1 ">
                  <h4 className="text-sm">Calories</h4>
                  <input
                    type="text"
                    placeholder=""
                    {...register("calories", {
                      required: "fillup  the Calories field",
                    })}
                    className="py-2 w-36 border-2 text-black"
                  />
                </div>
              </div>
            </div>

            {/* Prices */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="$"
                {...register("price", { required: "fillup  the Price field" })}
                className="py-2 w-1/2 border-2 text-black"
              />
              {errors.name && <p className="text-red">{errors.name.message}</p>}
            </div>

            {/* Upload Images */}
            <div className="form-control  mt-6">
              <div className="grid grid-cols-2 gap-1">
                {/* <div className="relative">
                  <h2 className="font-semibold">Upload photo</h2>
                  <p className="text-xs">JPG, PNG, max 2MB</p>
                  <label
                    htmlFor="file-upload"
                    className="absolute left-40 top-2"
                  ></label>
                </div>

                <div>
                  <input
                    type="file"
                    id="file-upload"
                    title=" "
                    placeholder=""
                    {...register("image")}
                  />
                </div> */}
                <label className="label">
                  <span className="label-text">Product image url:</span>
                </label>
                <input
                  type="text"
                  placeholder="image"
                  {...register("image")}
                  className="py-2  border-2 text-black"
                />

                <div></div>
              </div>
            </div>

            {/* btn  */}
            <div className="form-control mt-12">
              <button className="border p-2 rounded-md bg-[#2E2E2E] text-white text-sm">
                Add product to the menu!
              </button>
            </div>
          </form>

          {/* close btn of modal box */}
          <div className="modal-action">
            <label
              htmlFor="my-modal-5"
              className="btn btn-sm btn-square absolute right-2 top-4"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

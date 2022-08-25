import React from "react";
import { useForm } from "react-hook-form";


const Sales = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <div className="space-x-5">
        <h1 className="flex items-center font-medium text-2xl mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 512 512"
            className="icon icon-xxlg align-text-top w-8 h-8 inline-block p-2"
          >
            <path d="M200 413.3c-24.3 0-43.8 19.6-43.8 43.8s19.6 43.8 43.8 43.8 43.8-19.6 43.8-43.8-19.6-43.8-43.8-43.8zM382.9 413.3c-24.3 0-43.8 19.6-43.8 43.8s19.6 43.8 43.8 43.8c24.2 0 43.8-19.6 43.8-43.8s-19.6-43.8-43.8-43.8zM508.6 105.7c-3-4-7.8-6.2-12.8-6.2H187.9c-8.9 0-16.3 7.3-16.3 16.3S179 132 187.9 132H475l-51.8 201.2H164.4L78.5 27.7c-2.1-6.8-8.4-11.5-15.5-11.5H16.2C7.3 16.2 0 23.5 0 32.4s7.3 16.3 16.3 16.3H51l85.8 305.5c2.1 6.8 8.4 11.5 15.5 11.5H436c7.5 0 14-5.1 15.7-12.4l59.7-233.7c1.3-4.9.2-9.9-2.8-13.9z"></path>
            <path d="M356.6 246.8c8.9 0 16.3-7.3 16.3-16.3 0-8.9-7.3-16.3-16.3-16.3H224.5c-8.9 0-16.3 7.3-16.3 16.3 0 8.9 7.3 16.3 16.3 16.3h132.1z"></path>
          </svg>
          New Sales Order
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-8 bg-[#FBFAFA]  h-[128px]">
            <label
              className=" text-red-500 text-md font-bold mb-2 w-[160px]"
              for="customer-name"
            >
              Customer Name*
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline w-1/3"
              placeholder="Customer Name"
              {...register("customerName", { required: true })}
            />
          </div>
          <div className="flex items-center bg-white">
            <label
              className=" text-red-500 text-md font-bold mb-2 w-[160px] inline-block"
              for="salesperson"
            >
              Salesperson*
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline w-1/3"
              placeholder="Customer Name"
              {...register("salesperson", { required: true })}
            />
          </div>
          <div className="flex items-center bg-white mt-4">
            <label
              className=" text-red-500 text-md font-bold mb-2 w-[160px] inline-block"
              for="order-number"
            >
              Order Number*
            </label>
            <input
              type="number"
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline w-1/3"
              placeholder="Order Number"
              {...register("orderNumber", { required: true })}
            />
          </div>
          <div className="flex items-center bg-white mt-4">
            <label
              className="text-red-500 text-md font-bold mb-2 w-[160px] inline-block"
              for="date"
            >
              Date*
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline w-1/3"
              placeholder="Date"
              {...register("Date", { required: true })}
            />
          </div>
          <div className="flex items-center bg-white mt-4">
            <label
              className="text-red-500 text-md font-bold mb-2 w-[160px] inline-block"
              for="phone-number"
            >
              Phone Number*
            </label>
            <input
              type="tell"
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline w-1/3"
              placeholder="Phone Number"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          <h1 className="font-medium text-2xl mb-4 mt-6">Check Availability</h1>

          <div className="mb-4">

            <div className="flex items-center bg-white mt-4 space-x-4">
              <input
                type="text"
                className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline w-1/4"
                placeholder="Product Name"
                {...register("productName")}
              />
              <input
                type="number"
                className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline w-1/6"
                placeholder="quantity"
                {...register("quantity")}
              />
            </div>
          </div>
          <input
            className="border rounded-xl bg-[#FBFAFA]  pl-8 pr-8 pt-2 pb-2 font-bold"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Sales;

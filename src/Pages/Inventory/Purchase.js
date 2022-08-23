import React, { useRef } from "react";
import { toast } from "react-toastify";

const Purchase = () => {
  const vendorName = useRef('');
  const purchaser = useRef('');
  const purchaseDate = useRef('');
  const productName = useRef('');
  const quantity = useRef('');
  const price = useRef('');


  const handleSubmit = (e) => {
    e.preventDefault()
    const vendor = vendorName.current.value;
    const purchase = purchaser.current.value;
    const pDate = purchaseDate.current.value;
    const product = productName.current.value;
    const qntity = quantity.current.value;
    const productPrice = price.current.value;
    console.log(vendor, purchase, pDate, product, qntity, productPrice);

    const data = {
      vendor: vendor,
      purchase: purchase,
      pDate: pDate,
      product: product,
      qntity: qntity,
      productPrice: productPrice
    }

    const url = `http://localhost:5000/purchase`
    fetch(url, {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          toast.success('Purchase Sucessfully')
          e.target.reset();
          // navigate('/dashboard/manageInventory')
        }
      }
      )
  }
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="flex items-center font-medium">
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
          <span className="products-title">New Purchase Order</span>
        </h1>
        <form >
          <div className="flex items-center p-10 mb-12 bg-[#FBFAFA]  h-[128px]">
            <label
              className=" text-red-500 text-md font-bold mb-2 w-[160px] inline-block"
              htmlFor="vendor-name"
            >
              Vendor Name*
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-5 text-black leading-tight focus:outline-none focus:shadow-outline w-[100%] "
              type="text"
              placeholder=" Vendor Name"
              ref={vendorName}
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              className="w-[160px] inline-block  text-red-500 text-md font-bold mb-2"
              htmlFor="purchaser"
            >
              Purchaser
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline w-[100%]"
              type="text"
              placeholder="purchaser"
              ref={purchaser}
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              className="w-[160px] inline-block  text-red-500 text-md font-bold mb-2"
              htmlFor="purchase-date"
            >
              Purchase Date*
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline w-[100%]"
              type="date"
              placeholder="Purchase Date"
              ref={purchaseDate}
            />
          </div>
          <h1 className="mb-8 mt-8 text-center text-2xl font-bold">Item Details</h1>
          <div className="flex items-center mb-4">
            <label
              className="w-[160px] inline-block  text-black text-md font-bold mb-2"
              htmlFor="product-name"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline w-[100%]"
              type="text"
              placeholder="product name"
              ref={productName}
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              className="w-[160px] inline-block  text-black text-md font-bold mb-2"
              htmlFor="product qnty"
            >
              Quantity
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline w-[100%]"
              type="number"
              placeholder="product quantity"
              ref={quantity}
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              className="w-[160px] inline-block  text-black text-md font-bold mb-2"
              htmlFor="product price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded  py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline w-[100%]"
              type="number"
              placeholder="product price"
              ref={price}
            />
          </div>
          <div className="mt-10">
            <button onClick={handleSubmit} className="btn bg-purple-600 hover:bg-blue-900 w-72 block mx-auto" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;

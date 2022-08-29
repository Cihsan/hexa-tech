import React, { useRef } from "react";
import { toast } from "react-toastify";
import ExpenseTrack from "./ExpenseTrack";

const Purchase = () => {
  const vendorName = useRef('');
  const purchaser = useRef('');
  const purchaseDate = useRef('');
  const productName = useRef('');
  const quantity = useRef('');
  const price = useRef('');


  const handleSubmit = (event) => {
    event.preventDefault()
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

    const url = `https://hexatech-server.herokuapp.com/purchase`
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
          console.log(result);
          toast.success('Purchase Sucessfully')
          event.target.reset()

          // navigate('/dashboard/manageInventory')
        }
      }
      )
  }
  return (
    <div className="flex justify-center">
      <div>


        <div className=" bg-base-100">
          <h1 className="text-center text-2xl">Purchase For You Inventory</h1>
          <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                  <input ref={productName} type="text" className="input input-bordered w-full" placeholder="Product Name" />
                  <div className="md:flex gap-2">
                    <div>
                      <input ref={quantity} type="number" className="input input-bordered w-full" placeholder="quantity" />
                    </div>
                    <div>
                      <input ref={price} type="number" className="input input-bordered w-full" placeholder="Unit price" />
                    </div>
                  </div>
                  <input ref={purchaseDate} type="datetime-local" className="input input-bordered w-full" placeholder="purchase Date" />
                  <input ref={vendorName} type="text" className="input input-bordered w-full" placeholder="vendor Name" />
                  <input ref={purchaser} type="text" className="input input-bordered w-full" placeholder="purchaser" />
                  <input type="submit" value='Add Purchase' className="btn btn-secondary w-full" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <ExpenseTrack />
      </div>

    </div>
  );
};

export default Purchase;

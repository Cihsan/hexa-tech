import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ExpenseTrack = () => {
    const { register, handleSubmit, reset, /* formState: { errors } */ } = useForm();

    const onSubmit = (data) => {
        //console.log(data);
        const url = `https://hexatech-server.herokuapp.com/expense`
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
                reset()
              console.log(result);
              toast.success('Expense Added Sucessfully')
            }
          })

    }
    return (
        <div className="flex justify-center">
            <div>


                <div className=" bg-base-100">
                    <h1 className="text-center text-2xl">Purchase For You Inventory</h1>
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-5 mt-5'>
                                    <input {...register("title")} type="text" className="input input-bordered w-full" placeholder="Expense Title" />

                                    <input {...register("amount")} type="number" className="input input-bordered w-full" placeholder="Expense Amount" />

                                    <input {...register("date")} type="datetime-local" className="input input-bordered w-full" placeholder="Expense Date" />

                                    <textarea {...register("desc")} className="input input-bordered w-full" placeholder="Expense Description"></textarea>
                                    <input type="submit" value='Add Purchase' className="btn btn-secondary w-full" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExpenseTrack;
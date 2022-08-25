import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
// import AsyncSelect from 'react-select/async';
const SalesOrder = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, /* formState: { errors } */ } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        const url = `https://hexatech-server.herokuapp.com/sale-order`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                if (data) {
                    toast.success('Sale Order added Sucessfully')
                }
            }
            )
    };
    /* sale-order */

    return (
        <div className='mx-auto'>
            <h4>Sales Order</h4>
            <form onSubmit={handleSubmit(onSubmit)}
                className="contact__form flex flex-col items-center justify-center mt-6"
            >
                <input type="hidden" name="form-name" value="contact" />
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Oparator Name..."
                    className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                    required
                    {...register("Oparator")}

                />
                <input
                    type="email"
                    name="name"
                    id="name"
                    placeholder="Email"
                    className="py-2 px-4 hidden mb-3 rounded-lg input input-bordered"
                    value={user.email}
                    required
                    {...register("email")}

                />

                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Item Name"
                    className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                    required
                    {...register("name")}
                /* value={email}
                onChange={(e) => setEmail(e.target.value)} */
                />
                <input
                    type="number"
                    name="email"
                    id="email"
                    placeholder="item Quantity"
                    className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                    required
                    {...register("qt")}

                />
                <input
                    type="number"
                    name="email"
                    id="email"
                    placeholder="item Unit Price"
                    className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                    required
                    {...register("price")}

                />
                <input
                    type="number"
                    name="email"
                    id="email"
                    placeholder="Subtatal"
                    className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                    required
                    {...register("subtotal")}

                />
                <input
                    type="number"
                    name="email"
                    id="email"
                    placeholder="Tatal"
                    className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                    required
                    {...register("total")}

                />

                <button
                    type="submit"
                    className="bg-blue-500 py-2 px-6 rounded font-bold hover:bg-transparent hover:text-blue-500 border-2 border-blue-500 text-white transition-all duration-500 hover:opacity-75 hover:bg-blue-800 hover:border-blue-800 shadow-lg"
                >
                    Submit
                </button>
            </form>

        </div>
    );
};

export default SalesOrder;
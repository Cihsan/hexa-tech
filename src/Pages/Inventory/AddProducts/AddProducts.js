import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';



const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        const url = `https://hexatech-server.herokuapp.com/products`
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
                    toast.success('Item added Sucessfully')
                    navigate('/dashboard/manageInventory')
                }
            }
            )
    };

    return (
        <div>
            <h1 className='products-title'>Please Add  Service</h1>
            <div className='text-center'>
                <div className='mt-10 lg:px-52 sm:px-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input
                            className='hidden mb-3 input input-bordered input-primary w-full max-w-xs' required
                            type="text" value={user.email} {...register("email")}
                        />
                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter Item Name'
                            type="text" {...register("name")}
                        />

                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter Quantity'
                            type="number" {...register("quantity")}
                        /><br />
                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter brand'
                            type="text" {...register("brand")}
                        />
                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter Manufacturer'
                            type="text" {...register("manufacturer")}
                        /><br />
                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs'
                            placeholder='Enter Attributes'
                            type="text"{...register("attributes")}
                        />

                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter Img url'
                            type="text"{...register("img")}
                        /><br />


                        <textarea
                            className='mb-3 input input-bordered input-primary w-full max-w-xs'
                            placeholder='Enter Service Details'
                            {...register("description",
                                {
                                    maxLength: 250, required: {
                                        value: true,
                                        message: "Comment is required"
                                    },
                                })}
                        /><br />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>

                        <input
                            className='mb-2 bg-purple-600 hover:bg-blue-900 font-bold text-white text-center rounded-md h-12 input input-bordered input-primary w-full max-w-xs'
                            type="submit"
                            value="Add Product"
                        />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProducts;
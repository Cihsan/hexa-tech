import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// import auth from '../../../firebase.init';


const EditProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const [user] = useAuthState(auth);
    // console.log(user)
    const navigate = useNavigate()
    const { id } = useParams()

    const onSubmit = (data) => {
        console.log(data)
        const url = `https://hexatech-server.herokuapp.com/editProducts/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                if(data){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Item Update Sucessfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/manageInventory')
                }
            })
    };

    return (
        <div>
            <h1 className='text-center font-bold text-purple-600 text-5xl'>Edit Your Service</h1>
            <div className='text-center'>
                <div className='mt-16 lg:px-52 sm:px-10' >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <input value={user.email}
                            className='mb-3  input input-bordered input-primary w-full max-w-xs' required
                            {...register("email")}
                        /> <br /> */}

                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter Item Name'
                            type="text" {...register("name")}
                        /><br />
                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter Quantity'
                            type="number" {...register("quantity")}
                        /><br />
                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter brand'
                            type="text" {...register("brand")}
                        /><br />
                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter Manufacturer'
                            type="text" {...register("manufacturer")}
                        /><br />
                        <input
                            className='mb-3 input input-bordered input-primary w-full max-w-xs'
                            placeholder='Enter Attributes'
                            type="text"{...register("attributes")}
                        /><br />

                        <input
                            className='mb-3  input input-bordered input-primary w-full max-w-xs' required
                            placeholder='Enter Img url'
                            type="text"{...register("img")}
                        /><br />


                        <textarea
                            className='mb-2 rounded-md h-36 w-full bg-gray-100  input input-bordered input-primary'
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
                            value="Edit Product"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProducts;
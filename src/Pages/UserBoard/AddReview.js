import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddReview = () => {
    const { register, /* formState: { errors }, */ handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `https://hexatech-server.herokuapp.com/review-post`
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
                }
            }
            )
    }



    return (
        <div>
            <div>
                <div class="">
                    <div class="">
                        <ToastContainer />

                        <div class="flex items-center justify-center shadow-lg  mx-8 mb-4 max-w-lg">
                            <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a Review</h2>
                                    <div class="w-full md:w-full px-3 mb-2 mt-2">
                                        <input class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full  py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" placeholder='Full Name'
                                            {...register("name", {
                                                required: { value: true, message: 'Name is Required' }
                                            })}

                                        />
                                    </div>
                                    <div class="w-full md:w-full px-3 mb-2 mt-2">
                                        <textarea class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full  py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" placeholder='Type Your Review'
                                            {...register("review", {
                                                required: { value: true, message: 'review is Required' }
                                            })}
                                        ></textarea>
                                    </div>

                                    <select className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none ml-3 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="ratings" required {...register("rating", {
                                        required: { value: true, message: 'Rating is Required' }
                                    })}>
                                        <option value="3.5" selected>3.5</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="4.5">4.5</option>
                                        <option value="5">5</option>
                                    </select>
                                    <div class="w-full md:w-full flex items-start md:w-full px-3">
                                        <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">

                                            <p class="text-xs md:text-sm pt-px"></p>
                                        </div>
                                        <div class="-mr-1">
                                            <input type='submit' class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Review' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* <div class="">

                            <div class="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 class="text-2xl text-center">Write Your Review Here</h3>
                                <form onSubmit={handleSubmit(onSubmit)} class="px-8 pb-8 mb-4 bg-white rounded">
                                    <div class="mb-4">

                                        <input
                                            {...register("name", {
                                                required: { value: true, message: 'Name is Required' }
                                            })}
                                            class=" input input-primary "
                                            name='name'
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                        />

                                    </div>
                                    <div class="mb-4">

                                        <textarea
                                            {...register("review", {
                                                required: { value: true, message: 'review is Required' }
                                            })}
                                            class=" input input-primary "
                                            placeholder="Your Review"
                                            rows="3"
                                            name='review'
                                            required
                                        ></textarea>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div class="">
                                            <input
                                                class=" input input-primary "
                                                type="file"
                                                placeholder="Your image"
                                                name='img'
                                                required
                                                {...register("img", {
                                                    required: { value: true, message: 'image is Required' }
                                                })}
                                            />
                                        </div>
                                        <div className=''>
                                            <div class=" flex items-center gap-3">
                                                <label class="">
                                                    Ratings
                                                </label>
                                                <select className=' input input-primary' name="ratings" required {...register("rating", {
                                                    required: { value: true, message: 'Rating is Required' }
                                                })}>
                                                    <option value="3.5" selected>3.5</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="4.5">4.5</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-6 text-center">
                                        <input
                                            class="btn btn-sm"
                                            type="submit"
                                            value='Submit Review'
                                        />
                                    </div>

                                </form>
                            </div>
                        </div> */}
                </div>
            </div>


        </div>
    );
};

export default AddReview;
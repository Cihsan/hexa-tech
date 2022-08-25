import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {
   const { register, handleSubmit, reset, /* formState: { errors } */ } = useForm();
   const [user] = useAuthState(auth);
   const profileUpdate = (data) => {
      console.log(data);
     
      fetch('https://hexatech-server.herokuapp.com/profile-post', {
         method: 'POST',
         /* headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`

         }, */
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(data => {
            if (data.result) {
               toast(`Profile Added Successfuly`)
            }
            else {
               toast.error(`Already have and Profile`)
            }
         })
      reset()
   } 
   return (
      <div >
         <ToastContainer />
         <form onSubmit={handleSubmit(profileUpdate)}>
            <div className='flex-none md:flex gap-5 mt-10 mx-5'>
               <div className='hidden'>
                  <input className='hidden' {...register("email")} value={user.email} required type="text" placeholder='Your Name' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
               <div className=''>
                  <label className=' font-medium md:block inline' htmlFor="">Full Name</label>
                  <input {...register("fName")} required type="text" placeholder='Your Name' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Full Address</label>
                  <input {...register("address")} required type="text" placeholder='Your Full Address' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Zip Code</label>
                  <input {...register("zip")} required type="text" placeholder='Your Zip Code' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
            </div>
            <div className='flex-none md:flex sm:items-center gap-5 mx-5'>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Country</label>
                  <input {...register("country")} required type="text" placeholder='Your Country' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Contact</label>
                  <input {...register("contact")} required type="text" placeholder='Your Contact' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
               <div>
                  <label className=' font-medium md:block inline' htmlFor="">Profile Link</label>
                  <input {...register("link")} required type="text" placeholder='Your Linkedin Profile' class="rounded py-3 w-full  px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary" />
               </div>
            </div>
            <div><button type="submit" class="mt-5 ml-5 text-white bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90 " >Update</button></div>
         </form>

      </div>
   );
};

export default UpdateProfile;
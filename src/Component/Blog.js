import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <div className='text-center mt-6 mb-20 text-6xl'>Inside Story & <span className='text-purple-600 '>Blog</span>
      </div>
      <div className='px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center lg:mx-24' >
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure><img className='w-full' src="https://sinco.vercel.app/images/blog/blog_img_01.jpg" alt="Shoes" /></figure>
          <div className="card-body mt-5 ">
            <p className='text-lg'>Data Science - 15 minute read</p>
            <h3 className="text-xl card-title hover:text-purple-600">Make more daily productive working flow like pro.</h3>
          </div>
        </div>
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure><img className='w-full' src="https://sinco.vercel.app/images/blog/blog_img_02.jpg" alt="Shoes" /></figure>
          <div className="card-body mt-5 ">
            <p className='text-lg'>Data Science - 10 minute read</p>
            <h3 className="text-xl card-title hover:text-purple-600">Internet of the things and why it’s becoming important in the century.</h3>
          </div>
        </div>
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure><img className='w-full' src="https://sinco.vercel.app/images/blog/blog_img_03.jpg" alt="Shoes" /></figure>
          <div className="card-body mt-5 ">
            <p className='text-lg'>Data Science - 15 minute read</p>
            <h3 className="text-xl card-title hover:text-purple-600">The power product and the quotient rules.</h3>
          </div>
        </div>
      </div>
      <p className='text-right my-10 text-3xl '>
        <Link className='text-primary' to='/blogs'>See More<BsArrowRightShort className='display: inline-block' /></Link></p>
    </div>
  )
}

export default Blog
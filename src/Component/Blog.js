import React from 'react'

const Blog = () => {
  return (
    <div>
      <div className='text-center mt-6 mb-20 text-6xl'>Inside Story & <span className='text-purple-600 '>Blog</span>
      </div>
      <div className='px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center lg:mx-24' >
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure><img className='w-full' src="https://sinco.vercel.app/images/blog/blog_img_01.jpg" alt="Shoes" /></figure>
          <div className="card-body mt-5 mb-10">
          <p className='text-lg'>Data Science - 15 minute read</p>
          <h2 className="text-2xl card-title hover:text-purple-600">Make more daily productive working flow like pro.</h2>
          </div>
        </div>
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure><img className='w-full' src="https://sinco.vercel.app/images/blog/blog_img_02.jpg" alt="Shoes" /></figure>
          <div className="card-body mt-5 mb-3">
          <p className='text-lg'>Data Science - 10 minute read</p>
          <h2 className="text-2xl card-title hover:text-purple-600">Internet of the things and why it’s becoming important in the century.</h2>
          </div>
        </div>
        <div className="card card-compact shadow-sm bg-slate-50 rounded-md">
          <figure><img className='w-full' src="https://sinco.vercel.app/images/blog/blog_img_03.jpg" alt="Shoes" /></figure>
          <div className="card-body mt-5 mb-10">
          <p className='text-lg'>Data Science - 15 minute read</p>
          <h2 className="text-2xl card-title hover:text-purple-600">The power product and the quotient rules.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
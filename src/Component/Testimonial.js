import React from 'react';
import img09 from '../Assets/media/img_09.jpg';
import img10 from '../Assets/media/img_10.jpg';
const Testimonial = () => {
    return (
        <div className='px-10 py-10'>
            <span>TESTIMONIALS</span>
            <h1 className='text-center text-5xl py-10'>Words from Client</h1>
            <img src="" alt="" />
            <div className='md:flex items-center justify-evenly'>
                <img className='rounded-full' src={img09} alt="" />
                <p className='text-3xl text-center px-10'>Having a home-based business is a wonderful asset to
                    your life. The problem still stands it comes time to advertise
                    your business for a cheap cost. I know you have looked
                    for answers everywhere.</p>
                <img className='rounded-full' src={img10} alt="" />
            </div>

        </div>
    );
};

export default Testimonial;
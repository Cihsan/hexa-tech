import React from 'react';

import "./Herobanner.css"
//import banner from "../Assets/icon/banner.png"
import { Link } from 'react-router-dom';

const Herobanner = () => {
    return (
        <div className=''>
            <div className='banner'  >

                {/* style={{
          background:` url(${bg2})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
      }} */}

                <div className="hero min-h-screen  ">
                    <div className="hero-content flex-col lg:flex-row-reverse bgimg">

                        {/* <img src={banner} className="max-w-m  rounded-lg " alt='' /> */}
                        <div className='text-center'>
                            <h1 className="text-5xl font-bold herotext1">We Make Some For You, you can get it </h1>
                            <p className=" text-2xl py-6">Hexatech delivered blazing fast, Unique and powerful suite of software to run your entire business, brought to you by a company with the long term vision to transform the way you work.</p>
                            <div className='flex-col lg:flex-row'>
                                <Link to='/#our' className="btn btn-primary">Get Started </Link>

                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Herobanner;
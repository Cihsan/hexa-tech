import React from 'react';

import "./Herobanner.css"
//import banner from "../Assets/icon/banner.png"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Herobanner = () => {
    const { t} = useTranslation();
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
                            <h4 className="text-4xl font-bold herotext1"> 
                            {t("home.title")} </h4>
                            <p className=" text-xl py-6">{t("home.subTitle")}</p>
                            <div className='flex-col lg:flex-row'>
                                <Link to='/#our' className="btn btn-primary">{t("button.startButton")}</Link>

                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Herobanner;
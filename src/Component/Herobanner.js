import React from 'react';

import "./Herobanner.css"
//import banner from "../Assets/icon/banner.png"
import { useTranslation } from 'react-i18next';
import Service from './Service';

const Herobanner = () => {
    const { t } = useTranslation();
    return (
        <div className=''>
            <div className='banner'  >

                {/* style={{
          background:` url(${bg2})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
      }} */}

                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse bgimg">
                            <div className='text-center'>
                                <h4 className="text-4xl font-bold herotext1">
                                    {t("home.title")} fasdfsa</h4>
                                <p className=" text-xl py-6">{t("home.subTitle")}</p>
                                <div className='flex-col lg:flex-row'>
                                    <a className="btn btn-primary" href="#feature">{t("button.startButton")}</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <Service></Service>
        </div>
    );
};

export default Herobanner;
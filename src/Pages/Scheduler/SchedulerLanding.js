import React from 'react';
import { useNavigate } from 'react-router-dom';
import FAQ from '../../Component/FAQ';

const SchedulerLanding = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className=''>
                <div className='hero min-h-screen'>
                    <div className="lg:card-side grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:mx-10">
                        <div className="card-body my-3">
                            <h2 className="card-title text-6xl leading-tight">Get Schedule <br /> For You Work
                            </h2>
                            <p className='pt-2 leading-10 text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.</p>
                            <button onClick={() => navigate(`/Scheduler/`)} className="py-3 mt-5 hover:bg-primary rounded w-1/3 bg-purple-600 text-white font-bold hover:bg-none">Start Schedule</button>
                        </div>
                        <figure><img className='w-full' src="https://sinco.vercel.app/images/assets/ils_16.svg" alt="Album" /></figure>
                    </div>
                </div>
                <FAQ />
            </div>
        </div>
    );
};

export default SchedulerLanding;

/* /Scheduler-entry
/Scheduler */
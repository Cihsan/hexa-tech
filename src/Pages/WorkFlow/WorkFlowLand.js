import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkFlowLand = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='hero min-h-screen'>
                <div className="lg:card-side grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:mx-10">
                    <div className="card-body my-3">
                        <h2 className="card-title text-6xl leading-tight">Make <br /> Your Working Flow
                        </h2>
                        <p className='pt-2 leading-10 text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.</p>
                        <button onClick={() => navigate(`/workflow/`)} className="py-3 mt-5 hover:bg-primary rounded w-1/3 bg-purple-600 text-white font-bold hover:bg-none">Start Project</button>
                    </div>
                    <figure><img className='w-10/12' src="https://i.ibb.co/PYnF9qr/workflow325x275.png" alt="Album" /></figure>
                </div>
            </div>
        </div>
    );
};

export default WorkFlowLand;
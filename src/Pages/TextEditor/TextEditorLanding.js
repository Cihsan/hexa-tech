import React from 'react';
import { useNavigate } from 'react-router-dom';

const TextEditorLanding = () => {
    const navigate = useNavigate()

    return (
        <div>

            <div className='hero min-h-screen'>
                <div className="lg:card-side grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:mx-10">
                    <div className="card-body my-3">
                        <h2 className="card-title text-6xl leading-tight">Get Text Editor <br /> For Any Write Next 
                        </h2>
                        <p className='pt-2 leading-10 text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.</p>
                        <button onClick={() => navigate(`/text-editor/`)} className="py-3 mt-5 hover:bg-primary rounded w-1/3 bg-purple-600 text-white font-bold hover:bg-none">Start Project</button>
                    </div>
                    <figure><img className='w-full' src="https://i.ibb.co/6R0BcMs/text-editor-275x275.png" alt="Album" /></figure>
                </div>
            </div>

        </div>
    );
};

export default TextEditorLanding;
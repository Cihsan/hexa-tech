import React from 'react';

const Summary = () => {
    return (
        <div>
            <div className='md:grid grid-cols-3 my-10 bg-secondary mx-10 px-10 py-10 rounded-lg'>
                <div className='text-base-100'>
                    <h1 className='text-5xl py-5 text-center'>20mil</h1>
                    <p className='text-center'>Human labor hours saved
                        with help of AI</p>
                </div>
                <div className='text-base-100'>
                    <h1 className='text-5xl py-5 text-center'>1b+</h1>
                    <p className='text-center'>Generated revenue by
                        AI Solutions</p>
                </div>
                <div className='text-base-100'>
                    <h1 className='text-5xl py-5 text-center'>$15mil+</h1>
                    <p className='text-center'>Saved operational costs
                        due to AI</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;
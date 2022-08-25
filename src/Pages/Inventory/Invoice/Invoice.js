import React from 'react';

const Invoice = () => {
    return (
        <div>
            <div className="pb-10 lg:px-20 xl:max-w-7xl xl:mx-auto">
                <h4 className='text-center'>Invoice</h4>
                <div className='grid grid-cols-2'>

                    <form
                        method="post"
                        className="contact__form flex flex-col items-center justify-center mt-6"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input
                            type="text"
                            
                            placeholder="Your name..."
                            className="py-2 px-4 rounded-lg input input-bordered"
                            required

                        />
                        <input
                            type="email"
                            
                            placeholder="Your email address..."
                            className="py-2 px-4 rounded-lg input input-bordered"
                            required

                        />
                        <input
                            type="text"
                            
                            placeholder="Your address..."
                            className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                            required

                        />
                        <input
                            type="number"
                            
                            placeholder="Item Name"
                            className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                            required

                        />
                        <input
                            type="number"
                           
                            placeholder="item Quantity"
                            className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                            required

                        />
                        <input
                            type="number"
                            
                            placeholder="item Unit Price"
                            className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                            required

                        />
                        <input
                            type="number"
                            
                            placeholder="Subtatal"
                            className="py-2 px-4 mb-3 rounded-lg input input-bordered"
                            required

                        />
                        <input
                            type="number"
                            
                            placeholder="Tatal"
                            className="py-2 px-4 rounded-lg input input-bordered"
                            required

                        />

                        <button
                            type="submit"
                            className="bg-blue-500 py-2 px-6 rounded font-bold hover:text-blue-500 hover:bg-transparent border-2 border-blue-500 text-white transition-all duration-500 hover:opacity-75 hover:bg-blue-800 hover:border-blue-800 shadow-lg"
                        >
                            Submit
                        </button>
                    </form>

                    <div className=" border border-red-200 px-10 pt-5 mt-5 pb-10 sm:px-28 lg:px-20 xl:max-w-7xl xl:mx-auto">

                        <div className='flex justify-between'>
                            <p className='font-bold'>Customer </p>
                            <p>customer@mail.com </p>
                        </div>
                        <p>Address </p>
                        <div className='flex justify-between'>
                            <p className='font-bold'>item</p>
                            <p className='font-bold'>Quantity</p>
                            <p className='font-bold'>Unit Price</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>...</p>
                            <p>0</p>
                            <p>0</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>...</p>
                            <p>0</p>
                            <p>0</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Subtatal</p>
                            <p>.</p>
                            <p>0</p>
                        </div>

                        <div className='flex justify-between'>
                            <p className='font-bold'>Total</p>
                            <p>.</p>
                            <p>0</p>
                        </div>

                        <div>
                            <button
                                className="bg-blue-500 py-2 px-6 rounded font-bold hover:bg-transparent hover:text-blue-500 border-2 border-blue-500 text-white transition-all duration-500 hover:opacity-75 hover:bg-blue-800 hover:border-blue-800 shadow-lg"
                            >
                                Print
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Invoice;
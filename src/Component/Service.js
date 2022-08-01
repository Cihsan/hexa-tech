import React from 'react'
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate = useNavigate()
    return (
        <div id='our' className=''>
            <div className='mb-20'>
                <h1 className='text-4xl font-bold text-center mb-7'>Our Main Service Feature</h1>
                {/* <h2 className='text-xl text-[#737373] text-center'>Identify new opportunities, convert visitors, deliver customer happiness, and more!</h2> */}
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mx-4 lg:mx-10'>
                <div className=' rounded-2xl border-2 p-4 pt-8 '>
                    <div className="hero">
                        <div>
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src="https://cdn5.engagebay.com/new/assets/img/icons/crm.svg" className="lg:pl-8 pl-0 w-4/12  max-w-sm rounded-lg" alt='' />
                                <div>
                                    <h1 className="text-2xl font-medium">Inventory Management</h1>
                                    <p className="py-6 text-[#959697]">
                                        Purchace one kind of product buying, Inventory one kind of product storing etc. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border top-1 w-11/12 mx-auto"></div>
                    <div className='p-4'>
                        <h1 className='uppercase text-base font-medium mb-4'>Main Features</h1>
                        <div>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='flex mb-2'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Purchase</span>
                                </div>
                                <div className='flex mb-2'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Inventory </span>
                                </div>
                                <div className='flex'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Sales or Order</span>
                                </div>
                                <div className='flex'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Invioce</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => navigate(`/inventory/`)} className="py-3 mb-4 mt-9 hover:bg-primary rounded w-1/3 bg-purple-600 text-white font-bold hover:bg-none">Get Start</button>
                    </div>
                </div>
                <div className=' rounded-2xl border-2 p-4 pt-8 '>
                    <div className="hero">
                        <div>
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src="https://cdn5.engagebay.com/new/assets/img/icons/crm.svg" className="lg:pl-8 pl-0 w-4/12  max-w-sm rounded-lg" alt='' />
                                <div>
                                    <h1 className="text-2xl font-medium">Project Management</h1>
                                    <p className="py-6 text-[#959697]">
                                        Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border top-1 w-11/12 mx-auto"></div>
                    <div className='p-4'>
                        <h1 className='uppercase text-base font-medium mb-4'>Main Features</h1>
                        <div>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='flex mb-2'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Task</span>
                                </div>
                                <div className='flex mb-2'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Employee</span>
                                </div>
                                <div className='flex'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Team</span>
                                </div>
                                <div className='flex'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Issue</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => navigate(`/project/`)} className="py-3 mb-4 mt-9 hover:bg-primary rounded w-1/3 bg-purple-600 text-white font-bold hover:bg-none">Get Start</button>
                    </div>
                </div>
                <div className=' rounded-2xl border-2 p-4 pt-8 '>
                    <div className="hero">
                        <div>
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src="https://cdn5.engagebay.com/new/assets/img/icons/crm.svg" className="lg:pl-8 pl-0 w-4/12  max-w-sm rounded-lg" alt='' />
                                <div>
                                    <h1 className="text-2xl font-medium">Messaging</h1>
                                    <p className="py-6 text-[#959697]">
                                        Store unlimited contacts and build stronger relationships by keeping track of all your customer details in one place
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border top-1 w-11/12 mx-auto"></div>
                    <div className='p-4'>
                        <h1 className='uppercase text-base font-medium mb-4'>Main Features</h1>
                        <div>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='flex mb-2'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Chat as Guest</span>
                                </div>
                                <div className='flex mb-2'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Text Chating</span>
                                </div>
                                <div className='flex'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Sales Automation</span>
                                </div>
                                <div className='flex'>
                                    <svg className="mt-2 w-4 h-4 border-2 border-[#6e43b7] rounded-full text-[#6e43b7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className='ml-2 mt-1'>Appointment Scheduling</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => navigate(`/live-chat/`)}  className="py-3 mb-4 mt-9 hover:bg-primary rounded w-1/3 bg-purple-600 text-white font-bold hover:bg-none">Get Start</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Service
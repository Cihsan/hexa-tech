import React from 'react'

const Message = () => {
    return (
        <div className='mt-20'>
            <div className="lg:card-side grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:mx-24">
                <figure><img className='w-10/12 ' src="https://sinco.vercel.app/images/assets/ils_16.svg" alt="Album" /></figure>
                <div className="card-body my-6">
                    <p className="bg-purple-100 border-none lg:w-1/4 w-2/4 pl-8 pt-1 text-purple-700 rounded-full btn-sm ">CONTACT US</p>
                    <h2 className="card-title text-6xl leading-tight">Get Ready to Started. <br />It’s Fast & Easy
                    </h2>
                    <p className='pt-6 leading-10 pb-15 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut quis nostrud ullamco laboris nisi.</p>
                    <button className="py-3 mt-5 hover:bg-primary rounded w-1/3 bg-purple-600 text-white font-bold hover:bg-none">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Message

/* 
{
        "title": "Messaging",
        "desc": "Chat with us through messaging feature and connected with us.",
        "img": "https://i.ibb.co/gRyBH5H/Messeging-Part-jpg-275x275.png",
        "path": "live-chat",
        "f1": "Chat as Guest",
        "f2": "Text Chating",
        "f3": "Sales Automation",
        "f4": "Appointment Scheduling"
    },

*/
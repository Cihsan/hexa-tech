import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className='md:grid grid-cols-2 mt-10 px-10 mb-12'>
                <div><span>QUESTIONS & ANSWERS</span>
                    <h1 className='text-5xl py-5'>Any <span className='underline'>Questions?</span> <br /> Find here.</h1>
                    <p className='py-5 text-2xl'>Don't find your answer here? just send us a message for any query.</p>
                    <button className='btn my-5'>Contact us</button>
                </div>
                <div className=''>
                    <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What is web Hosting
                        </div>
                        <div className="collapse-content">
                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How do you weigh diffrent criteria in your process ?
                        </div>
                        <div className="collapse-content">
                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            What can I use to build my website
                        </div>
                        <div className="collapse-content">
                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            If I alrady have a website , can I transfer it to your web hosting ?
                        </div>
                        <div className="collapse-content">
                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions.</p>
                        </div>
                    </div>
                    <div tabIndex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            How can I accept cradit cards online ?
                        </div>
                        <div className="collapse-content">
                            <p>They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
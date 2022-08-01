import React from 'react';
import taImg from "../Assets/assets/ta.svg"
import wpImg from "../Assets/assets/wp.svg"

const WorkProcess = () => {
  return (
    <div>
    <div className='bg-gray-100 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around pb-20 pr-20 '>
        <div className=''>
            <img alt='' className="rounded-full sm:w-[500px] md:w-[600px] lg:w-[800px] sm:h-[500px] md:h-[600px] lg:h-[800px] border-2 border-gray-100 p-16 bg-white " src={taImg}/>
        </div>
        <div className='ml-20  flex flex-col justify-center'>
            <h1 className='text-[#913BFF] bg-[#913BFF12] rounded-full inline-block pl-4 w-[170px] h-[28px]'>OVER 150K+ CLIENT</h1>
            <h1 className='text-[70px] text-[#000F5c]'>Target <span className='text-[#913BFF]'>Audience</span>  for your business.</h1>
            <h4 className='mt-4 text-xl'>AI technology is perfect for best business solutions & we  offer help to achieve your goals.</h4>
            <ul className='mt-4 li-none text-black text-bold'> 
                <li className='text-black text-bold'>Various analysis options</li>
                <li className='text-black text-bold'>Page Load(time, size, number of requests)</li>
                <li className='text-black text-bold'>Advance data analysis operation</li>
            </ul>
            <p className='mt-20'><a href='/#' className='bg-[#913BFF] text-white text-[17px] rounded-xl inline-block p-4'>More about us</a></p>
        </div>

    </div>
    <div className='pt-20 sm:pl-2 lg:pl-64 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div>
            <h1 className='text-[#913BFF] bg-[#913BFF12] rounded-full inline-block pl-4 w-[170px] h-[28px]'>WORK PROCESS</h1>
            <h1 className='text-[40px] text-[#000F5c] mt-4 mb-4'>How Hexa-tech <span className='text-[#913BFF]'>process</span>  and works.</h1>
            <div>
                <div className='w-[536px] h-[139px] flex border-2 border-gray-100 p-5 mb-2 rounded-xl'>
                    <div className='mr-4 w-12 h-12 border border-gray-100 rounded-full text-center hover:bg-[#913BFF] p-2'>1</div>
                    <div>
                        <h1 className='text-[#000F5C] text-[19px] text-bold'>Frame the problem</h1>
                        <p>Learn content by interacting with an expert lesson or watching a video</p>
                    </div>
                </div>
                <div className='w-[536px] h-[139px] flex border-2 border-gray-100 p-5 mb-2 rounded-xl'>
                    <div className='mr-4 w-12 h-12 border border-gray-100 rounded-full text-center hover:bg-[#913BFF] p-2'>2</div>
                    <div>
                        <h1 className='text-[#000F5C] text-[19px] text-bold'>Collect the data</h1>
                        <p>Practice what you learned on realistic SAT test questions</p>
                    </div>
                </div>
                <div className='w-[536px] h-[139px] flex border-2 border-gray-100 p-5 mb-2 rounded-xl'>
                    <div className='mr-4 w-12 h-12 border border-gray-100 rounded-full text-center hover:bg-[#913BFF] p-2'>3</div>
                    <div>
                        <h1 className='text-[#000F5C] text-[19px] text-bold'>Process the Data</h1>
                        <p>Have to be repudiated annoyances accepted the wise lorem ipsum simple text</p>
                    </div>
                </div>  
            </div>
        </div>
        <div>
            <img alt='' className="rounded-full sm:w-[300px] md:w-[600px] lg:w-[800px] sm:h-[300px] md:h-[600px] lg:h-[800px]  border-2 border-white p-16 bg-gray-100 " src={wpImg}/>
        </div>
    </div>
</div>
    
  )
}

export default WorkProcess;
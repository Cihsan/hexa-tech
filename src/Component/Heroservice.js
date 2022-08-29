import React from 'react';
import icon1 from '../Assets/icon/icon1.png'
import icon2 from '../Assets/icon/icon2.png'
import icon3 from '../Assets/icon/icon3.png'
import icon4 from '../Assets/icon/icon4.png'
import "./Heroservice.css"
const Heroservice = () => {
    return (
        <div className='container '>
           


<div className='hero'>
<div className='hero-content flex justify-between flex-row pb-10   banner2'>

<div>
  <h1 className='text-6xl font-bold textcolor2'>
   <span className='textcolor1'>Services</span> We Provide <br/> with Quality.
  </h1>
  </div>

  <div>
    <p className='text-2xl px-15'>
    NLP entails applying algorithms to identify <br/> and extract rules such that the unstructured <br/>  language data is converted.
    </p>
  </div>

</div>
</div>

<div>
{/* <div className='hero-content flex-col lg:flex-row'>
<div className="card card-compact w-80 bg-base-100 ">
   
    <div className="card-body">
      <h2 className="card-title text-5xl py-7">Data Science</h2>
      <p className='text-2xl'>Convert data noise intelligent insights for competitive differentiation qulaity check equlity.</p>
      <div className=' px-3 py-8'>
   <img src={icon4} alt="icon1" />
   </div>
    </div>
  </div>

<div className="card card-compact w-60 bg-base-100 ">
   
    <div className="card-body">
      <h2 className="card-title text-5xl py-7">Data Science</h2>
      <p className='text-2xl'>Convert data noise intelligent insights for competitive differentiation qulaity check equlity.</p>
      <div className=' px-3 py-8'>
   <img src={icon4} alt="icon1" />
   </div>
    </div>
  </div>
</div> */}


</div>














<div className='hero'>

<div className='hero-content flex-col lg:flex-row px-8 py-20'>
  
  <div className="card card-compact w-96 bg-base-100 ">
   <div className=' px-5 '>
   <img src={icon1} alt="icon1" />
   </div>
    <div className="card-body">
      <h2 className="card-title text-4xl textcolor2 py-7">Project Planning </h2>
      <p className='text-2xl text-slate-600'>Build dynamic project plans that automatically adjust to changing real-world conditions using effective planning and scheduling tools. </p>
      <div className=' px-3 py-8'>
   <img src={icon4} alt="icon1" />
   </div>
    </div>
  </div>
  <div className="card card-compact w-96 bg-base-100 drop-shadow-lg ">
   <div className=' px-5 '>
   <img src={icon2} alt="icon1" />
   </div>
    <div className="card-body">
      <h2 className="card-title textcolor2 text-4xl py-7">Resource Management</h2>
      <p className='text-2xl text-slate-600'>Easily allocate resources to tasks based on availability, demand, and skills. Optimally utilize your workforce with accurate, real-time charts.</p>
      <div className=' px-3 py-8'>
   <img src={icon4} alt="icon1" />
   </div>
    </div>
  </div>
  <div className="card card-compact w-96 bg-base-100 ">
   <div className=' px-5 '>
   <img src={icon3} alt="icon1" />
   </div>
    <div className="card-body">
      <h2 className="card-title textcolor2 text-4xl py-7">Project Tracking </h2>
      <p className='text-2xl text-slate-600'>Address problems with milestones, tasks, and projects without leaving your dashboard. Stay on top of your projects with automatic email alerts.</p>
      <div className=' px-3 py-8'>
   <img src={icon4} alt="icon1" />
   </div>
    </div>
  </div>
  
  
  
  </div>
</div>

        </div>
    );
};

export default Heroservice;
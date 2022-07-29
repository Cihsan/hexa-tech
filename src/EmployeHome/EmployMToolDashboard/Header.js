import React from 'react'
import "./text.css"

function Header({ setIsAdding }) {
    return (
        <header>
            
            <div class="hero ">
  
                    <div>
                    <h1 class="text-4xl font-bold hero-content flex-col lg:flex-row"> Try Our <span className='bgtext'>Employee Data Tracking</span> App! </h1>
                    <p class="py-6"> Hexatech provide Proper management tool softower, that is required in every office and sector for success.Employee tracking is an intrusive process of collecting relevant information related to employee's performance at the workplace with the help of technology-oriented software. The employee location tracking system is a result of the harmony between hardware and software methods that can monitor every move of an employee.</p>
                    <div></div>
                    </div>
             </div>

                <div className='flex justify-around align-middle' style={{ marginTop: '20px', marginBottom: '18px' }}>
                                
                                <button  onClick={() => setIsAdding(true)} className=' btn-primary rounded-full '>Add Employee</button>
                            </div>
        </header>
    )
}

export default Header
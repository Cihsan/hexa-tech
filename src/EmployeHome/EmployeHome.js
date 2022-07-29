import React from 'react';
import EmployMToolDashboard from "./EmployMToolDashboard"
import "./EmployMToolDashboard/text.css"


const EmployeHome = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
  <div class="hero-content flex-col gap-x-8 lg:flex-row">
    <img src="https://i.ibb.co/8YjsKFS/Employee-Management-Meaning-Importance-Tips-Tools-More.png" class="max-w- rounded-lg shadow-2xl" alt='pic' />
    <div>
      <h1 class="text-5xl font-bold">What is <span className='bgtext'>Employee</span> Monitoring ?</h1>
      <p class="py-6">Tracking employees is considered as one of the effective ways of improving the efficiency and productivity of the business organization. But, still after understanding the advantages of monitoring system very small portion of companies are investing in employee tracking technologies. The pros of the employee tracking system are gigantic and beyond the benefit of recording attendance of employees. Monitoring attendance of employees is just a single benefit from the large pool of benefits. </p>
      
    </div>
  </div>
</div>


      <EmployMToolDashboard></EmployMToolDashboard>
        </div>
    );
};

export default EmployeHome;
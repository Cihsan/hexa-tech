import React from 'react';
import EmployMToolDashboard from "../Projects/EmployeHome/EmployMToolDashboard"
import NewTask from './NewTask';
const AddEmployee = () => {
    return (
        <div>
           <EmployMToolDashboard></EmployMToolDashboard>
           <NewTask />
        </div>
    );
};

export default AddEmployee;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const TaskBoard = () => {
    return (
        <div class="drawer drawer-mobile bg-gray-100">
            
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-2xl font-bold text-rose-500 text-center'>Welcome To Project Management</h1>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-56 bg-slate-300 ">
                    <Link to='/task/' className='font-bold mt-20 mb-2 link-hover hover:text-cyan-400'>Overview</Link>
                    <Link to='/task/taskAdd' className='font-bold link-hover hover:text-cyan-400'>Add Task</Link>
                    <Link to='/task/employee' className='font-bold link-hover mb-2 mt-2 hover:text-cyan-400'>Employee Overview</Link>
                    <Link to='/task/addEmployee' className='font-bold link-hover hover:text-cyan-400'>Add Employee</Link>
                </ul>
            </div>
        </div>
    );
};

export default TaskBoard;
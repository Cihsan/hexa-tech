import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const TaskBoard = () => {
    return (
        <div className="drawer drawer-mobile bg-gray-100">
            
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-2xl font-bold text-rose-500 text-center'>Welcome To Project Management</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-slate-300 ">
                    <Link to='/task/' className='font-bold mt-20 mb-2 link-hover hover:text-cyan-400'>Overview</Link>
                    <Link to='/task/taskAdd' className='font-bold link-hover hover:text-cyan-400'>Add Task</Link>
                    <Link to='/task/employee' className='font-bold link-hover mb-2 mt-2 hover:text-cyan-400'>Employee Overview</Link>
                    <Link to='/task/addEmployee' className='font-bold link-hover hover:text-cyan-400'>Add Employee</Link>
                    <Link to='/task/user' className='font-bold link-hover hover:text-cyan-400'>User</Link>
                </ul>
            </div>
        </div>
    );
};

export default TaskBoard;
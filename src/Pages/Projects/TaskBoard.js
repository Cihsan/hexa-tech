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
                <label for="task" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 border border-red-200 text-base-content">

                    <div className="mt-2">
                        <ul className="space-y-2">
                            <li>
                                <Link to="/task/" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                    OverView</Link>
                            </li>
                            <li>
                                <Link to="/task/taskAdd" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                    Task Add</Link>
                            </li>
                            <li>
                                <Link to="/task/notes" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                    Notes</Link>
                            </li>
                            <li>
                                <a rel="noreferrer" href="https://incredible-zabaione-2ed5a1.netlify.app/" target="_blank" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                    Note Manage</a>
                            </li>

                            <li>
                                <Link to="/task/addEmployee" className=" items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                    Employee Manage</Link>

                            </li>
                            <li>
                                <Link to="/task/finance" className=" items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                    Finance Manage</Link>

                            </li>
                            <li>
                                <Link to="/task/time-line" className=" items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                    Task Timeline</Link>

                            </li>


                        </ul>
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default TaskBoard;
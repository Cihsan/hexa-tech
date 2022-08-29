import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminBoard = () => {
    return (
        <div>
            <div className=''>
                <div className="drawer drawer-mobile">
                    <input id="admin" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Page content here  */}

                        <div>
                            <Outlet />
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="admin" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 border border-red-200 text-base-content">

                            <div className="mt-2">
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/admin/" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            OverView</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/profile" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                            Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/user-tracking" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                            User Tracking</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/inventory-manager" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                            Inventory Manager</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/project-manager" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                            Project Manager</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/User-Review" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            User Review</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/manage-features" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            Manage Features</Link>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBoard;
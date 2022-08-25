import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div >







            <div className=''>
                <div className="drawer drawer-mobile">
                    <input id="dashboard" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Page content here  */}
                        <Outlet />
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard" className="drawer-overlay"></label>
                        <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 border border-red-200 text-base-content">
                            
                            <div className="mt-2">
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/dashboard" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                            OverView</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/purchase" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                        Purchase</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/manage-purchase" className=" items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                        Manage Purchase</Link>

                                    </li>
                                    <li>
                                        <Link to="/dashboard/add-Inventory" className=" items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                        Add Inventory</Link>

                                    </li>
                                    <li>
                                        <Link to="/dashboard/manage-Inventory" className=" items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                        Manage Inventory</Link>

                                    </li>
                                    <li>
                                        <Link to="/dashboard/sales-order" className=" items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                        Sales Order</Link>

                                    </li>
                                    <li>
                                        <Link to="/dashboard/invoice" className=" items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">

                                        Invoice</Link>

                                    </li>
                                    {/* <li tabindex="0">
                                        <Link to=''>
                                            Parent
                                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                        </Link>
                                        <ul className="p-2 bg-base-100">
                                            <li><Link to=''>Submenu 1</Link></li>
                                            <li><Link to=''>Submenu 2</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li>
                                        <Link to="/dashboard/make-admin" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            
                                            Make Admin</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/manage-all-orders" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            
                                            Manage All Orders</Link>
                                    </li>

                                    <li>
                                        <Link to="/dashboard" className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            
                                            My Orders</Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/add-review" className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            
                                            Add A Review</Link>
                                    </li>

                                    <li>
                                        <Link to="/dashboard/my-profile" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            
                                            My Profile</Link>
                                    </li> */}







                                </ul>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineRateReview } from 'react-icons/md';
const UserBoard = () => {
    return (

        <div>
            <div className="drawer drawer-mobile">
                <input id="user" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Page content here  */}

                    <div>
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="user" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 border border-red-200 text-base-content">

                        <div className="mt-2">
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/user/" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                        <AiOutlineUser />
                                        Profile</Link>
                                </li>
                                <li>
                                    <Link to="/user/setting" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                        <AiOutlineSetting />
                                        Setting</Link>
                                </li>
                                <li>
                                    <Link to="/user/add-review" className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                        <MdOutlineRateReview />
                                        Review</Link>
                                </li>

                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default UserBoard;
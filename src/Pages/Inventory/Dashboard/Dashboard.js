import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile bg-gray-100">
            
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-2xl font-bold text-rose-500 text-center'>Welcome To Here</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-slate-300 text-white">
                    <Link to='/dashboard' className='font-bold mt-20 mb-3 hover:text-cyan-400'>Add Item</Link>
                    <Link to='/dashboard/manageInventory' className='font-bold hover:text-cyan-400 mb-3'>Manage Inventory</Link>
                    <Link to='/dashboard/purchase' className='font-bold hover:text-cyan-400'>Purchase</Link>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import auth from '../firebase.init';
//import { AiOutlineMenuFold } from 'react-icons/ai';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const logOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  return (
    <div className="navbar bg-base-100 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/blogs'>Blog</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/about'>About</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/contact'>Contact</NavLink></li>
            {/* <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/survey'>Survey</NavLink></li> */}
            {/* <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/Inventory'>Inventory</NavLink></li> */}
            {/* <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/project'>Project</NavLink></li> */}
            {
              user ?
                <div className="dropdown dropdown-end">
                  <label tabindex="0" className="btn btn-outline  avatarp pt-1">
                    <div className="rounded">
                      {user.email}
                    </div>
                  </label>
                  <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-glass border-primary border rounded-box w-52">
                    <li><button className='underline' onClick={logOut}>Sign Out</button></li>
                  </ul>
                </div>
                : <li><Link to='/login'>Login</Link> <br /></li>
            }
            {!user && <li><Link to='/register'>Register</Link></li>}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Hexa-Tech</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/'>Home</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/blogs'>Blog</NavLink></li>
          {/* <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/Inventory'>Inventory</NavLink></li> */}
          {/* <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/project'>Project</NavLink></li> */}
          <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/about'>About</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/contact'>Contact</NavLink></li>

          {
            user ?
              <div className="dropdown dropdown-end">
                <label tabindex="0" className="btn btn-outline  avatarp pt-1">
                  <div className="rounded">
                    {user.displayName}
                  </div>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-glass border-primary border rounded-box w-52">
                  {admin && <li><button className='underline' onClick={() => navigate(`/admin/`)}>Admin</button></li>
                  }
                  <li><button className='underline' onClick={() => navigate(`/user/`)}>User</button></li>


                  <li><button className='underline' onClick={logOut}>LogOut</button></li>
                </ul>
              </div>
              : <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/login'>Login</NavLink> <br /></li>
          }
          {!user && <li><NavLink className={({ isActive }) => (isActive ? "active nav-link text-dark" : "link nav-link text-dark")} to='/register'>Register</NavLink></li>}
        </ul>
      </div>
     {/*  <div className="navbar-end">
        {<label tabIndex="1" htmlFor="dashboard" className="btn btn-ghost lg:hidden">
          <AiOutlineMenuFold className='text-2xl' />
        </label>}
        <label tabIndex="1" htmlFor="task" className="btn btn-ghost lg:hidden">
          <AiOutlineMenuFold className='text-2xl' />
        </label>
      </div> */}
    </div>
  )
}

export default Navbar
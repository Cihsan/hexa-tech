import React from 'react'
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../firebase.init';


const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Inventory'>Inventory</Link></li>
            <li><Link to='/project'>Project</Link></li>
            <li><Link to='/spreadsheet'>Spreadsheet</Link></li>
            <li><Link to='/allBlog'>Blog</Link></li>
            <li><Link to='/Schedulers'>Scheduler</Link></li>
            <li><Link to='/textEditor'>Texteditor</Link></li>
            <li><Link to='/Paint'>Paint</Link></li>
            <li><Link to='/workFlow'>workFLow</Link></li>
            <li><Link to='/formBuilder'>Form Builder</Link></li>
            <li><Link to='/businessCardsOne'>Business Cards</Link></li>
            <li><Link to='/qrCode'>QRCode Generate</Link></li>
            <li><Link to='/executiveTeam'>ExecutiveTeam</Link></li>
            {
              user ?
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class="btn btn-outline  avatarp pt-1">
                    <div class="rounded">
                      {user.email}
                    </div>
                  </label>
                  <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-glass border-primary border rounded-box w-52">
                    <li><button className='underline' onClick={logOut}>Sign Out</button></li>
                  </ul>
                </div>
                : <li><Link to='/login'>Login</Link> <br /></li>
            }
            {!user && <li><Link to='/register'>Register</Link></li>}
          </ul>
        </div>
        <Link to='/' class="btn btn-ghost normal-case text-xl">Hexa-Tech</Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Inventory'>Inventory</Link></li>
          <li><Link to='/project'>Project</Link></li>
          {/* <li><Link to='/live-chat'>Docs</Link></li>
          <li><Link to='/spreadsheet'>Spreadsheet</Link></li>
          <li><Link to='/allBlog'>Blog</Link></li>
          <li><Link to='/Schedulers'>Scheduler</Link></li>
          <li><Link to='/textEditor'>Texteditor</Link></li>
          <li><Link to='/Paint'>Paint</Link></li>
          <li><Link to='/formBuilder'>Form Builder</Link></li> */}
          <li><Link to='/workFlow'>workFLow</Link></li>
          {/* <li><Link to='/messanger'>Messanger</Link></li>
          <li><Link to='/businessCardsOne'>Business Cards</Link></li>
          <li><Link to='/qrCode'>QRCode Generate</Link></li> */}
          <li><Link to='/allBlog'>Blog</Link></li>
          <li><Link to='/executiveTeam'>ExecutiveTeam</Link></li>
          <li><Link to='/surveyQuizLanding'>survey & Quiz</Link></li>
          {
            user ?
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-outline  avatarp pt-1">
                  <div class="rounded">
                    {user.email}
                  </div>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-glass border-primary border rounded-box w-52">
                  <li><button className='underline' onClick={logOut}>Sign Out</button></li>
                </ul>
              </div>
              : <li><Link to='/login'>Login</Link> <br /></li>
          }
          {!user && <li><Link to='/register'>Register</Link></li>}
        </ul>
      </div>

    </div>
  )
}

export default Navbar
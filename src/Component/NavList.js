import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const NavList = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div class="dropdown lg:mb-6 mx-auto dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </label>
                <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li className='font-bold'>{user?.displayName}</li>
                    <li>
                        <a >
                            Profile
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavList
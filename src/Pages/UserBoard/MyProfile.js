// import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { BsFillPhoneFill } from 'react-icons/bs';
// import { FaGraduationCap } from 'react-icons/fa';
// import { ImLocation2 } from 'react-icons/im';
// import { MdDateRange } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [userinfo, setUserInfo] = useState([]);
    const [user] = useAuthState(auth);
    console.log(userinfo)
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://hexatech-server.herokuapp.com/profile-get?email=${user.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user, navigate])
    return (
        <div >

            <div className='flex justify-center'>
                <div className='flex items-center gap-10'>
                    <div class="">
                        <img class="rounded-lg shadow-lg antialiased" src={user.photoURL} alt='' />
                    </div>

                    <div>  <div class="">{user.displayName}</div>
                        <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"><span class="border-b border-dashed border-gray-500 pb-1">{user.email}</span></div>
                        <div class="">Last Login <b className='text-gray-300'>{user.metadata.lastSignInTime}</b></div>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-5 my-10'>
                {/* <label class="label">
                    <span class="label-text">Your Email</span>
                </label> */}
                <label class="input-group">
                    <span>Full Name</span>
                    <input type="text" placeholder="Full Name" class="input input-bordered" />
                </label>
                <label class="input-group">
                    <span>Full Address</span>
                    <input type="text" placeholder="Full Address" class="input input-bordered" />
                </label>
                <label class="input-group">
                    <span>Zip Code</span>
                    <input type="text" placeholder="Zip Code" class="input input-bordered" />
                </label>
                <label class="input-group">
                    <span>Country</span>
                    <input type="text" placeholder="Country" class="input input-bordered" />
                </label>
                <label class="input-group">
                    <span>Contact</span>
                    <input type="text" placeholder="Contact" class="input input-bordered" />
                </label>
                <label class="input-group">
                    <span>Profile</span>
                    <input type="text" placeholder="Social Media Link" class="input input-bordered" />
                </label>
            </div>

        </div >
    );
};

export default MyProfile;
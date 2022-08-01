import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useToken from '../../hooks/useToken';
import auth from '../../firebase.init';

const Register = () => {

    const [loginGoogle, userLoginGoogle, loadingLoginGoogle, errLoginGoogle] = useSignInWithGoogle(auth);
    const [newUserEmail, userNewEmail, loadingNewEmail, errorNewEmail] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const [profileUpdate, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    //return coming path
    const [token] = useToken(userLoginGoogle || userNewEmail)
    if (token) {
        navigate(from, { replace: true });
    }
    //Loading 
    let spinner;
    if (loadingLoginGoogle || loadingNewEmail) {
        spinner = <div class="flex items-center justify-center ">
            <div class="w-16 h-16 border-b-2 border-primary border-dashed rounded-full animate-spin"></div>
        </div>
    }

    //Erorr
    let errorMassage
    if (errLoginGoogle || errorNewEmail) {
        errorMassage =
            <div class="alert alert-warning shadow-lg">
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>
                        {errorNewEmail?.message}
                        {errLoginGoogle?.message}
                        {/* {updateError?.message} */}
                    </span>
                </div>
            </div>
    }
    const refName = useRef('')
    const refMail = useRef('')
    const refPass = useRef('')
    const RegisterEmailPass = async (event) => {
        const name = refName.current.value;
        const email = refMail.current.value;
        const pass = refPass.current.value;

        console.log(name, email, pass);
        newUserEmail(email, pass)
        event.preventDefault()
        event.target.reset()
    }

    return (
        <div>
            <div>
                {errorMassage}
                {spinner}
                <div class="hero min-h-screen ">
                    <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
                        <p class="text-xl text-gray-600 text-center">Welcome back!</p>
                        <button onClick={() => loginGoogle()} class=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <span class="px-4 py-3">
                                <FcGoogle />
                            </span>
                            <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                        </button>
                        <div class="mt-4 flex items-center justify-between">
                            <span class="border-b w-1/5 lg:w-1/4"></span>
                            <button class="text-xs text-center text-gray-500 uppercase">or Register Now</button>
                            <span class="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={RegisterEmailPass}>
                            <div class="mt-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                                <input ref={refName} class="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                            </div>
                            <div class="mt-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input ref={refMail} class="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                            </div>
                            {<div class="mt-4">
                                <div class="flex justify-between">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                </div>
                                <input ref={refPass} name='pass' class="bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                            </div>}
                            <div class="mt-8">
                                <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
                            </div>
                        </form>

                        <div class="mt-4 flex items-center justify-between">
                            <span class="border-b w-1/5 md:w-1/4"></span>
                            <Link to="/login" class="text-xs text-gray-500 uppercase">or Login</Link>
                            <span class="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;
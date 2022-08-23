import React, { useState } from 'react'

import users from '../../data.json'

const Modal = ({ user, editId }) => {

const [editUser, setEditUser] = useState(user);
console.log(editUser)
    const updateHandler = (e) => {
        e.preventDefault()
        const updateUser = users.map((elem) => {
            if (editId === elem.id) {
                return (
                    {
                        ...elem,
                        name: document.getElementById("editName").value,
                        email: document.getElementById("editEmail").value,
                        role: document.getElementById("editRole").value,
                        location: document.getElementById("editRole").value,

                    }

                )
            } else {
                return elem
            }
        })
        setEditUser(updateUser)
        // console.log(editUser);
    }

    const handleSubmit = (even) => {
        even.preventDefault();
        const updateing = {
            name: even.target.name.value,
            email: even.target.email.value,
            location: even.target.location.value,
            role: even.target.role.value,
        }
        console.log(updateing); 
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="card w-[95%] shadow-sm bg-base-100">
                        <div class="">
                            <form onSubmit={updateHandler} className='grid grid-cols-1 gap-1 mt-5'>
                                <div className='flex justify-center'><p className='mt-2 mr-1'>Name: </p>
                                    <input id='editName' name='name' type="text" className="mt-0 pt-0 input input-bordered w-full " /></div>
                                <div className='flex justify-center'>
                                    <p className='mt-2 mr-1'>Email:</p>
                                    <input id='editEmail' name='email' type="text" className="input input-bordered w-full " />
                                </div>
                                <div className='flex justify-center'>
                                    <p className='mr-1 mt-2'>Role:</p>
                                    <input id='editRole' name='role' type="text" className="input input-bordered w-full " />
                                </div>
                                <div className='flex justify-center'>
                                    <p className='mt-2 mr-1'>Location:</p>
                                    <input id='editLocation' name='location' type="text" className="input input-bordered w-full " />
                                </div>
                                <input type="submit" value='submit' className="btn btn-secondary w-full" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Modal
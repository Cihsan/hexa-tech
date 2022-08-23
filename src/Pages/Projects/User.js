import React from 'react'
import { useState } from 'react'
import users from '../../data.json'
import Modal from './Modal'


const User = () => {
    const [modal, setModal] = useState([]);
    const [editId, setEditId] = useState("");
    // const [orders, setOrders] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/hexauser')
    //     .then(res => res.json())
    //     .then(data => setOrders(data))
    // },[])
    // console.log(orders.length)
    // console.log(orders)

    const handleEdit=(id)=>{     
        setEditId(id)
        users.map((elem)=>{
            console.log(elem)
            if(elem.id === id)
            document.getElementById("editName").value = elem.name
            document.getElementById("editEmail").value = elem.email
            document.getElementById("editRole").value = elem.role
            document.getElementById("editLocation").value = elem.location
        })
    }

    return (
        <div>
            <div className="overflow-x-auto w-100 mx-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, index) =>
                            <tr tr >
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.imgUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>{user.location}</td>
                                <td>
                                    <button className="border-none btn btn-xs bg-white text-primary normal-case">Delete</button>
                                </td>
                                <td>
                                    <label onClick={() => handleEdit(user.id)} htmlFor="my-modal-3" className="border-none btn btn-xs bg-white text-primary normal-case">Edit</label>
                                </td>
                                {modal && <Modal user={user} editId={editId}></Modal>}
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default User
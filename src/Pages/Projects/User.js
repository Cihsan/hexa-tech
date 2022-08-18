import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import orders from '../../data.json'

const User = () => {
    // const [orders, setOrders] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/hexauser')
    //     .then(res => res.json())
    //     .then(data => setOrders(data))
    // },[])
    console.log(orders)

    return (
        <div>
            <div class="overflow-x-auto w-100 mx-auto">
                <table class="table w-full">
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

                        {orders.map((order, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img src={order.imgUrl}alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="font-bold">{order?.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{order?.email}</td>
                                <td>{order.role}</td>
                                <td>{order.status}</td>
                                <td>{order.location}</td>
                                <td>
                                    <button className="border-none btn btn-xs bg-white text-primary normal-case">Delete</button>
                                </td>
                                <td>
                                    <button className="border-none btn btn-xs bg-white text-primary normal-case">Edit</button>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User
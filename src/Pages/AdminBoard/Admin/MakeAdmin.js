import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import AdminTask from './AdminTask';
const MakeAdmin = () => {
    const [user] = useAuthState(auth);
    const { email } = user
    const [users, setusers] = useState([])
    useEffect(() => {
        const url = 'https://hexatech-server.herokuapp.com/user'
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setusers(data))
    }, [users])

    const makeAdmin = () => {
        //console.log(email);
        fetch(`https://hexatech-server.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    const makeModarator = () => {
        fetch(`https://hexatech-server.herokuapp.com/user/modarator/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <Table>

                <Thead className="bg-[#FBFAFA] h-16">
                    <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>User Role</Th>

                    </Tr>
                </Thead>
                <Tbody className="text-center">
                    {
                        users.map(user =>
                            <Tr>
                                <Td>{user?.displayName}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.role}</Td>
                                <Td>{!user.role && <button className='btn' onClick={() => makeAdmin(user._id)}>Make Admin</button>}</Td>
                                <Td><button className='btn' onClick={() => makeModarator(user._id)}>Modarator</button></Td>
                            </Tr>
                        )
                    }
                </Tbody>
            </Table>
            <AdminTask />
        </div>
    );
};

export default MakeAdmin;
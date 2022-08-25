import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
// import auth from '../../../firebase.init';
const UserManage = () => {
    // const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <Table>
                    
                    <Thead className="bg-[#FBFAFA] h-16">
                        <Tr>
                            <Th>id</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>User Role</Th>
                            
                        </Tr>
                    </Thead>
                    <Tbody className="text-center">
                        {
                           
                                <Tr>
                                    <Td>id</Td>
                                    <Td>Name</Td>
                                    <Td>Email</Td>
                                    <Td>User Role</Td>
                                    
                                    <Td><button ><AiOutlineEdit/></button></Td>
                                    <Td><button ><AiOutlineDelete/></button></Td>
                                </Tr>
                        }
                    </Tbody>
                </Table>
        </div>
    );
};

export default UserManage;
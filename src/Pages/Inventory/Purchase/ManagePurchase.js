import React, { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { toast } from 'react-toastify';
const ManagePurchase = () => {
    const [purchases, setPurchase] = useState([]);
    //const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://hexatech-server.herokuapp.com/purchase`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            const url = `https://hexatech-server.herokuapp.com/purchase/${id}`
            fetch(url, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = purchases.filter(purchase => purchase._id !== id)
                    setPurchase(remaining)
                    toast("purchase Delete Successfully")
                })
        }
    }
    return (
        <div>
            <span className='block text-2xl underline text-center'>Purchase Items</span>
            <div className=" mb-16">
                <Table>
                    
                    <Thead className="bg-[#FBFAFA] h-16">
                        <Tr>
                            <Th>Sreial No.</Th>
                            <Th>Name</Th>
                            <Th>purchaser</Th>
                            <Th>Quantity</Th>
                            <Th>Unit Price</Th>
                            <Th>Date</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody className="text-center">
                        {
                            purchases.map(purchase=>
                                <Tr>
                                    <Td>{purchase._id.slice(18,24)}</Td>
                                    <Td>{purchase.product}</Td>
                                    <Td>{purchase.purchase}</Td>
                                    <Td>{purchase.qntity}</Td>
                                    <Td>{purchase.productPrice}</Td>
                                    <Td>{purchase.pDate}</Td>
                                    <Td><button className='btn'><AiOutlineEdit/></button></Td>
                                    <Td><button className='btn'onClick={() => handleDelete(purchase._id)}><AiOutlineDelete/></button></Td>
                                </Tr>
                            )
                        }
                    </Tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManagePurchase;
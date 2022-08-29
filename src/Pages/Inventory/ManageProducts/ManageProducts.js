import React from 'react';
import useProducts from '../../../hook/useProducts';
// import { Flip } from 'react-reveal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ManageProducts.css'

const ManageProducts = () => {
    const [product, setProduct] = useProducts()
    const navigate = useNavigate()
    console.log(product);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://hexatech-server.herokuapp.com/products/${id}`
            fetch(url, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = product.filter(p => p._id !== id)
                    setProduct(remaining)
                    toast("Item Delete Successfully")
                })
        }
    }
    const handleEdit = id => {
        navigate(`/editProducts/${id}`)
    }

    return (
        <div className='mx-5 '>
            <h1 className='products-title'>
                Manage Inventory
            </h1>
            <div className='MngProducts-container'>
                {
                    product.map(p => <div>
                        <div className='MngProducts shadow-sm p-2 rounded-3 border-2'>

                            <img src={p.img} width='50%' alt="" />
                            <h2 className='text-xl font-bold'>Name : {p.name}</h2>
                            <h5><span className='font-bold'>Quantity :</span> ${p.quantity}</h5>
                            <h5><span className='font-bold'>Brand :</span> {p.brand}</h5>
                            <h5><span className='font-bold'>Manufacturer :</span> {p.manufacturer}</h5>
                            <h5><span className='font-bold'>Attributes :</span> {p.attributes}</h5>
                            {/* <Flip right cascade><p> {p.description}</p></Flip> */}
                            <div className='flex justify-between mt-2'>
                                <button className='btn bg-purple-600 hover:bg-blue-900' onClick={() => handleDelete(p._id)}>
                                    Delete Item
                                </button>
                                <button className='btn bg-purple-600 hover:bg-blue-900'
                                    onClick={() => handleEdit(p._id)}>
                                    Edit Item
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;
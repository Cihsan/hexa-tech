import React, { useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const TaskShow = () => {
    const [tasks, setTask] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://hexatech-server.herokuapp.com/taskAll`)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?')

        if (proceed) {
            const url = `https://hexatech-server.herokuapp.com/taskAll/${id}`
            fetch(url, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = tasks.filter(task => task._id !== id)
                    setTask(remaining)
                    toast("Item Delete Successfully")
                })
        }
    }

    const taskEdit = id => {
        navigate(`/editTask/${id}`)
    }
    return (
        <div className='lg:mx-5 my-16'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    tasks.map(task =>
                        <div className="card bg-base-100 text-primary-content">
                            <div className="card-body">
                                <h1 className="card-title text-primary">{task.title}</h1>
                                <div>
                                    <h2 className='text-lg text-black'>Description: <span className='font-bold'>{task.desc}</span> </h2>
                                    <h2 className='text-lg text-black'>Starting Date: <span className='font-bold'>{task.datenTime}</span></h2>
                                </div>
                            </div>
                            <div className='flex justify-around'>
                                <button className='btn' onClick={() => taskEdit(task._id)}><AiOutlineEdit /></button>
                                <button className='btn' onClick={() => handleDelete(task._id)}><AiOutlineDelete /></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default TaskShow
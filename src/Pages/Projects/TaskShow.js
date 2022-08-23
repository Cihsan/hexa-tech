import React, { useEffect, useState } from 'react'

const TaskShow = () => {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetch(`https://hexatech-server.herokuapp.com/taskDetails`)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    return (
        <div className='lg:mx-40 my-16'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                <div className="card w-96 bg-base-100 text-primary-content">
                        <h2 className="card-title text-primary">Task Information</h2>
                    <div className="card-body">
                        {
                            tasks.map(task =>
                                <div>
                                    <h1 className='text-lg text-black'><span className='font-bold'>Task Title: </span>{task.title}</h1>
                                    <h1 className='text-lg text-black'><span className='font-bold'>Task Description: </span>{task.desc} </h1>
                                    <h1 className='text-lg text-black'><span className='font-bold'>Task Starting Date: </span>{task.date}</h1>
                                    <h1 className='text-lg text-black'><span className='font-bold'>Task Strting time: </span>{task.time}</h1>
                                </div>
                            )
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TaskShow
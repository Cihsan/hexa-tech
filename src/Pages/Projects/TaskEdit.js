import React, { useEffect,  useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const TaskEdit = () => {
    const { id } = useParams()
    const [task, setTask] = useState([])
    useEffect(() => {
        fetch(`https://hexatech-server.herokuapp.com/taskAll/${id}`)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [id])

    
    const { register, handleSubmit, reset, /* formState: { errors } */ } = useForm();
    // const [user] = useAuthState(auth);
    // console.log(user)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        if ((!data.title || !data.desc || !data.datenTime )) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        console.log(data)
        const url = `https://hexatech-server.herokuapp.com/taskAll/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: `${data.title} ${data.desc} ${data.datenTime}' has been Added.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset()
                if (data) {
                    toast.success('task Update Sucessfully')
                    navigate('/task/')
                }
            })
    };
    return (
        <div>
            <div className="flex justify-center">

                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-5 mt-5'>
                            <span className='text-xs'>{task.title} </span>
                            <input   {...register("title")} type="text" className="input input-bordered w-full" placeholder='task-title' />
                            <span className='text-xs'>{task.desc} </span>
                            <input   {...register("desc")} type="text" className="input input-bordered w-full" placeholder='task-description' />
                            <span className='text-xs'>{task.datenTime} </span>
                            <input   {...register("datenTime")} type="datetime-local" className="input input-bordered w-full" placeholder='Due-date(Day-M-Year)' />
                            <input type="submit" value='Add Task' className="btn btn-secondary w-full" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskEdit;
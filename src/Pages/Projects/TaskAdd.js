import React, { useRef } from 'react'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const TaskAdd = () => {
    const reftitle = useRef('')
    const refdesc = useRef('')
    const refdatenTime = useRef('')

    const handleSubmit = (even) => {
        even.preventDefault();
        const title = reftitle.current.value;
        const desc = refdesc.current.value;
        const datenTime = refdatenTime.current.value;

        if ((!title || !desc || !datenTime )) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const product = {
            title: title,
            desc: desc,
            datenTime: datenTime,

        }

        console.log(product);
        fetch('https://hexatech-server.herokuapp.com/newTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Added!',
                    text: `${title} ${desc} ${datenTime}' has been Added.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                if (data.result) {
                    even.target.reset();
                    toast('task successfully added')
                }
                else {
                    toast('something wrong')
                }
            })

    }
    return (
        <div className='lg:mx-40'>
            <h1 className='text-3xl my-5 flex justify-center'>Task Add Section</h1>
            <div className=" bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                                <input ref={reftitle} type="text" className="input input-bordered w-full" placeholder='task-title' />
                                <input ref={refdesc} type="text" className="input input-bordered w-full" placeholder='task-description' />
                                <input ref={refdatenTime} type="datetime-local" className="input input-bordered w-full" />
                                <input type="submit" value='Add Task' className="btn btn-secondary w-full" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TaskAdd
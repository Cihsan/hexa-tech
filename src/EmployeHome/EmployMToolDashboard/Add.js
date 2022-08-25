import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import "./addAndEditForm.css"

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="place-content-center mx-auto card w-96 bg-base-100 shadow-xl  ">
            <form className='mx-auto my-10' onSubmit={handleAdd}>
                <h1 className='card-title font-bold'>Add <span className='bgtext'>Employee</span> !</h1>
                <label className='employelabel' htmlFor="firstName">Name</label>
                <input className='input input-bordered w-full max-w-xs'
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label className='employelabel' htmlFor="lastName">Job Position</label>
                <input className='input input-bordered w-full max-w-xs'
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label className='employelabel' htmlFor="email">Email</label>
                <input className='input input-bordered w-full max-w-xs'
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label className='employelabel' htmlFor="salary">Salary ($)</label>
                <input className='input input-bordered w-full max-w-xs'
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <label className='employelabel' htmlFor="date">Join Date</label>
                <input className='input input-bordered w-full max-w-xs'
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input className="btn btn-active btn-success" type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="btn btn-error"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add
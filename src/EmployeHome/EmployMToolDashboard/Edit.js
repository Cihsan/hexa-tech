import React, { useState } from 'react'
import Swal from 'sweetalert2';
import "./addAndEditForm.css"

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="place-content-center mx-auto card w-96 bg-base-100 shadow-xl  ">
            <form className='mx-auto  my-10' onSubmit={handleUpdate}>
                <h1 className='card-title font-bold'>Edit <span className='bgtext'>Employee</span> Dtails !</h1>
                <label className='employelabel' htmlFor="firstName">Name</label>
                <input className='input input-bordered w-full max-w-xs'
                    id="firstName"
                    type="text"
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
                    <input className="btn btn-active btn-success" type="submit" value="Update" />
                    <input 
                        style={{ marginLeft: '12px' }}
                        className="btn btn-error"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit
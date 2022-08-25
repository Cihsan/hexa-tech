import colorNames from 'daisyui/src/colors/colorNames';
import React from 'react'
// import "./List.css"

function List({ employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    // <div className='contain-table'>
    // <table className='striped-table'>

    return (
        <div className='   ml-10 bg-slate-500 mb-20 p-2 rounded-xl bg-'>
            <table className=' table table-zebra w-full striped-table'>
                <thead >
                    <tr >
                        <th >No.</th>
                        <th>Name</th>
                        <th>Job Position</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Join Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td >{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className=" btn btn-success rounded-full  "
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="btn btn-error rounded-full"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) :
                    
                    
                    (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )
                    
                    
                    }
                </tbody>
            </table>




            
        </div>
    )
}

export default List
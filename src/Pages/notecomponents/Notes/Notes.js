import React, { useState } from 'react'
import EditModal from '../EditModal/EditModal';

const Notes = ({ element, notes, setNotes, setEditId }) => {
    const [modal, setModal] = useState([]);
    const removedNotes = (id) => {
        const changeNotes = notes.filter((note) => note.id !== id)
        setNotes(changeNotes)
    }

    const editNotes = (id) => {
        setEditId(id)
        notes.filter((elem) => {
            if (elem.id === id) {
                document.getElementById("editTitle").value = elem.title
                document.getElementById("editDesc").value = elem.desc
            }
        })

    }
    return (
        <div>
            <div className="card-body shadow-xl border">
                <h2 className="card-title capitalize">{element?.title}</h2>
                <p className='capitalize'>{element?.desc}</p>
                <div className="card-actions justify-end">
                    <label htmlFor="my-modal-3" className="border-none btn btn-xs bg-white text-primary normal-case" onClick={() => editNotes(element.id)}>Edit</label>
                    {modal && <EditModal></EditModal>}
                    <button className="border-none btn btn-xs bg-white text-primary normal-case" onClick={() => removedNotes(element.id)}>delete</button>
                </div>
            </div>
        </div>

    )
}

export default Notes
import React, { useState } from 'react'
// import EditModal from '../EditModal/EditModal';
import Background from './Background';
import EditModal from '../Notes/EditModal'


const Notes = ({ element, notes, setNotes, setEditId }) => {
    const [modal, setModal] = useState([]);
    const [toggle, setToggle] = useState(false);
    const removedNotes = (id) => {
        const changeNotes = notes.filter((note) => note.id !== id)
        localStorage.removeItem(changeNotes)
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

    const colorDiv = (id) => {
        // notes.filter((elem)=>{
        //     if(elem.id === id){

        //     }
        // })
        setToggle(!toggle)
    }

    return (
        <div>
            <div id={element.id} className="card-body shadow-xl border">
                <h2 className="card-title capitalize">{element?.title}</h2>
                <p className='capitalize'>{element?.desc}</p>
                <div className="card-actions justify-end">
                    <label htmlFor="my-modal-3" className="border-none btn btn-xs bg-white text-primary normal-case" onClick={() => editNotes(element.id)}>Edit</label>
                    {modal && <EditModal modal={modal} setModal={()=>setModal(element)}></EditModal>}
                    <button className="border-none btn btn-xs bg-white text-primary normal-case" onClick={() => removedNotes(element.id)}>delete</button>
                    <label onClick={colorDiv} className="border-none btn btn-xs bg-white text-primary normal-case">color</label>
                </div>
            </div>
            {toggle && <Background setToggle={setToggle} toggle={toggle} notes={notes} element={element} />}
        </div>

    )
}

export default Notes
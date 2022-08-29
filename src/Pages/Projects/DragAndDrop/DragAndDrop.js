import React, { useState } from 'react';
import './DragAndDrop.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import { v4 } from "uuid";


const item = {
    id: v4(),
    name: "Employe salery"
}

const item2 = {
    id: v4(),
    name: "New Investment"
}
const item3 = {
    id: v4(),
    name: "last Month profit list"
}
const item4 = {
    id: v4(),
    name: "New project"
}
const item5 = {
    id: v4(),
    name: "Treacking outher Company product"
}
const item6 = {
    id: v4(),
    name: "Track campaigns' cost per lead"
}
const item7 = {
    id: v4(),
    name: "collect complete and accurate leads"
}
const item8 = {
    id: v4(),
    name: "Measure the impact of new campaigns"
}
const item9 = {
    id: v4(),
    name: "Customer relationship issue"
}

function DragAndDrop() {
    const [text, setText] = useState("")
    const [state, setState] = useState({
        "todo": {
            title: "Work List",
            items: [item, item2]
        },
        "in-progress": {
            title: "In Progress",
            items: [item3, item4]
        },
        "Pending": {
            title: "Pending",
            items: [item4, item5]
        },
        "done": {
            title: "Completed",
            items: [item6, item7, item8, item9]
        }
    })

    const handleDragEnd = ({ destination, source }) => {
        if (!destination) {
            return
        }

        if (destination.index === source.index && destination.droppableId === source.droppableId) {
            return
        }

        // Creating a copy of item before removing it from state
        const itemCopy = { ...state[source.droppableId].items[source.index] }

        setState(prev => {
            prev = { ...prev }
            // Remove from previous items array
            prev[source.droppableId].items.splice(source.index, 1)


            // Adding to new items array location
            prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

            return prev
        })
    }

    const addItem = () => {
        setState(prev => {
            return {
                ...prev,
                todo: {
                    title: "Work List",
                    items: [
                        {
                            id: v4(),
                            name: text
                        },
                        ...prev.todo.items
                    ]
                }
            }
        })

        setText("")
    }







    return (
        <div className=" py-10" >
            <div className='flex justify-center items-center'>
                {/* <input  type="text" value={text} onChange={(e) => setText(e.target.value)} /> */}
                <div className='felx  '>
                    <input type="text" placeholder="Type here" value={text} onChange={(e) => setText(e.target.value)} class="input input-bordered input-secondary w-full max-w-xs" />
                    <button className='btn btn-success btn-xs sm:btn-sm md:btn-md ' onClick={addItem}>Add text</button>

                </div>
            </div>




            <div className='customcard'>

                <DragDropContext onDragEnd={handleDragEnd}>
                    {_.map(state, (data, key) => {
                        return (


                            <div className=' customcard  card w-96 bg-base-100 shadow-xl gap-10'>

                                <div key={key} className={" card-body  "}>
                                    <h3 className='text-2xl font-bold'>{data.title}</h3>
                                    <Droppable droppableId={key}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                    className={"droppable-col gap-4"}
                                                >
                                                    {data.items.map((el, index) => {
                                                        return (
                                                            <Draggable key={el.id} index={index} draggableId={el.id}>
                                                                {(provided, snapshot) => {
                                                                    console.log(snapshot)
                                                                    return (
                                                                        <div
                                                                            className={`item ${snapshot.isDragging && "dragging"}`}
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                        >
                                                                            {el.name}
                                                                        </div>
                                                                    )
                                                                }}
                                                            </Draggable>
                                                        )
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            )
                                        }}
                                    </Droppable>
                                </div>


                            </div>



                        )
                    })}
                </DragDropContext>


            </div>
        </div>
    );
}

export default DragAndDrop;
import React from "react";
import { MdDelete, MdNature } from "react-icons/md";
import { Link } from "react-router-dom";

function Note({ title, content, onDelete, id }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
      <Link to={'/update'}>
      <button className="mr-7
    " onClick={() => onDelete()}>
        <MdNature size={25} />
      </button>
      </Link>
    </div>
  );
}

export default Note;

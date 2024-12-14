import React from "react";
import bin from "../assets/bin.png";
import pencil from "../assets/pencil.png";

function Note(props) {
  const handleDeleteClick = () => {
    props.onDelete(props.id);
  };

  const handleEditClick = () => {
    props.onEdit(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <hr style={{ width: "70%" }} />
      <p>{props.content}</p>
      <button className="delButton" onClick={handleDeleteClick}>
        <img src={bin} alt="" />
      </button>
      <button className="editButton" onClick={handleEditClick}>
        <img src={pencil} alt="" />
      </button>
    </div>
  );
}

export default Note;

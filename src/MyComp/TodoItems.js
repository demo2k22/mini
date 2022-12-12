import React from "react";

export default function TodoItems(props) {
  return (
    <div className="container text-left my-4">
      <div>
        {props.todo.sno})<span> {props.todo.name}</span>
      </div>
      <p>{props.todo.email}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.onDelete(props.todo);
        }}
      >
        Delete
      </button>
    </div>
  );
}

// not call Direclty
// onClick={() => {
//   props.onDelete(props.todo);
// }}
// this call directly
// onClick={props.onDelete(props.todo)

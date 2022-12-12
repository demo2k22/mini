import React from "react";
import TodoItems from "./TodoItems";

export default function Todos(props) {
  return (
    <div className="container">
      <h1>Todos List</h1>
      {props.todos.length === 0 ? (
        <div className="text-left">DAta is not there</div>
      ) : (
        props.todos.map((todos) => {
          return (
            <TodoItems todo={todos} key={todos.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
}

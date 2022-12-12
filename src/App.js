import "./App.css";
import Header from "./MyComp/Header";
import Footer from "./MyComp/Footer";
import Todos from "./MyComp/Todos";
import AddTodo from "./MyComp/AddTodo";
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("i am deleting+", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("Add Callback", title, desc);
    let sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      name: title,
      email: desc,
    };
    setTodos([...todos, myTodo]);
    console.log("my todo", myTodo);
  };
  const [todos, setTodos] = useState([
    { sno: 1, name: "Atik", email: "atik@gmail.com" },
    { sno: 2, name: "Ajmal", email: "ajmal@gmail.com" },
    { sno: 3, name: "Mohit", email: "mohit@gmail.com" },
    { sno: 4, name: "samir", email: "samir@gmail.com" },
  ]);
  // let todos = [
  //   { sno: 1, name: "Atik", email: "atik@gmail.com" },
  //   { sno: 2, name: "Ajmal", email: "ajmal@gmail.com" },
  //   { sno: 3, name: "Mohit", email: "mohit@gmail.com" },
  //   { sno: 4, name: "samir", email: "samir@gmail.com" },
  // ];

  return (
    <div className="App">
      <Header title="Atik" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import ToDoItems from "./Components/ToDoItems";
import "./App.css";

function App() {
  const initialTodoItems = [
    {
      todoName: "Buy Milk",
      todoDate: "4/10/2024",
    },
    {
      todoName: "Buy Milk",
      todoDate: "4/10/2024",
    },
  ];

  const [toDoItems, setToDoItems] = useState(initialTodoItems);
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems todoItems={toDoItems} />
    </center>
  );
}

export default App;

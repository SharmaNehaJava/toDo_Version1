import React from "react";
import AddComponent from "./AddComponent";
const ToDoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((items) => (
        <AddComponent todoName={items.todoName} todoDate={items.todoDate} />
      ))}
    </div>
  );
};
export default ToDoItems;

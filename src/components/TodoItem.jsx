import React from "react";

function TodoItem({ id, text, completed, toggleTodo, removeTodo }) {
  return (
    <>
      <li key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{text}</span>
        <span className="todo__delete" onClick={() => removeTodo(id)}>
          &times;
        </span>
      </li>
    </>
  );
}

export default TodoItem;

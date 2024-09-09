import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleSatatus } from "../slice/todoSlice";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  return (
    <>
      <li key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleSatatus(id))}
        />
        <span>{title}</span>
        <span className="todo__delete" onClick={() => dispatch(deleteTodo(id))}>
          &times;
        </span>
      </li>
    </>
  );
}

export default TodoItem;

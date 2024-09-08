import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../slice/todoSlice";

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();

  return (
    <>
      <li key={id}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodo({ id }))}
        />
        <span>{text}</span>
        <span
          className="todo__delete"
          onClick={() => dispatch(removeTodo({ id }))}
        >
          &times;
        </span>
      </li>
    </>
  );
}

export default TodoItem;

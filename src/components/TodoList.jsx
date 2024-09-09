import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <>
      <ul>
        {todos?.map((todo, idx) => (
          <TodoItem {...todo} key={idx} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;

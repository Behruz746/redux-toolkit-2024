import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            key={todo.id}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;

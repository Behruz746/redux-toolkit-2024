import React, { useState } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = (val) => {
    if (val.trim().length > 0) {
      setTodos((prev) => [
        ...prev,
        {
          id: new Date().toISOString(),
          text: val,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <>
      <div className="app">
        <div className="todo__container">
          <InputField setText={setText} addTodo={addTodo} text={text} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </div>
      </div>
    </>
  );
}

export default App;

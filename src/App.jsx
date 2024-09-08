import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./slice/todoSlice";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = (text) => {
    if (text.trim().length > 0) {
      dispatch(addTodo({ text }));
    }
    setText("");
  };

  return (
    <>
      <div className="app">
        <div className="todo__container">
          <InputField setText={setText} text={text} handleSubmit={addTask} />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;

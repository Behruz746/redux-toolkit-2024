import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "./slice/todoSlice";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todos);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const addTask = (text) => {
    if (text.trim().length > 0) {
      dispatch(addNewTodo(text));
    }
    setText("");
  };

  return (
    <>
      <div className="app">
        <div className="todo__container">
          <InputField setText={setText} text={text} handleSubmit={addTask} />
          {status === "loading" && <h2>Loading...</h2>}
          {error && <h2>An error occerd: {error}</h2>}
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;

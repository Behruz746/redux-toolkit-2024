import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  // slice nomi
  name: "todos",
  // slice ichidagi malumotlarni nomlari va default valuelarni
  initialState: {
    todos: [],
  },
  // methods
  reducers: {
    // state: malumot, action: malumotlari
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    },

    toggleTodo(state, action) {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggleTodo.completed = !toggleTodo.completed;
    },
  },
});

// actions
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
// reducer
export default todoSlice.reducer;

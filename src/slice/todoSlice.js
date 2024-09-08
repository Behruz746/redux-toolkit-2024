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
    removeTodo(state, action) {},
    toggleTodo(state, action) {},
  },
});

// actions
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
// reducer
export default todoSlice.reducer;

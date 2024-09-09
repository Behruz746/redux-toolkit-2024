import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get todo from server
export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      // if error take error)
      if (!response.ok) {
        throw new Error("server ERROR");
      }
      const data = response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete todo from server
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { mathod: "DELETE" }
      );

      // if error take error)
      if (!response.ok) {
        throw new Error("Can't delete task. Server error");
      }

      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleSatatus = createAsyncThunk(
  "todos/toggleSatatus",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.todos.find((todo) => todo.id === id);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "aplication/json",
          },
          body: JSON.stringify({
            completed: !todo.completed,
          }),
        }
      );

      // if error take error)
      if (!response.ok) {
        throw new Error("Can't toggle status. Server error");
      }

      dispatch(toggleTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const todo = {
        title: text,
        userId: 1,
        id: new Date().toISOString(),
        completed: false,
      };
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(todo),
        }
      );

      // if error take error)
      if (!response.ok) {
        throw new Error("Can't add task. Server error");
      }

      const data = await response.json();

      console.log(data);

      dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const todoSlice = createSlice({
  // slice name
  name: "todos",
  // slice ichidagi malumotlarni nomlari va default valuelarni
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  // methods
  reducers: {
    // state: malumot, action: malumotlari
    addTodo(state, action) {
      state.todos.push(action.payload);
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

  // for createAsyncThunk
  extraReducers: (builder) => {
    // loading
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    // resolved
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    });
    // rejectedes
    builder.addCase(fetchTodos.rejected, (state, action) => {
      setError(state, action);
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      setError(state, action);
    });
    builder.addCase(toggleSatatus.rejected, (state, action) => {
      setError(state, action);
    });
  },
});

// actions
const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
// reducer
export default todoSlice.reducer;

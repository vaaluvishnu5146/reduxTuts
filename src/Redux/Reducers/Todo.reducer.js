import { createSlice } from "@reduxjs/toolkit";

export const todoReducer = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    saveTodo: (state, action) => {
      console.log(state, action);
      state.todos.push(...action.payload);
    },
  },
});

export const { saveTodo } = todoReducer.actions;
export default todoReducer.reducer;

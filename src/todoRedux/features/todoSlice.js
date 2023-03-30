import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    inputValue: "",
    tasks: [],
    editing: false,
  },
  reducers: {
    handleChange: (state, action) => {
      state.inputValue = action.payload;
    },
    handleFormSubmit: (state) => {
      state.tasks = [...state.tasks, state.inputValue];
    },
    handleTaskEdit: () => {},
    handleTaskDelete: (state, action) => {
        state.tasks = state.tasks.filter((task, key) => {
          return key !== action.payload})
    },
  },
});

export const {
  handleChange,
  handleFormSubmit,
  handleTaskEdit,
  handleTaskDelete,
} = todoSlice.actions;
export default todoSlice.reducer;

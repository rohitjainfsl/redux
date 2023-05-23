import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    input: "",
    tasks: [],
    editing: false,
  },
  reducers: {
    setInput: function (state, action) {
      state.input = action.payload;
    },
    setTasks: function (state, action) {
      if (state.editing === false) state.tasks = [...state.tasks, state.input];
      else {
        state.tasks = state.tasks.map((task, index) => {
          return index === state.editing ? state.input : task;
        });
        state.editing = false;
      }
      state.input = "";
    },
    deleteTask: function (state, action) {
      state.tasks = state.tasks.filter((task, index) => {
        return index !== action.payload;
      });
    },
    editTask: function (state, action) {
      state.editing = action.payload;
      state.input = state.tasks[action.payload];
    },
  },
});
export const { setInput, setTasks, deleteTask, editTask } =
  todoSlice.actions;

export default todoSlice.reducer;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, handleFormSubmit, handleTaskDelete } from "./features/todoSlice";

function Todo() {
  const dispatch = useDispatch();

  const init = useSelector((state) => {
    return state.todo;
  });

  //   function change(e){
  //     dispatch(handleChange(e.target.value))
  //   }

  function submission(e) {
    e.preventDefault();
    dispatch(handleFormSubmit());
  }

  function handleDelete(e, index){
    e.preventDefault()
    dispatch(handleTaskDelete(index))
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={submission}>
        {/* <input
          type="text"
          placeholder="Enter task"
          value={init.inputValue}
          onChange={change}
        ></input> */}

        <input
          type="text"
          placeholder="Enter task"
          value={init.inputValue}
          onChange={(e) => dispatch(handleChange(e.target.value))}
        ></input>

        <button type="submit">Add Task</button>
      </form>
      <ul>
        {init.tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <a href="">Edit</a>
              <a href="" onClick={(e) => handleDelete(e, index)}>Delete</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;

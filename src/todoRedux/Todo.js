/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput, setTasks, deleteTask, editTask } from "./slices/todoSlice";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Home() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.todo;
  });

  function handleSubmit(e){
    e.preventDefault()
    dispatch(setTasks())
  }

  function handleDelete(e,index){
    e.preventDefault()
    dispatch(deleteTask(index))
  }

  function handleEdit(e,index){
    e.preventDefault()
    dispatch(editTask(index))
  }

  return (
    <div id="todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={init.input}
          onChange={(e) => dispatch(setInput(e.target.value))}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {
            init.tasks.map((task, index) => {
                return <li key={index}>
                    {task}
                    <a href="" onClick={(e) => handleDelete(e, index)}><DeleteIcon /></a>
                    <a href="" onClick={(e) => handleEdit(e, index)}><EditIcon /></a>
                </li>
            })
        }
      </ul>
    </div>
  );
}

export default Home;

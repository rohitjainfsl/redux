import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counterSlice";

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector((state) => {return state.counter.count})
  return (
    <>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default Counter;

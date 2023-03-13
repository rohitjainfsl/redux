import React from "react";
import { decrement, increment } from "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {return state.counter.count })

  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;

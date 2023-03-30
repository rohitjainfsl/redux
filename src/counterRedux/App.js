import React from "react";
import store from "./store/store";
import Counter from "./Counter";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

import React from 'react'
import store from '../todoRedux/store/store'
import { Provider } from 'react-redux'
import Main from './Main'

function App() {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
    
  )
}

export default App
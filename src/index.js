import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// https://github.com/rakibtg/React-Native-Redux-Example
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
  <App />
</Provider>, document.getElementById('root'));
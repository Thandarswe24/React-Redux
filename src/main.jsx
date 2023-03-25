import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { configureStore } from './store/store'

const store = configureStore().store;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

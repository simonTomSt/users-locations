import React from 'react'
import App from 'App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'shared/store'
import reportWebVitals from './reportWebVitals'
import './shared/styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()

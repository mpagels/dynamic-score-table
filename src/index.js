import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Test from './components/Test'
import GlobalStyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    {/* <Test /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

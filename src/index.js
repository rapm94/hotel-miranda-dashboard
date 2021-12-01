import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app/App'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/styles/themes'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

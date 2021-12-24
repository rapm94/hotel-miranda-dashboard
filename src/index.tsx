import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app/App'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/styles/themes'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router basename="/proyecto-miranda-dashboard">
          <App />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

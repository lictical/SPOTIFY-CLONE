import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './redux/store.js'
import './index.css'
/*  
General Structure of a react app. This app is set for development, for production .StrictMode has to be taken away.
the Provider store tag is use to create global variables using react redux toolkit whose logic can be found in the redux folder> store.js file
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= {Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

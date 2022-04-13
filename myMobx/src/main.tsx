import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'mobx-react'
import stores from './mbox/stores'
import DaysStore from "./mbox/stores/daysStore";

const daysStore=new DaysStore()
ReactDOM.render(
  <React.StrictMode>
  <Provider {...stores}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

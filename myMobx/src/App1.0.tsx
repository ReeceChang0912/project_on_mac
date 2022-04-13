import logo from './logo.svg'
import './App.css'
import {observer,useLocalStore} from 'mobx-react'
import {observable,autorun, action, configure} from 'mobx'



function App() {
  // const [count, setCount] = useState(0)
  const store=useLocalStore(()=>(
    {
      daysOffHome:51
    }
  ))

  const missMore=action(()=>{
    store.daysOffHome+=1
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ChangRui has been out of home for {store.daysOffHome}</p>
        <button onClick={missMore}>醒来又是一天</button>
      </header>
    </div>
  )
}

export default observer(App) 

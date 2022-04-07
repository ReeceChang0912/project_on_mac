import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Friends } from './components/Friends'
import Beloved from './components/Beloved'
import Myself from './components/Myself'
import { Provider } from 'react-redux'
 import store from './redux/react-redux/store'

function App() {
  const [count, setCount] = useState(0)
  let getCounts=(e:number)=>{
    setCount(e)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ChangRui supervise wjq</p>
        {/* <Friends name='wjq' addCount={getCounts} count={count}></Friends> */}
        <p>chang rui supervise himself</p>

        <Beloved></Beloved>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            times: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App

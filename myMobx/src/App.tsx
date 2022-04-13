// import logo from './logo.svg'
// import './App.css'
// import {observer,inject,useLocalStore} from 'mobx-react'
// import {observable,autorun, action, configure} from 'mobx'
// import daysModel from './mbox/models/daysModel '

// interface IAppProps {
//   daysStore?: daysModel  //  这里比较关键 ？表示可或缺，如果没有就会报错。

// }

//  function App(props:IAppProps) {
//   // const [count, setCount] = useState(0)
//   const wakeUp=()=>{
//       const {wakeUp} =props.daysStore!
//       wakeUp()
//   }
//   const days=props.daysStore?.days!
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>ChangRui has been out of home for {days}</p>
//         <button onClick={wakeUp}>醒来又是一天</button>
//       </header>
//     </div>
//   )
// }

// export default observer(App) 


// 使用Store 
// App.tsx  在src/App.tsx中 使用store， 代码如下：
import * as React from 'react'
import './App.css'
 
import { inject, observer } from 'mobx-react'
import daysModel from './mbox/models/daysModel '
 
interface IAppProps {
  daysStore?: daysModel  //  这里比较关键 ？表示可或缺，如果没有就会报错。
}
 
@inject('daysStore')
@observer
class App extends React.Component<IAppProps, {}> {
 
  public render() {
    const days = this.props.daysStore?.days!;
    
    return (
      <div className="App">
        <header className="App-header">
            {days}
          <button onClick={this.clickHandler}>Change Greeting</button>
        </header>
        
      </div>
    );
  }
 
  private clickHandler = (): void =>{
    const wakeUp = this.props.daysStore?.wakeUp!;
    wakeUp()
  }
}
 
export default App
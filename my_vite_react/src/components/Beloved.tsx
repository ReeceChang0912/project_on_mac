import { Component } from "react";
import { connect } from 'react-redux'
 import { Dispatch } from 'redux'
 import { rootState } from '../redux/react-redux/store/index'
 import  {ActionType,loveyou} from '../redux/react-redux/store/reducer/myself'
interface AboutYou{
    name:string,
    thinkofyou:number
}

interface propsType{
    thinkOfYouSoMuch?():void
    number?:number
}

 class Beloved extends Component <propsType,AboutYou>{
    baby:AboutYou={name:'hjy',thinkofyou:3650}

    iloveyou=()=>{
        this.props.thinkOfYouSoMuch&&this.props.thinkOfYouSoMuch()
        console.log(this.props)
    }
  
    render(){
        return(
            <div>Today i met a girl who looks like hjy
                <p>name:{this.baby.name}</p>
                <p>how many days i have been missing you :{this.props.number}</p>
                <button onClick={this.iloveyou}>爱你一万年</button>
            </div>
            
        )
    }
}
const mapStateToProps=(state:rootState)=>{
    return {...state.loveyou_Reducer}
}
const mapDispatchToProps=(dispatch:Dispatch)=>{
    return {
        thinkOfYouSoMuch:()=>{
            console.log('---')
            dispatch({
                type:ActionType.SEELIKEYOU
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Beloved)


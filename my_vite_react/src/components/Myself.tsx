import store,{ActionType,init_DouDou} from "../redux/redux1.0";
import {useState} from 'react'
interface numberType{
    number:number
}

export default function Myself (){
    const[doudou,setDouDou]=useState(2) //因为使用的是redux  所以这里不需要使用hooks了
    store.subscribe(()=>{
        
        setDouDou(()=>{
            const newDouDou=store.getState().number
            return newDouDou
        } )
        console.log(doudou)
    })
    return (
        <div>
        <p>ChangRui's lifestyle and his doudou</p>
        <p>
            <span>number of doudous</span>
            {doudou}
        </p>
        <button type="button" onClick={()=>{store.dispatch({type:ActionType.EATSPICY,payload:null})}} >吃辣椒</button>
        <button type="button" onClick={()=>{store.dispatch({type:ActionType.STAYUPLATE,payload:null})}} >熬夜</button>
        <button type="button" onClick={()=>{store.dispatch({type:ActionType.SWIM,payload:null})}} >游泳</button>
        <button type="button" onClick={()=>{store.dispatch({type:ActionType.SEEHER,payload:null})}} >看见她</button>
        </div>
    )
}
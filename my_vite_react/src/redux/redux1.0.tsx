import { createStore } from "redux";

export enum ActionType {
    EATSPICY,
    STAYUPLATE,
    SWIM,
    SEEHER
}
interface douDou{
    number:number
}
export const init_DouDou:douDou={
    number:2
}

 function douDou_Reducer (state:douDou=init_DouDou,action: { type: ActionType, payload: any }){
    switch(action.type){
        case ActionType.EATSPICY :
            console.log(state.number)
            return {number:state.number+1}
        case ActionType.STAYUPLATE :
            return {number:state.number+1}
        case ActionType.SWIM :
            return {number:state.number-2}
        case ActionType.SEEHER :
            return {number:state.number+1}
        default:
            return state
    }
 }

 let store = createStore(douDou_Reducer)

 export default store

 

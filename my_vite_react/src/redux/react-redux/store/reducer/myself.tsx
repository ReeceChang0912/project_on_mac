
export enum ActionType {
    WATCHPHOTO,
    READING,
    WALK,
    SEELIKEYOU
}
export interface loveyou{
    number:number
}
export const init_DouDou:loveyou={
    number:2
}

 const loveyou_Reducer =(state:loveyou=init_DouDou,action: { type: ActionType, payload: any })=>{
    switch(action.type){
        case ActionType.WATCHPHOTO :
            console.log(state.number)
            return {number:state.number+1}
        case ActionType.READING :
            return {number:state.number+1}
        case ActionType.WALK :
            return {number:state.number-2}
        case ActionType.SEELIKEYOU :
            return {number:state.number+1}
        default:
            return state
    }
 }


 export default loveyou_Reducer

 

import {observable,autorun, action, configure} from 'mobx'
import {useLocalStore} from 'mobx-react'

configure({
    enforceActions: "always"
  })
//
//这个也失败了 在组件点击按钮 页面的数据没有更新 但是下面的console.log 确实改变了 ？ 
//谁能告诉我为什么？ 感觉像是  @observable public daysOffHome没生效
//   export interface IMobxStore {
//     daysOffHome:  number;
//     missMore():void;
// }

//   export default class store implements IMobxStore{
//       @observable public daysOffHome:number=51

//       @action.bound
//       public missMore=():void=>{
//         console.log('----')
//         this.daysOffHome+=1
//         console.log(this.daysOffHome)
//      }
//   }
  

//直接导入失败了
// export const store=useLocalStore(()=>(
//   {
//     daysOffHome:51
//   }
// ))

// export const missMore=action(()=>{
//   store.daysOffHome+=1
// })


 import { Component }from "react";
 
 interface Detail{
     job:string,
     count:number,
     name:string,
     addCount:Function
 } 
 interface State{
     on:string,
     weight:number,
     instantFat:fat[]
 }
 interface fat{
     weight:number
 }

 export class Friends extends Component<Detail,State> {
        state: State={on:'linux',weight:90,instantFat:[]}
        data:fat[]=[]
        static defaultProps={
            job:'BE',
            height:175,
            name:''
        }
        lazy=()=>{
            this.setState({on:'lazy'})
            setTimeout(() => {
                this.setState((preState)=>{
                   return {weight:preState.weight+1}
                },()=>{
                    console.log(this.state.weight)
                    this.data.push({weight:this.state.weight})// can not get instant changed value
                    console.log(this.data)
                })
            }, 2000);
            this.props.addCount(this.props.count+1)        

        }
        run=()=>{
            // setTimeout(()=>{
                this.setState({on:'running',weight:this.state.weight-5,instantFat:[...this.state.instantFat,{weight:this.state.weight}]},()=>{
                    this.setState({instantFat:[...this.state.instantFat,{weight:this.state.weight}]})// can get the instant value
                    console.log(this.state)
        })    
            // },2000)
            this.props.addCount(this.props.count+1)    
            //this.setState({instantFat:[...this.state.instantFat,{weight:this.state.weight}]}) // can  not 
            console.log(this.state)

        }
        
        render(){
            return <div>
                <p>{this.props.name} is a programmer who want to lose weight</p>
                <p>{this.props.name}的体重： {this.state.weight}</p>
                <p>{this.props.name}的状态： {this.state.on} </p>
                <button type="button" onClick={this.run}>run 5km</button>
                <button type="button" onClick={this.lazy}>开始偷懒了</button>
                <p>wjq's weight list </p>
                <ul>
                {this.data.map((item,index) => (
                    <li key={index}>{item.weight}</li>
                ))}
                <p>---------</p>
                {this.state.instantFat.map((item,index) => (
                    <li key={index}>{item.weight}</li>
                ))}
                </ul>
            </div>
        }
 }
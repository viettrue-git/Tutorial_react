import React,{Component,useContext} from "react";
// create context 
const CounterContext=React.createContext();
const Count=()=>{
  const counter=useContext(CounterContext);
  return(
    <div>
      <code>Value:{counter.count}</code>
      <button onClick={()=>{counter.countUp()}}>countUp</button>
      <button onClick={()=>{counter.countDown()}}>countUp</button>
    </div>
  );
}
export default class DemoContext extends Component{
  constructor(props){
    super(props);
    this.state={
      count:1
    }
  };
  countUp(){
    this.setState({
      count:this.state.count+1
    })
  }
  countDown(){
    this.setState({
      count:this.state.count-1
    })
  }
  render(){
    return(
      <CounterContext.Provider
      value={{
        count:this.state.count,
        countUp:this.countUp.bind(this),
        countDown:this.countDown.bind(this)
      }}>
        <Count/>
      </CounterContext.Provider>

    )
  }
}
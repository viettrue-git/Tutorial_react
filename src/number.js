import React  from "react";
class NumberList extends React.Component{
    constructor(props){
        super(props);
        this.state={index:1};
    }
    countdown(){
        this.setState({index:this.state.index-1});
    }
    countup(){
        this.setState((prestate)=>{return {index:prestate.index-1}})
        //this.setState({index:this.state.index+1});
    }
    ramdum(){
        return (
            <div>
               <p> Value: {Math.random()} </p>
               <hr></hr>
               <button onClick={()=>this.forceUpdate()}>Ramdom</button> 
            </div>
            // forceUpdate la method re-render lai component ma khi khong co su thay doi ve state no van re-render
        );
    }
    render(){
        return(
        <div>
            <h1>{this.state.index}</h1>
            <hr></hr>
            <button onClick={()=>this.countdown()}>down</button>
            <button onClick={()=>this.countup()}>up</button>
            <this.ramdum></this.ramdum>
        </div>
    )}
}
    export default NumberList;
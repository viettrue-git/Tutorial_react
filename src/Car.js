 import React,{useState} from "react"
 class Car extends React.Component{
    constructor(){
        super() // khi ke thua thi bat buoc phai co super co the co props hoac khong
        this.state={
            brand:"BMW",
            color:"Red",
            quantity:10
        };
    }
    changeColor=()=>{
        var color=this.state.color;
        if(color=="Red")
        this.setState({color:"Green"});
        else
        this.setState({color:"Red"})
    }
    componentDidMount(){
        setTimeout(() => {
           // this.setState({color:"Blue"})
        }, 100);
    }
    shouldComponentUpdate(){
        return true;
    }
    render(){
        return(
            <div>
                <h1>This is my car! It is {this.state.color} of {this.state.brand}</h1>
                <button type="button" onClick={this.changeColor}>changecolor</button>
            </div>
        );
    }
 }

 export default Car;
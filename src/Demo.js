import React,{Component}  from "react";
const VNDtoUSD=function(props){
    // chuyen doi tu  vnd to usd
    const convert=function(vnd){
        return vnd/23000;
    };
    // lay gia tri va          
    return(
        <div>
            <span>VND</span>
            <input type="number" min="0" onChange={(e=>{
                const vnd=e.target.value; // lay ra gia tri value
                const usd=convert(vnd); // truyen value da lay de chuyen doi
                props.handleChange({vnd,usd}); // truyen gia tri setState lai
            })} value={props.value}/>
        </div>
    )
}
const USDtoVND=function(props){
    const convert=function(usd){
        return usd*23000;
    }
    return (
        <div>
            <span>USD</span>
            <input type="number" min="0" onChange={(e=>{
                const usd=e.target.value;
                const vnd=convert(usd);
                props.handleChange({vnd,usd});
            })} value={props.value}/>
        </div>
    )
}

export default class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            usd:0,
            vnd:0
        }
    };
    setData=(data)=>{
        this.setState(data);
    };
    render(){
        return(
            <div>
                <VNDtoUSD handleChange={this.setData} value={this.state.vnd}></VNDtoUSD>
                <USDtoVND handleChange={this.setData} value={this.state.usd}></USDtoVND>
            </div>
        );
    }
}
import React  from "react";
//state va props 
//state chi ton tai trong component chua no, con props thi co the chuyen qua lai giua cac component khac nhau
// state dc dung de phan hoi cac thong tin cua khach hang hoac chua du lieu cua component
// state va props deu la hay doi duong chua giu lieu cua cpn vay nen khi state thay doi thi cnp se dc cap nhat
// props la doi tuong truyen du lieu tu cpn cha qua cpn con
// de khac phuc viec truyen du lieu tu cac component ma khong quan tam toi level thi nguoi ta dung context
// const Person=(props)=>{
//     console.log(props);
//     return (
//         <div>
//             <h1>{props.children}</h1>
//             <ul>
//             <li>{props.name}</li>
//             <li>{props.age}</li>
//             <li>{props.address}</li>
//             </ul>
//         </div>
//     );
// }

class Person extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"david",
            age:20,
            address:"ASU",
        };
    }
    getList(state){
        const result=state.map((item)=>{<li>{item.name}</li>});
        return( 
            <div>
                <ul>{result}</ul>
            </div>
        );
    }
    shouldComponentUpdate(){
        console.log("now should update");
        return true;
    }
    componentWillUpdate(nextState,nextProps){
        console.log("now component will update");
    }
    componentDidMount(){
        console.log("render success");
    }
    componentWillUnmount(){
        console.log("un mount");
    }
    render(){
        return(
            <div>Component lifecycle
            </div>
        );
    }


    
}
export default Person;

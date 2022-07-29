import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Car from './Car.js';
import NumberList from './number.js';
import Person from './Person';
import Demo from './Demo';
import DemoContext from './DemoContext';
import FagmentDemo from './FagmentDemo';
import Caculator from './Caculator';
import Clock from './Clock';
const root = ReactDOM.createRoot(document.getElementById('root'));
const myFirstElement=<h1>My first Element</h1>
// class Car {
//   constructor(name){
//     this.brand=name;
//   }
//   show(){
//     return "Now, i have two cars of brand is "+this.brand;
//   }
// }
// class Model extends Car{
//   constructor(name,quantiy){
//     super(name);
//     this.quantiy=quantiy;
//   }
//   Infor(){
//     return this.show()+" ,i want buy "+this.quantiy;
//   }
// }
// const myCar=new Car("BMW");
// const model=new Model("Mes","10");
function Example(){
  const[count,setcount]=useState(0);
    return (
      <div>
          <p>You clicked {count}</p>
          <button onClick={()=>setcount(count+1)}>click</button>
      </div>
  );
}
const res=()=>{
  return(
    <div>
      <h1>name</h1>
      <h1>age</h1>
      <h1>adrress</h1>
    </div>
  );
}
// function NumberList(props){
//   const numbers=props.numbers;
//   const list=numbers.map((number)=><li>{number}</li>);
//   return <ul>{list}</ul>
// }
// function Clock(props){
//   return (
//     <div>
//       <h1>It is {props.date.toLocaleTimeString()}</h1>
//     </div>
//   );
// }
// class Clock extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={date:new Date()}; // khong tuy y gan state, noi duy nhat duoc phep gan state la ham tao
//   }
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({// khi goi lai setState thi dong thoi se render lai
//       date: new Date()
//     });
//   }
//   render(){
//     return (
//       <div>
//         <h1>It is {this.state.date.toLocaleTimeString()}</h1>
//       </div>
//     );
//   }
// }

const str="demogit";
const numbers=[1,2,3,4,5];
root.render(
  //<App/>
  //<Demo/>
  //<FagmentDemo/>
  //<Caculator/>
  //<DemoContext/>
  <Clock/>
  
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

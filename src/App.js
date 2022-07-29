// import logo from './logo.svg';
// import './App.css';
// import Person from './Person.js'

// function ListNumber(props){
//   const numbers=props.numbers;
//   console.log(numbers);
//   const list=numbers.map((number)=><li>{number*2}</li>);
//   return <ul>{list}</ul>
// }
// function Blog(props){
//   const sliderbar=(
//   <ul>
//   {props.posts.map((post)=><li key={post.id}>{post.content}</li>)}
//   </ul>);
//   const titelbar =props.posts.map((post)=>
//     <div>
//     <h1 key={post.id}>{post.titel}</h1>
//     <p>{post.content}</p>
//     </div>
//     );
//     return (
//       <div>
//         {titelbar}
//         <hr></hr>
//         {sliderbar}
//       </div>
//     );
// }
// function App(props) {
//   const numbers=[1,2,3,4,5];
//   const posts=[
//     {titel:"new page",content:"a new page"},
//     {titel:"older page",content:"a older page"}
//   ];
//   return (
//     <div>
//     <Person name="david" age="18" address="usa">i am person</Person>
//     <Person name="ana" age="18" address="usuk">i am person</Person>
//     <ListNumber numbers={numbers}/>
//     <Blog posts={posts}/>
//     </div>
//   );
// }

// export default App;
import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
// //Khởi tạo inital state
//   this.state = {
//   textareaChange: "",
//   buttonClick : "",
//   mouseOver: ""
//   };
//   //bind this cho function mouseOver để  tránh gặp lỗi 
//   //không tồn tại biến this.
//   this.mouseOver = this.mouseOver.bind(this)
// }
//  changeText(e) {
//   this.setState({
//   textareaChange: e.target.value
//   });
//   }
//   mouseOver() {
//   this.setState({
//   mouseOver: this.state.mouseOver + "mouseOver..."
//   });
// }
//   render() {
//     return (
//       <div style={{marginTop: "5%"}}>
//         <button
//           onClick={() => {
//             this.setState({
//               buttonClick: this.state.buttonClick + "onClick..."
//             });
//           }}
//         >
//           Click me...
//         </button>{" "}
//        
//         <p>
//           button: <code>{this.state.buttonClick}</code>
//         </p>
//         <hr />
//         <textarea onChange={e => this.changeText(e)} placeholder="nhập cái gì đó..."></textarea>
//         <p>
//           textarea: <code>{this.state.textareaChange}</code>
//         </p>
//         <hr />
//         <h6 onMouseOver={this.mouseOver}>Di chuột vào đêyyyy nè :v</h6>
//         <p>
//           mouseOver: <code>{this.state.mouseOver}</code>
//         </p>
//       </div>
//     );
//   }
// }
//  
class App extends  React.Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
    }
    this.myRef=React.createRef();
  }
  changeText(e){
    this.setState({
      [e.target.name]:e.target.value // set state tuong ung voi name element
    });
  }
  validationForm(){
    let returnData={
      error:false,
      msg:""
    }
    const re=/\S+@\S+.\S+/;
    const{email,password}=this.state;
    if(!re.test(email))
    {
      returnData={
        error:true,
        msg:"email not validate"
      }
    }
    // check password
    if(password.length<8){
      returnData={
         error:true,
         msg:"password not validate"
      };
      //document.getElementById('pass').focus();
    }
    return returnData;
  }
  submitForm(e){
    e.preventDefault();
    const check=this.validationForm();
    if(check.error){
      alert(check.msg);
    }
    else{
      alert("submit form login success");
      // this.myRef.current.focus();
      // return (
      //   <div>
      //     <input type="text" ref={this.myRef}></input>
      //   </div>
      // )
      return (
        <React.Fragment>
        <h1>element h1</h1>
        <p></p>
        </React.Fragment>  
      )
    }
  }
   render(){
    return(
      <div className="container">
       <form onSubmit={e=>this.submitForm(e)}>
        <div className="form-group">
          <label htmlFor="text">Email:</label>
          <input onChange={e=>this.changeText(e)} type="text"  required name="email"  className="form-control" placeholder="Enter email..." ></input>
        </div>
        <div className="form-group">
          <label htmlFor="text">Password:</label>
          <input id="pass" onChange={e=>this.changeText(e)}  type="password" required name="password"  className="form-control" placeholder="Enter password..."></input>
        </div>
        <div>
          <button type="submit" className="btn-primary">Login</button>
        </div>
       </form>
      </div>
    )
   }
}
// trong react cung su dung cac list bt cac list nay can duoc khai bao mot cap key-value cac key can khac nhau va tranh la cac gia tri index
export default App;

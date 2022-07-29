import React, { Component } from 'react';
import './Caculator.css';
 
class Caculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "0", // ket qua hoac phan show hien tai
      equation: "" // chuoi chua phep tinh hien tai
    }
    this.numInput = this.numInput.bind(this); // kiem tra chuoi hien tai voi dau vao la cac so
    this.operInput = this.operInput.bind(this); // kiem tra va thu hien phep toan
    this.decInput = this.decInput.bind(this); // kiem tra va thuc hien them so thap phan
    this.clearInput = this.clearInput.bind(this); // xoa
    this.calculate = this.calculate.bind(this); // dau bang
  }
  numInput(e){
    if(this.state.equation.match(/[0-9\.]$/) && !this.state.equation.includes("=")){
      if(this.state.equation.match(/[+\-*\/]/) == null){
        let val = this.state.equation + e.currentTarget.value;
        this.setState({
          display: val,
          equation: val
        });
      } else { 
        // neu gia tri dau vao la dau 5+5
        this.setState({
          display: this.state.display + e.currentTarget.value,
          equation: this.state.equation + e.currentTarget.value,
        });
      }
    } else if(this.state.equation.match(/[+\-*\/]$/)){ // khi ma phep co dau truoc dau vao thi display=numinput
      let val = this.state.equation + e.currentTarget.value;
      this.setState({
        display: e.currentTarget.value,
        equation: val
      });
    } else if(this.state.display === "0" && e.currentTarget.value !== "0" || this.state.equation.includes("=")) {
        // khi chuoi chua co gia tri
      this.setState({
        display: e.currentTarget.value,
        equation: e.currentTarget.value
      });
    }
  }
  operInput(e){
    if(this.state.equation.includes("=")){
      let val = this.state.display;
      val += e.currentTarget.value;
      this.setState({
        equation: val
      });
    } else {
      if(this.state.equation != "" && this.state.equation.match(/[*\-\/+]$/) == null){
        // chua dc tinh trc do va chi so vd 43..+->43+
        let val = this.state.equation;
        val += e.currentTarget.value;
        this.setState({
          equation: val
        });
      } else if(this.state.equation.match(/[*\-\/+]$/) != null){
        // truong hop gia tri cuoi la dau vd 4+5+__thi thay the phep tinh gan nhat
        let val = this.state.equation;
        val = val.substring(0, (val.length-1)); // bot di gia tri cuoi
        val += e.currentTarget.value; // thay vao gia tri dau hien tai
        this.setState({
          equation: val
        });
      }
    }
  }
 
  decInput(e){
    if(this.state.equation == "" || this.state.equation.includes("=")){
        // phep  toan rong hoac trong do co dau = thi set lai ve 0.
      let val = '0.';
      this.setState({ 
        display: val,
        equation: val
      });
    } else if(this.state.equation.match(/[+\-*\/]$/)){
        // 5+ ma chon . thi coi nhu cong them 0.
      let val = '0.';
      this.setState({
        display: val,
        equation: this.state.equation + val
      });
    } else if(!this.state.display.includes(".")){
        // chua co dau cham thi add them . else da co thi khong lam gi
      this.setState({
        display: this.state.display + e.currentTarget.value,
        equation: this.state.equation + e.currentTarget.value
      });
    }
  }
 
  clearInput(){
    this.setState({
      display: "0",
      equation: ""
    });
  }
  calculate(){
    if(this.state.equation.includes("=")){ 
        // chon = sau khi ket thuc phep tinh thi gan lai dis = kq
      let val = `${this.state.display} = ${this.state.display}`;
      this.setState({
        equation: val
      });
    } else if(this.state.equation != "" && this.state.equation.match(/[+\-*\/]/) != null && this.state.equation.match(/[+\-*\/]$/) == null) {
        // truong hop pt khac rong va khog ket thuc bang chia
      let result = Number.isInteger(eval(this.state.equation)) ? eval(this.state.equation) : parseFloat(eval(this.state.equation).toFixed(5));
      let val = this.state.equation;
      val += ` = ${result}`;
      this.setState({
        display: result, 
        equation: val 
      });
    }
  }
  render() {
    return (
      <div className="container">
        <Display equation={this.state.equation} display={this.state.display} />
        <Button id="clear" value="clear" display="AC" class="row-3 col-1" click={this.clearInput} />
        <Button id="sign" value="+/-" display="±" class="row-3 col-2" />
        <Button id="percent" value="%" display="%" class="row-3 col-3" />
        <Button id="divide" value="/" display="÷" class="oper row-3 col-4" click={this.operInput} />
        <Button id="seven" value="7" display="7" class="num row-4 col-1" click={this.numInput} />
        <Button id="eight" value="8" display="8" class="num row-4 col-2" click={this.numInput} />
        <Button id="nine" value="9" display="9" class="num row-4 col-3" click={this.numInput} />
        <Button id="multiply" value="*" display="×" class="oper row-4 col-4" click={this.operInput} />
        <Button id="four" value="4" display="4" class="num row-5 col-1" click={this.numInput} />
        <Button id="five" value="5" display="5" class="num row-5 col-2" click={this.numInput} />
        <Button id="six" value="6" display="6" class="num row-5 col-3" click={this.numInput} />
        <Button id="subtract" value="-" display="−" class="oper row-5 col-4" click={this.operInput} />
        <Button id="one" value="1" display="1" class="num row-6 col-1" click={this.numInput} />
        <Button id="two" value="2" display="2" class="num row-6 col-2" click={this.numInput} />
        <Button id="three" value="3" display="3" class="num row-6 col-3" click={this.numInput} />
        <Button id="add" value="+" display="+" class="oper row-6 col-4" click={this.operInput} />
        <Button id="zero" value="0" display="0" class="num row-7 col-1-2" click={this.numInput} />
        <Button id="decimal" value="." display="." class="num row-7 col-3" click={this.decInput} />
        <Button id="equals" value="=" display="=" class="oper row-7 col-4" click={this.calculate} />
      </div>
    );
  }
}
const Display = props => <div id="calc-display" className="row-1-2 col-1-4"><span id="eq">{props.equation}</span><span id="dis">{props.display}</span></div>;
 
const Button = props => <button type="button" id={props.id} value={props.value} className={props.class} onClick={props.click}>{props.display}</button>;
 
export default Caculator;
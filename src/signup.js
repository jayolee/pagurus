import React, { Component } from 'react';
import './App.scss';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      mode: 0,
    }
    this.cursor = ["inherit", "pointer"];
    this.color = ["#fff", "#ff614c"];
    this.dots = [];
    this.classLists = ["active", "" ,""]
    this.display = ['block', 'none'];
    this.sign_op = [1, 0.1];
    this.sign_bg = ["#fff2eb", "#fff5f2"];

    this.schools = ["ABC University", "ABB University"]
    this.schooladd = ["5000 Forbes Ave, Pittsburgh PA 15213", "8000 MoreWood Ave, Pittsburgh PA 15213"]
   

  }
  prefill(){
    let yearinput = document.getElementById("year");
        yearinput.value = ("2019");
  }

  closeOnBoard(){
    this.setState({left: this.state.left -100, footop: 0, curnum:this.state.curnum + 1, signup: 1});
    // setTimeout(function () {this.setState({wrapdis:1})}.bind(this), 300);
    // this.props.initanim();
  }
  autocomplete(value) {
    let school = [];
    let type = value.toLowerCase();
    for (let i = 0; i < this.schools.length; i++) {
      if (type === this.schools[i].slice(0, type.length).toLowerCase()) {
        school.push(this.schools[i]);
      }
    }
    return school;
}
  keyfunc(e) {
    let inputval = e.target.value;
    let school = [];
    let autoList = document.getElementById("auto-result");
    if(inputval.length > 0){
        autoList.innerHTML = "";
        school = this.autocomplete(inputval);
        for (let i = 0; i < school.length; i++) {
            let schoolval = school[i] + " <span class='add'>"+this.schooladd[i]+"</span>";
          autoList.append( <li onClick={this.autocompleteFill}> + schoolval+ </li>);
        }
        this.setState({display: 1});
    } else {
        school = [];
        autoList.innerHTML = ""
        this.setState({display: 0});
    }  
}
autocompleteFill(value){
  let content = value.target.innerHTML;
  let autoList = document.getElementById("autocomplete");
  autoList.value = content;
}
prefill(){
  let yearinput = document.getElementById("year");
      yearinput.value = ("2019");
}
nextPage(){
    this.setState({page: this.state.page +1});
}
  signupPage(){
    switch(this.state.page){
      case 0:
        return <div className = "signup"><div className = "login">
            <div className="infographic" />
            <div className="title">Find the Best Life Mentor</div>
            <input id="id" type="text" autoFocus placeholder="Email"/>
            <input id="password" type="text" autoFocus placeholder="Password"/>
            </div>
            <div className="btnwrapper">
              <div className="btn emp" style={{marginLeft: 0}}>Sign up</div>
              <div className = "btn colr" style={{marginRight: 0}}>Start</div>
        </div></div>
      case 1:
          return<div className = "signup"><div className="title">Let's Start!</div>
          <div className="discrip" style={{marginTop: "60px"}}>I am a </div>
          
          <div className="btnwrapper type">
            <div className="btn emp outline">Mentor</div>
            <div className = "btn colr">Mentee</div>
          </div></div>
      case 2:
        return <div className = "signup"> <div className="discrip" style={{marginTop: "60px"}}>I prefer using</div>
        <select>
          <option value="January">January</option>
          <option value="Febuary">Febuary</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <div className="btnwrapper select">
          <div className="btn emp">Mentor</div>
          <div className = "btn colr" style={{marginRight: 0}}>Mentee</div>
        </div></div>
      case 3:
     return <div className = "signup"><div className="discrip" style={{marginTop: "60px"}}>I start studying at</div>
      <div class="school" id="autocomplete">
        <input type="text" id="school" onKeyUp={this.keyfunc.bind(this)} autoFocus placeholder="ABC University" />
        <ul id="auto-result" key="autolist" style={{display:this.display[this.state.display]}}></ul>
      </div>
      <div className="btnwrapper select">
        <div className="btn emp">Back</div>
        <div className = "btn colr" style={{marginRight: 0}}>Next</div>
      </div>
      </div>
      case 4:return <div className = "signup">
         <div className="discrip" style={{marginTop: "60px"}}>I will study</div>
                  <select id="degree">
                      <option value="0">PhD</option>
                      <option value="1">Master</option>
                      <option value="2">Bachelor</option>
                  </select>
                  <div className="discrip" style={{width:"auto", marginLeft:"16px", display:"inline-block"}}>of</div>
                  <input type="text" id="major" autoFocus placeholder="Major" />
                
                  <div className="btnwrapper select">
                    <div className="btn emp">Back</div>
                    <div className = "btn colr" style={{marginRight: 0}}>Next</div>
                  </div>
      </div>
      case 5:return <div className = "signup"><div className="discrip" style={{marginTop: "60px"}}>My program starts in</div>
      <div style={{textAlign:"center", marginBottom: "60px"}}>
      <select id="month">
          <option value="0">Fall</option>
          <option value="1">Spring</option>
          <option value="2">Summer</option>
      </select>
      <input type="text" id="year" autoFocus placeholder="2019" />
      </div>
      <div className="btnwrapper select">
        <div className="btn emp">Back</div>
        <div className = "btn colr" style={{marginRight: 0}}>Next</div>
      </div>
      </div>
      case 6:

      
    }
  }
  render() {
    return (
      
                  <div>
                    {this.signupPage()}
                  </div>
               
    );
  }
}

export default SignUp;

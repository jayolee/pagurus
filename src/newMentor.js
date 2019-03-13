import React, { Component } from 'react';
import './App.scss';
import mentee from './images/mentee.svg'
class NewMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 0, 
      display: 0,
    }
    this.schools = ["ABC University", "ABB University"]
    this.schooladd = ["5000 Forbes Ave, Pittsburgh PA 15213", "8000 MoreWood Ave, Pittsburgh PA 15213"]
    this.display=["none","block"]
}
  componentDidMount() {
      let yearinput = document.getElementById("year");
      yearinput.value = ("2019");
  }
  closeMsg(i) {
      this.setState({msg: i});
      return;
  }
  closeWindow() {
    this.props.closeWindow();
  }
  writeMsg() {
  
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
  render() {
    return (
            <div className = "newMentor">
              <div className="xmark" onClick={this.props.closeWindow.bind(this)}>
                <svg width="25" height="25">
                <path d="M0 0 L25 25 M25 0 L0 25" />
                </svg>
              </div>
              <div className = "mainContent" >
                <div className = "title">
                  <b>We'll find the best mentor for you!</b><br />
                  Tell us about yourself.
                </div>
                <div className = "label">
                  <span>I'll start studying at</span>
                  <div class="school" id="autocomplete">
                    <input type="text" id="school" onKeyUp={this.keyfunc.bind(this)} autoFocus placeholder="ABC University" />
                    <ul id="auto-result" key="autolist" style={{display:this.display[this.state.display]}}></ul>
                  </div>
                </div>
               
                <div className = "label">
                  <span>I'll study</span>
                  <select id="degree">
                      <option value="0">PhD</option>
                      <option value="1">Master</option>
                      <option value="2">Bachelor</option>
                  </select>
                  <span>of</span>
                  <input type="text" autoFocus placeholder="Major" />
                </div>

                <div className = "label">
                  <span>My program starts in</span>
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
                  <input id="year" type="text" autoFocus placeholder="2019"/>
                </div>
                <div className = "btnwrapper" >
                  <div className ="btn colr startCon" style={{width:"280px"}} onClick = {(ev) => this.setState({msg : 2})}>
                  Find a Mentor</div>
                </div>
              </div>
              {this.writeMsg()}
              <div className = "topbar" />
            </div>

    );
  }
}

export default NewMentor;

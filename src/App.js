import React, { Component } from 'react';
import './App.scss';
import NewRequest from './newRequest.js'
import NewMentor from './newMentor.js'
import MsgRow from './msgRow.js'
import Msg from './msg.js'
import set from './images/settings.svg'
import bg from './images/bg.svg'
import mentee from './images/mentee.svg'
import mentor from './images/mentor.svg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      transform:0,
      setTrans: 0,
      lstmsg: "",
      lastname: "",
      alertanim: 0,
      altdis: 1,
    }
    this.checked = ["false", "true"];
    this.display = ["", "none"];
    this.transform = [" ", "0",];
    this.settransform = ["rotate(0)", "rotate(360deg)",];
  }
  componentDidMount(){
    let height = window.innerHeight;
    if(height > 847){
      height = 847 - 145;
    } else{
      height -= 145;
    }
    this.transform[1] = "translateY(" + height + "px)";
  }
  pageRender() {
    switch(this.state.page){
      case 0:
      return;
      case 1:
        return <NewRequest closeWindow = {this.closeWindow.bind(this)} setalert = {this.setalert.bind(this)}/>;
      case 2:
        return <Msg closeWindow = {this.closeWindow.bind(this)} name = {this.state.lastname} msg = {this.state.lstmsg}/>;  
      case 3:
        return  <NewMentor closeWindow = {this.closeWindow.bind(this)}/>;
      default:
      return;
    }
  }
  msgsend(i, msg = null, name=null){
    this.setState({lstmsg: msg, lastname: name });
    setTimeout(function () {
      this.setState({page: i});
    }.bind(this), 50);
  }
  settingClick(e) {
    this.setState({transform: !(this.state.transform)});
  }
  closeWindow(){
    this.setState({page: 0})
  }
  setalert(){
    this.setState({altdis: 0, alertanim: 1});
    // setTimeout(function () {
    //   this.setState({alertanim: 1});
    // }.bind(this), 10);
    setTimeout(function () {
      this.setState({alertanim: 0});
    }.bind(this), 900);
    setTimeout(function () {
      this.setState({alertdis: 1});
    }.bind(this), 950);
  }
  render() {
    return (
      <div className="screen">
        <div className = "mainbg">
          <img className="bg" src={bg} />
            <div className = "setting" >
              <div className = "header" >
                <img src={set} key="settingIcon" id="settingIcon" style={{transform: this.settransform}} onClick={(ev) => this.setState({transform: (this.state.transform - 1) * (-1), setTrans:(this.state.setTrans - 1) * (-1)})} />
              </div>
              <div className = "profile">
                <img src = {mentee} />
                <div className = "name">
                  Cathy Lim
                </div>
              </div>
              <div className = "option">
              <div className = "title">Accept Mentor Request</div>
              <label className="switch">
                <input type="checkbox" key = "checkbox" checked={this.checked[this.state.acpMent]} onClick = {(ev) => this.setState({acpMent: (this.state.acpMent -1)*(-1)})}/>
                <span className="slider round" />
              </label>
              </div>

              <div className = "option schoolop">
              <div className = "title">My Locations</div>
                <div className = "location">
                  <div className = "school">Carnegie Mellon University<br />
                  <span className = "major">Master of Human-Computer Interaction</span></div>
                  <div className = "period"><span className="smaller">since</span> 2018</div>
                  
                </div>
                <div className = "location">
                  <div className = "school">ABC University<br />
                  <span className = "major">Bachelor of Studio Art</span> </div>
                  <div className = "period">2012 ~ 2015</div>
                </div>
                <div className = "location">
                  <div className = "school">XYZ High School<br />
                  <span className = "major"></span></div>
                  <div className = "period">2010 ~ 2012</div>
                </div>
                <div className="location newline">
                  <svg width="14" height="14">
                    <path d="M0 7 L14 7" />
                    <path d="M7 0 L7 14" />
                  </svg>
                   Add new location
                </div>
              </div>
              </div>
              <div key="msgRow" className = "msgList" style={{transform: this.transform[this.state.transform]}} onClick = {(ev) => {if(this.state.transform === 1){this.setState({transform: 0})}}}>
                <MsgRow msgsend={this.msgsend.bind(this)} />
                <div className="mentbtn" onClick = {(ev) => {this.setState({page: 3})}}>
                  <img src={mentor} />
                </div>
              </div>
              {this.pageRender()}
            </div>
            <div className = "topbar" />
            <div className= "notification" key="notif" style={{opacity:this.state.alertanim, display:this.display[this.state.altdis]}}>
              Sent
            </div>
        </div>
    );
  }
}

export default App;

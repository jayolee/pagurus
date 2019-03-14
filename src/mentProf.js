import React, { Component } from 'react';
import './App.scss';
import LvMsg from './lvMsg.js'
import Msg from './msg.js'
import mentor from './images/mentor_prof.svg'
class MentProf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 0,
      openmov: "translateY(30px)",
      opacity: 0,
    }
    this.name = "";
  }
  componentDidMount(){
    setTimeout(function () { this.setState({opacity:1, openmov:"translateY(0)"}) }.bind(this), 2);
    this.name = this.props.name;
  }
  closeMsg(i) {
      this.setState({msg: i});
      return;
  }
  closeWindow() {
    this.props.closeWindow();
  }
  writeMsg() {
    if(this.state.msg === 1) {
        return <LvMsg closeMsg = {this.closeMsg.bind(this)} closewindow = {this.closeWindow.bind(this)} setalert={this.props.setalert.bind(this)}/>;
    } else if(this.state.msg === 2) {
      return <Msg closeOnBoard = {this.props.closeOnBoard.bind(this)} closeWindow = {this.closeWindow.bind(this)} name = {this.name} msg = ""/>;
    } else {
        return;
    }
  }
  render() {
    return (
            <div className = "newRequest mentor" key="newmentor" style={{transform:this.state.openmov, opacity:this.state.opacity}}>
              <div className="xmark" onClick={this.props.closeWindow.bind(this)}>
                <svg width="25" height="25">
                <path d="M0 0 L25 25 M25 0 L0 25" />
                </svg>
              </div>
              <div className = "mainContent" >
                <div className = "profilePic">
                  <img src={mentor} />
                </div>
                <div className = "userName">
                 {this.name}
                </div>
                <div className = "commonGr">
                {this.name} also went to <span className="bold">ABC University!</span>
                </div>
                <div className = "messageCon">
                Hi, I am {this.name}, MHCI class of 2017. I love finiding good restaurants in Pittsburgh. Feel free to ask me questions!
                </div>
                <div className = "btnwrapper" >
                  <div className ="btn colr startCon" style={{width:"280px"}} onClick = {(ev) => this.setState({msg : 2})}>
                  Start Conversation</div>
                </div>
              </div>
              {this.writeMsg()}
              <div className = "topbar" />
            </div>

    );
  }
}

export default MentProf;

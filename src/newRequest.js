import React, { Component } from 'react';
import './App.scss';
import LvMsg from './lvMsg.js'
import Msg from './msg.js'
import mentee from './images/mentee.svg'
class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 0, 
    }
  }
  closeMsg(i) {
      this.setState({msg: i});
      return;
  }
  writeMsg() {
    if(this.state.msg === 1) {
        return <LvMsg closeMsg = {this.closeMsg.bind(this)} />;
    } else if(this.state.msg === 2) {
      return <Msg closeMsg = {this.closeMsg.bind(this)} />;
    } else {
        return;
    }
  }
  render() {
    return (
            <div className = "newRequest">
              <div className="xmark" >
                <svg width="25" height="25">
                <path d="M0 0 L25 25 M25 0 L0 25" />
                </svg>
              </div>
              <div className = "mainContent" >
                <div className = "title">
                  New Request
                </div>
                <div className = "profilePic">
                  <img src={mentee} />
                </div>
                <div className = "userName">
                  Su Jin Kim
                </div>
                <div className = "commonGr">
                Su Jin also went to <span class="bold">ABC University!</span>
                </div>
                <div className = "message">
                Hi, I am Su Jin, MHCI class of 2019. I have some questions about moving to Pittsburgh and what I need to prepare before the program starts.
                </div>
                <div className = "btnwrapper" >
                  <div className ="btn colr startCon" style={{width:"280px"}} onClick = {(ev) => this.setState({msg : 2})}>
                  Start Conversation</div>
                  <div className ="btn emp" onClick = {(ev) => this.setState({msg : 1})}>
                  Sorry, I am busy</div>
                </div>
              </div>
              {this.writeMsg()}
              <div className = "topbar" />
            </div>

    );
  }
}

export default NewRequest;

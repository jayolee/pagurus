import React, { Component } from 'react';
import './App.scss';
import mentee from './images/mentee.svg'
import camera from './images/camera.svg'
import photo from './images/mountain.svg'
class Msg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 0, 
      savedname: null,
      savedmsg: null,
      height: "100vh",
      msglist: [],
      msgrnum : 0,
    }
  }
  componentDidMount() {
    this.setState({opacity:1});
    setTimeout(function () { this.setState({transform:"translateY(0)"}) }.bind(this), 50);
    if(this.props.name){
    this.setState({savedmsg: this.props.msg, savedname: this.props.name});
    }   
}
  closeComp() {
    this.setState({transform:"translateY(30vh)"});
    setTimeout(function () {this.setState({opacity:0})}.bind(this), 100);
    setTimeout(function () {this.props.closeMsg(0)}.bind(this),300);
  }
  renderMsg(){
      if(this.state.savedmsg){
        return <div className="msgRow others">
                    <div>{this.state.savedmsg}</div>
                </div>;
      }
  }
  inputFocus() {
    let height = window.innerHeight;
    this.setState({height: height});
  }
  appendMsg() {
      let inputbox = document.getElementById("inputbox");
      if(inputbox.value){
      let msglist = this.state.msglist;
      msglist.push(<div className="msgRow" key={"msgr" + this.state.msgrnum}>
      <div>{inputbox.value}</div>
  </div>);
        this.setState({msglist: msglist, msgrnum: this.state.msgrnum + 1});
        inputbox.value = '';
    }
  }
  generateMsg() {
      return <div>{this.state.msglist}</div>;
  }
  render() {
    return (
            <div className = "msg" key="msgbox" style={{height: this.state.height}}>
                <div className = "header">
                    <div className = "msgName">
                        <img src={mentee} key="name"/>{this.state.savedname}
                    </div>

                    <div className="xmark" onClick ={this.props.closeWindow.bind(this)}>
                        <svg width="20" height="20">
                        <path d="M0 0 L20 20 M20 0 L0 20" />
                        </svg>
                    </div>
              </div>
              <div className = "msgMain" key="msglist">
              {this.renderMsg()}
                {this.generateMsg()}
              </div>
              <div className = "msgtype">
                <img src={camera} />
                <img src={photo} />
                <input id="inputbox" type = "text" autoFocus placeholder = "Type message" onFocus={this.inputFocus.bind(this)} onKeyPress= {(ev) => {
                    if(ev.key === "Enter"){this.appendMsg()}}}/>
                <div className = "sendbtn" onClick={this.appendMsg.bind(this)}>
                    <svg width="16" height="16">
                        <path d="M10 0 L16 8 L8 16" />
                        <path d="M0 8 L16 8" />
                    </svg>
                </div>
              </div>
              <div className = "topbar" />
            </div>

    );
  }
}

export default Msg;

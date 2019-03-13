import React, { Component } from 'react';
import './App.scss';
class LvMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 0,
      transform: "translateY(30vh)"
    }
    
  }

  componentDidMount() {
    this.setState({opacity:1});
    setTimeout(function () { this.setState({transform:"translateY(0)"}) }.bind(this), 50);
  }
  closeComp() {
    this.setState({transform:"translateY(30vh)"});
    setTimeout(function () {this.setState({opacity:0})}.bind(this), 100);
    setTimeout(function () {this.props.closeMsg(0)}.bind(this),300);
  }
  appendMsg() {
      this.props.setalert();
      this.closeComp();
      this.props.closewindow();
      
}
  render() {
    return (
        <div>
            <div className ="msgWrap" onClick = {this.closeComp.bind(this)} />
            <div className = "lvMsg" key = "msg" style={{opacity:this.state.opacity, transform:this.state.transform}}>
            <textarea autoFocus placeholder = "Leave message to Su Jin" onKeyPress= {(ev) => {
                    if(ev.key === "Enter"){this.appendMsg()}}}/>
            <div className = "btnwrapper">
                <div className = "btn colr" onClick={this.appendMsg.bind(this)}>
                Send
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default LvMsg;

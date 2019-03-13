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
    }
    this.savedmsg = null;
  }
  componentDidMount() {
    this.setState({opacity:1});
    setTimeout(function () { this.setState({transform:"translateY(0)"}) }.bind(this), 50);
    if(this.props.msg){
    this.savedmsg = this.props.msg;
    }   
}
  closeComp() {
    this.setState({transform:"translateY(30vh)"});
    setTimeout(function () {this.setState({opacity:0})}.bind(this), 100);
    setTimeout(function () {this.props.closeMsg(0)}.bind(this),300);
  }
  renderMsg(){
      if(this.savedmsg){
        return <div className="msgRow others">
                    <div>abc</div>
                </div>;
      }
  }
  render() {
    return (
            <div className = "msg">
                <div className = "header">
                    <div className = "msgName">
                        <img src={mentee} />Su Jin Kim
                    </div>

                    <div className="xmark" onClick ={this.props.closeWindow.bind(this)}>
                        <svg width="20" height="20">
                        <path d="M0 0 L20 20 M20 0 L0 20" />
                        </svg>
                    </div>
              </div>
              <div className = "msgMain" >
              {this.renderMsg()}
                <div className="msgRow">
                    <div>abc</div>
                </div>
                <div className="msgRow">
                    <div>abc</div>
                </div>
              </div>
              <div className = "msgtype">
                <img src={camera} />
                <img src={photo} />
                <input type = "text" autoFocus placeholder = "Type message"/>
                <div className = "sendbtn">
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

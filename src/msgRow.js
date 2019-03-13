import React, { Component } from 'react';
import './App.scss';
import Msg from './msg.js'
import mentee from './images/mentee.svg'
class MsgRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      opacity: 0,
      transform: "translateY(30vh)",
      acpMent: 1,
      btnact: [1, 0, 0],
      mentOp : 1,
      mentdis: "",
      menteOp: 1,
      mentedis: "",
      lstmsg : "",
      barWidth: 0,
    }
    this.active = ["", "active"];
    this.barWidth = ["36px", "75px", "75px"];
    this.barLeft = ["24.2px", "73.5px", "158.5px"];
  }

  filter(e) {
      if(e.clientY < 300){
    let keyval = e.target.id - 1;
    let actarr = [0, 0, 0]
    actarr[keyval] = 1;
    this.setState({btnact: actarr, barWidth: keyval});
    

    switch(keyval){
      case 1:
        this.setState({menteOp: 0});
        setTimeout(function () {this.setState({mentedis: "none", mentdis:"flex"})}.bind(this), 100);
        setTimeout(function () {this.setState({mentOp: 1,})}.bind(this), 100);
        break;
      case 2:
        this.setState({ mentOp: 0});
        setTimeout(function () {this.setState({mentdis: "none", mentedis:"flex"})}.bind(this), 100);
        setTimeout(function () {this.setState({menteOp: 1})}.bind(this), 110);
       
        break;
      default:
        this.setState({mentedis:"flex", mentdis:"flex"});
        setTimeout(function () {this.setState({mentOp: 1, menteOp: 1})}.bind(this), 10);
    }
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
  rendermsg(e){
    let msgdiv = e.target;
    let name = "";
    let msg ="";

    for(let i = 0; i< 4; i++){
        if(msgdiv.className.includes("msgRow")){
            name = msgdiv.getAttribute("name");
            msg = msgdiv.getAttribute("msg");
        }
        msgdiv = msgdiv.parentNode;
    }
    this.props.msgsend(2, msg, name);
  }
  newrequest(){
    this.props.msgsend(1, "");
  }
  render() {
    return (
        <div>
                <div className = "header">
                  <div key="filter1" id= "1" className = {"topbtn " + this.active[this.state.btnact[0]]} onClick={this.filter.bind(this)} >All</div>
                  <div key="filter2" id= "2" className = {"topbtn " + this.active[this.state.btnact[1]]} onClick={this.filter.bind(this)}>Mentor</div>
                  <div key="filter3" id= "3" className = {"topbtn " + this.active[this.state.btnact[2]]} onClick={this.filter.bind(this)}>Mentee</div>
                    <div className="headerBar" key="bar" style={{width:this.barWidth[this.state.barWidth], left:this.barLeft[this.state.barWidth]}}/>
                </div>

                <div className="msgwrapper">
                  <div className = "msgRow mentor newrq" key="row1" style={{display:this.state.mentdis, opacity:this.state.mentOp}} onClick ={this.newrequest.bind(this)}>
                    New Request
                  </div>

                  <div className = "msgRow mentee" key="row2" style={{display:this.state.mentedis, opacity:this.state.menteOp}} onClick ={this.rendermsg.bind(this)} name="Melissa" msg="You can take 3A.">
                    <img src={mentee} />
                    <div className = "msgName">
                    Melissa
                      <div className = "lstMgs">
                      You can take 3A.
                      </div>
                    </div>
                    <div className = "msgDate">
                    1:30 PM
                    </div>
                  </div>

                  <div className = "msgRow mentor" key="row3" style={{display:this.state.mentdis, opacity:this.state.mentOp}} onClick ={this.rendermsg.bind(this)} name="Cathy" msg="You can take 71B.">
                    <img src={mentee} />
                    <div className = "msgName">
                    Cathy
                      <div className = "lstMgs">
                      You can take 71B.
                      </div>
                    </div>
                    <div className = "msgDate">
                    3 days ago
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}

export default MsgRow;

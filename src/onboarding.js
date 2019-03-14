import React, { Component } from 'react';
import './App.scss';
import SignUp from './signup.js'
import lbg from './images/longbg.svg'
import logogra from './images/logo_gradient.svg'
import bg1 from './images/bg1.png'
class Onboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      transform:0,
        opacity: 0,
        left: 0,
        prev: 0,
        next: 1,
        curnum: 0,
        bg : 0,
        wrapop : 1,
        wrapdis: 0,
        footop: 1,
        signup: 0,
        alert: "Click SIGN UP",
      alertanim: 0,
      altdis:1,
    }
    this.cursor = ["inherit", "pointer"];
    this.color = ["#fff", "#ff614c"];
    this.dots = [];
    this.classLists = ["active", "" ,""]
    this.display = ['block', 'none'];
    this.displayfoot = ['flex', 'none'];
    this.sign_op = [1, 0.1];
    this.sign_bg = ["#fff2eb", "#fff5f2"];
    this.topbar = ["#f33f2b", "#ffdad0" ]

  }
  componentDidMount(){
    this.dots = document.getElementsByClassName("dot");
  }
  movingNext(){
    let curnum = this.state.curnum;
    
      if(curnum !== 2){
        this.classLists[curnum] = "";
        this.classLists[curnum + 1] = "active";
    this.setState({left: this.state.left - 100, curnum: curnum + 1, prev: 1, next: 1, opacity:0, bg : 0});
    if(curnum === 1){
        this.setState({next: 0, opacity:1, bg: 1})
    }
    }   
  }
  movingPrev(){
    let curnum = this.state.curnum;
    if(curnum !== 0){
      this.classLists[curnum] = "";
      this.classLists[curnum - 1] = "active";
    this.setState({left: this.state.left + 100, curnum: curnum - 1, prev: 1, next: 1, opacity:0, bg : 0});
    if(this.state.curnum === 1){
      this.setState({prev: 0});
  }
    }
  }
  closeOnBoard(){
    this.setState({left: this.state.left -100, footop: 0, opacity: 0, curnum:this.state.curnum + 1, signup: 1});
    setTimeout(function () {this.setState({wrapdis:1})}.bind(this), 300);
    this.props.initanim();
  }

  setInstruction(cont){
    this.setState({altdis: 0, alert: cont});
    setTimeout(function () {this.setState({alertanim: 1})}.bind(this), 10);
    setTimeout(function () {this.setState({alertanim: 0})}.bind(this), 1100);
    setTimeout(function () {this.setState({altdis: 1})}.bind(this), 1400);
}
returnSignUp(){
  if(this.state.signup === 1){
  return <SignUp setInstruction = {this.setInstruction.bind(this)} closeOnBoard = {this.closeOnBoard.bind(this)}/>;
}
}
  render() {
    return (
      <div className="screen onboard" key="onboardwrap" style={{opacity: this.state.wrapop, background: this.sign_bg[this.state.signup], display:this.display[this.state.wrapdis]}}>
        <div className = "onboard">
          <img className="bg" src={lbg} style ={{left: this.state.left+"%", opacity:this.sign_op[this.state.signup]}}/>
            <div className = "messages" key="onboard" style ={{left: this.state.left+"%"}}>
            
              <div className = "message first">
              <div className = "infographic main" ><img id="mainLogo" src={logogra } /></div>
              <div className = "title">Find the Best Life Mentor</div>
              
              </div>

            <div className = "message second">
            <div className = "infographic "> <img src={bg1} id="bg1"/> </div>
              <div className = "title">First time moving to a new country?</div>
              <div className="descrip"> We find you the best life mentor who has the most common background with you</div>
              </div>

              <div className = "message third" key="thirdmsg" style={{display:this.display[this.state.signup]}}>
              <div className = "infographic second" />
              <div className = "title">Build professional relationship with your future cohort</div>
              <div className="descrip">Help your future cohort and start the professional relationship</div>
              </div>


               <div className="message" style={{padding: 0}}>
                 {this.returnSignUp()}
                </div>


              </div>
              <div className ="footBar" key="footbar" style={{opacity:this.state.footop, display:this.displayfoot[this.state.signup]}}>
              <div className = "nextArrow prev" key="prev" style={{cursor: this.cursor[this.state.prev], opacity: this.state.prev, stroke:this.color[this.state.bg]}} onClick = {this.movingPrev.bind(this)}>
                        <svg width="24" height="26">
                        <path d="M12 2 L2 12 M2 12 L 12 24" />
                        </svg>
                    </div>
                    <div className = "sliders">
                        <div className ={"dot " + this.classLists[0]} key = "dot1" />
                        <div className ={"dot " + this.classLists[1]} key = "dot2"/>
                        <div className ={"dot " + this.classLists[2]} key = "dot3"/>
                    </div>
                    <div className = "nextArrow" key="next" style={{cursor: this.cursor[this.state.next], opacity: this.state.next, stroke:this.color[this.state.bg]}} onClick = {this.movingNext.bind(this)}>
                        <svg width="24" height="26">
                        <path d="M2 2 L14 12 M14 12 L 2 24" />
                        </svg>
                    </div>
                </div>
                <div className ="btn gotit" key="gotit" onClick = {(ev) => {this.setState({signup: 1}); this.movingNext(); this.setInstruction("Click SIGN UP");} }style={{ display:this.displayfoot[this.state.signup], opacity: this.state.opacity}}>
                    Got it
                    </div>
                
            </div>
            <div className= "instruction" key="notif" style={{opacity:this.state.alertanim, display:this.display[this.state.altdis]}}>
              {this.state.alert}
            </div>
            <div className = "topbar" style={{background: this.topbar[this.state.signup]}}/>
        </div>
    );
  }
}

export default Onboard;

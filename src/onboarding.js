import React, { Component } from 'react';
import './App.scss';
import SignUp from './signup.js'
import set from './images/settings.svg'
import lbg from './images/longbg.svg'
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
  componentDidMount(){
    this.dots = document.getElementsByClassName("dot");
  }
  movingNext(){
    let curnum = this.state.curnum;
      if(curnum != 2){
        this.classLists[curnum] = "";
    this.setState({left: this.state.left - 100, curnum: curnum += 1, prev: 1, next: 1, opacity:0, bg : 0});
    this.classLists[curnum] = "active";
    if(curnum == 2){
        this.setState({next: 0, opacity:1, bg: 1})
    }
    }   
  }
  movingPrev(){
    let curnum = this.state.curnum;
    if(curnum != 0){
      this.classLists[curnum] = "";
    this.setState({left: this.state.left + 100, curnum: curnum -= 1, prev: 1, next: 1, opacity:0, bg : 0});
    this.classLists[curnum] = "active";
    if(this.state.curnum == 0){
        this.setState({prev: 0})
    }
    }
  }
  closeOnBoard(){
    this.setState({left: this.state.left -100, footop: 0, curnum:this.state.curnum + 1, signup: 1});
    setTimeout(function () {this.setState({wrapdis:1})}.bind(this), 300);
    this.props.initanim();
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
      <div className="screen onboard" key="onboardwrap" style={{opacity: this.state.wrapop, background: this.sign_bg[this.state.signup], display:this.display[this.state.wrapdis]}}>
        <div className = "onboard">
          <img className="bg" src={lbg} style ={{left: this.state.left+"%", opacity:this.sign_op[this.state.signup]}}/>
            <div className = "messages" key="onboard" style ={{left: this.state.left+"%"}}>
            
              <div className = "message first">
              <div className = "infographic" />
              <div className = "title">Find the Best Life Mentor</div>
              
              </div>

            <div className = "message second">
            <div className = "infographic" />
              <div className = "title">First time moving to a new country?</div>
              <div className="descrip"> We find you the best life mentor who has the most common background with you</div>
              </div>

              <div className = "message third">
              <div className = "infographic" />
              <div className = "title">Build professional relationship with your future cohort</div>
              <div className="descrip">Help your future cohort and start the professional relationship</div>
              </div>


               <div className="message">
                 {/* <SignUp /> */}
                </div>


              </div>
              <div className ="footBar" key="footbar" style={{opacity:this.state.footop}}>
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
                <div className ="btn gotit" onClick = {this.closeOnBoard.bind(this)} style={{opacity: this.state.opacity}}>
                    Got it
                    </div>
                
            </div>
            <div className = "topbar" />
        </div>
    );
  }
}

export default Onboard;

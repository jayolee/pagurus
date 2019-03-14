import React, { Component } from 'react';
import AddSchool from './addSchool.js'
import logoCol from './images/logo_color.svg'
import mentee from './images/mentee.svg'
import mentor from './images/mentor_prof.svg'
import MentProf from './mentProf.js'
import './App.scss';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      mode: 0,
      alert: "Click SIGN UP",
      alertanim: 0,
      altdis: 1,
      transition: 0,
      move: 0,
      addSchool: 0,
      maintrans: 0,
      autolist: [],
      mentprof : 0,
      mentname: "",
    }
    this.maintransform = ["0", "translateY(50px)"];
    this.cursor = ["inherit", "pointer"];
    this.color = ["#fff", "#ff614c"];
    this.dots = [];
    this.classLists = ["active", "", ""]
    this.display = ['block', 'none'];
    this.sign_op = [1, 0.1];
    this.sign_bg = ["#fff2eb", "#fff5f2"];
    this.transition = ["0.3s", "0s"];
    this.transform = ["translateX(-33.3%)", "translateX(-66.6%)", "translateX(0)"]
    this.schools = ["ABC University", "ABB University"]
    this.schooladd = ["5000 Forbes Ave, Pittsburgh PA 15213", "8000 MoreWood Ave, Pittsburgh PA 15213"]
    this.pagedetail = [
      <div className="signup" />,
      //first
      <div className="signup"><div className="login">
        <div className="infographic" ><img src={logoCol} /></div>
        <div className="title">Find the Best Life Mentor</div>
        <input id="id" type="text" autoFocus placeholder="Email" />
        <input id="password" type="text" autoFocus placeholder="Password" />
      </div>
        <div className="btnwrapper">
          <div className="btn emp" style={{ marginLeft: 0 }} onClick={(ev) => { this.nextPage() }}>Sign up</div>
          <div className="btn colr" style={{ marginRight: 0 }} onClick={(ev) => this.props.setInstruction("Click SIGN UP")}>
            Start</div>
        </div></div>,
      //second
      <div className="signup"><div className="title" id="letstart">Let's Start!</div>
        <div className="discrip" style={{ marginTop: "60px" }}>I am a </div>

        <div className="btnwrapper type" style={{ position: "relative", marginTop: "60px" }}>
          <div className="btn outline" onClick={(ev) => { this.setState({ mode: 0 }); this.nextPage() }}>Mentor</div>
          <div className="btn colr" onClick={(ev) => { this.setState({ mode: 1 }); this.nextPage() }}>Mentee</div>
        </div></div>,
      //third
      <div className="signup"> <div className="discrip" style={{ marginTop: "60px" }}>I prefer using</div>
        <select onChange={(ev) => { this.props.setInstruction("Assume the UI is in selected language") }}>
          <option value="AR">Arabic</option>
          <option value="HY">Armenian</option>
          <option value="EU">Basque</option>
          <option value="BN">Bengali</option>
          <option value="BG">Bulgarian</option>
          <option value="CA">Catalan</option>
          <option value="KM">Cambodian</option>
          <option value="ZH">Chinese (Mandarin)</option>
          <option value="HR">Croation</option>
          <option value="CS">Czech</option>
          <option value="DA">Danish</option>
          <option value="NL">Dutch</option>
          <option value="EN" selected="selected">English</option>
          <option value="ET">Estonian</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finnish</option>
          <option value="FR">French</option>
          <option value="KA">Georgian</option>
          <option value="DE">German</option>
          <option value="EL">Greek</option>
          <option value="GU">Gujarati</option>
          <option value="HE">Hebrew</option>
          <option value="HI">Hindi</option>
          <option value="HU">Hungarian</option>
          <option value="IS">Icelandic</option>
          <option value="ID">Indonesian</option>
          <option value="GA">Irish</option>
          <option value="IT">Italian</option>
          <option value="JA">Japanese</option>
          <option value="JW">Javanese</option>
          <option value="KO">Korean</option>
          <option value="LA">Latin</option>
        </select>
        <div className="btnwrapper select">
          <div className="btn emp" onClick={this.prevPage.bind(this)}>back</div>
          <div className="btn colr" style={{ marginRight: 0 }} onClick={(ev) => { this.nextPage(); this.props.setInstruction("Type ABC University"); if(this.state.mode === 0){this.setState({page: 6})} }}>next</div>
        </div></div>,
      //fourth
      <div className="signup"><div className="discrip" style={{ marginTop: "60px" }}>I start studying at</div>
        <div className="school" id="autocomplete">
          <input type="text" id="school" onFocus={(ev) => { this.props.setInstruction("Getting address from Google Map API") }} onKeyUp={this.keyfunc.bind(this)} placeholder="ABC University" />
          <ul id="auto-result" key="autolist" style={{ display: this.display[this.state.display] }}>
            <li>{this.state.autolist}</li>
          </ul>
        </div>
        <div className="btnwrapper select">
          <div className="btn emp" onClick={this.prevPage.bind(this)}>Back</div>
          <div className="btn colr" onClick={this.nextPage.bind(this)} style={{ marginRight: 0 }}>Next</div>
        </div>
      </div>,

      //fifth
      <div className="signup">
        <div className="discrip" style={{ marginTop: "60px" }}>I will study</div>
        <select id="degree">
          <option value="0">PhD</option>
          <option value="1">Master</option>
          <option value="2">Bachelor</option>
        </select>
        <div className="discrip" style={{ width: "auto", marginLeft: "16px", display: "inline-block" }}>of</div>
        <input type="text" id="major" placeholder="Major" onFocus={(ev) => { this.props.setInstruction("Displaying the major list of the university") }} />

        <div className="btnwrapper select">
          <div className="btn emp" onClick={this.prevPage.bind(this)}>Back</div>
          <div className="btn colr" style={{ marginRight: 0 }} onClick={(ev) => { this.nextPage() }}>Next</div>
        </div>
      </div>,
      //sixth
      <div className="signup"><div className="discrip" style={{ marginTop: "60px" }}>My program starts in</div>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <select id="month">
            <option value="0">Fall</option>
            <option value="1">Spring</option>
            <option value="2">Summer</option>
          </select>
          <input type="text" id="year" placeholder="2019" />
        </div>
        <div className="btnwrapper select">
          <div className="btn emp" onClick={this.prevPage.bind(this)}>Back</div>
          <div className="btn colr" style={{ marginRight: 0 }} onClick={this.nextPage.bind(this)}>Next</div>
        </div>
      </div>,
      //seventh
      <div className="signup">
        <div className="discrip">I was at</div>
        <div className="option schoolop">
          <div className="location">
            <div className="school">ABC University<br />
              <span className="major">Master of Human-Computer Interaction</span></div>
            <div className="period"><span className="smaller">since</span> Fall 2019</div>

          </div>
          <div className="location newline" onClick={(ev) => { this.setState({ addSchool: 1 }) }}>
            <svg width="14" height="14">
              <path d="M0 7 L14 7" />
              <path d="M7 0 L7 14" />
            </svg>
            Add new location
                </div>
        </div>

        <div className="btnwrapper select">
          <div className="btn emp" onClick={this.prevPage.bind(this)}>Back</div>
          <div className="btn colr" style={{ marginRight: 0 }} onClick={this.nextPage.bind(this)}>Find a mentor</div>
        </div>

      </div>,
      <div className="signup" >
       <div className="discrip">Select a mentor to start conversation</div>
        <div className="msgwrapper">

          <div className="msgRow mentor" key="row2" name="Melissa" onClick={(ev) => {this.setState({mentprof: 1, mentname: "Melissa"})}}>
            <div className="imgwrap"> <img src={mentor} /></div>
            <div className="msgName">
              Melissa
                <div className="lstMgs">
                    Melissa went to the same LMN University!
                </div>
                <div className="msgDate">
                  ABC Since 2018
              </div>
            </div>
            
          </div>

          <div className="msgRow" key="row3" name="Cathy" onClick={(ev) => {this.setState({mentprof: 1, mentname: "Cathy"})}}>
          <div className="imgwrap"> <img src={mentor} /></div>
            <div className="msgName">
              Cathy
                <div className="lstMgs">
                    Cathy went to the same LMN University!
                </div>
                <div className="msgDate">
                ABC Since 2017
              </div>
            </div>
            
          </div>

          <div className="msgRow " key="row4" name="Susan" onClick={(ev) => {this.setState({mentprof: 1, mentname: "Susan"})}}>
          <div className="imgwrap"> <img src={mentor} /></div>
            <div className="msgName">
              Susan
                <div className="lstMgs">
                    Susan went to the same XYZ High School!
                </div>
                <div className="msgDate">
                ABC Since 2015
              </div>
            </div>
            
          </div>

          <div className="msgRow " key="row5" name="John" onClick={(ev) => {this.setState({mentprof: 1, mentname: "John"})}}>
          <div className="imgwrap"> <img src={mentor} /></div>
            <div className="msgName">
              John
                <div className="lstMgs">
                    John went to the same XYZ High School!
                </div>
                <div className="msgDate">
                ABC Since 2015
              </div>
            </div>
            <div className="btnwrapper select">
          <div className="btn outline " onClick={this.props.closeOnBoard} style={{ marginRight: 0 }}>Skip</div>
        </div>
          </div>
        </div></div>,
      <div className="signup" />
    ]

  }
  componentDidMount() {
    this.props.setInstruction("Click SIGN UP")
  }
  prefill() {
    let yearinput = document.getElementById("year");
    yearinput.value = ("2019");
  }

  closeOnBoard() {
    this.setState({ addSchool: 0 })
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
    let autoList = this.state.autolist;
    let result = document.getElementById("auto-result");
    if (inputval.length > 0) {
      school = this.autocomplete(inputval);
      autoList = [<li onClick={this.autocompleteFill.bind(this)}> {school[0]}
        <span className='add'>"{this.schooladd[0]}</span></li>];
      this.setState({ display: 1, autolist: autoList });
    } else {
      school = [];
      autoList = [];
      this.setState({ display: 0, autolist: autoList });
    }
  }
  returnval() {
    return this.state.autolist;
  }
  autocompleteFill(value) {
    let content = value.target.innerHTML;
    let autoList = document.getElementById("autocomplete");
    autoList.value = content;
  }
  prefill() {
    let yearinput = document.getElementById("year");
    if(yearinput){
    yearinput.value = ("2019");
  }
  }
  nextPage() {
    this.setState({ move: 1 });
    setTimeout(function () { this.setState({ transition: 1 }) }.bind(this), 10);
    setTimeout(function () { this.setState({ page: this.state.page + 1, move: 0 }) }.bind(this), 310);
    setTimeout(function () { this.setState({ transition: 0 }) }.bind(this), 320);
  }
  prevPage() {
    this.setState({ move: 2 });
    setTimeout(function () { this.setState({ transition: 1 }) }.bind(this), 10);
    setTimeout(function () { this.setState({ page: this.state.page - 1, move: 0 }) }.bind(this), 310);
    setTimeout(function () { this.setState({ transition: 0 }) }.bind(this), 320);
  }
  setInstruction(cont) {
    this.setState({ altdis: 0, alert: cont });
    setTimeout(function () { this.setState({ alertanim: 1 }) }.bind(this), 10);
    setTimeout(function () { this.setState({ alertanim: 0 }) }.bind(this), 1000);
    setTimeout(function () { this.setState({ altdis: 1 }) }.bind(this), 1300);
  }
  addSchool() {
    if (this.state.addSchool === 1) {
      return <AddSchool close={this.closeOnBoard.bind(this)} />
    }
  }
  signupPage() {
    if (this.state.page === 6) {
      this.prefill();
    }
    return <div className="signupwrap" key="signupWrap" style={{ transition: this.transition[this.state.transition], transform: this.transform[this.state.move] }}>
      {this.pagedetail[this.state.page - 1]}
      {this.pagedetail[this.state.page]}
      {this.pagedetail[this.state.page + 1]}
    </div>
  }
  mentProf(){
    if(this.state.mentprof === 1){
    return <MentProf name = {this.state.mentname} closeWindow = {this.closeWindow.bind(this)} closeOnBoard = {this.props.closeOnBoard.bind(this)}/>
    }
  }
  closeWindow(){
    this.setState({mentprof: 0});
  }
  render() {
    return (

      <div style={{ position: "relative" }}>
        {this.signupPage()}
        {this.mentProf()}
        <div className="instruction" key="notif" style={{ opacity: this.state.alertanim, left: "150%", display: this.display[this.state.altdis] }}>
          {this.state.alert}
        </div>
        {this.addSchool()}
      </div>

    );
  }
}

export default SignUp;

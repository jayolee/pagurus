import React, { Component } from 'react';
import './App.scss';
class AddSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      mode: 0,
      alert: "Click SIGN UP",
      alertanim: 0,
      altdis:1,
     left: 0,
     inputop: 0,
     maintrans: 1,
     mainop: 0,
    }
    this.maintransform = ["translateY(0)",  "translateY(50px)"];
    this.classLists = ["active", "" ,""]
    this.display = ['block', 'none'];
    this.sign_op = [1, 0.1];
    this.schools = ["ABC University", "ABB University"]
    this.schooladd = ["5000 Forbes Ave, Pittsburgh PA 15213", "8000 MoreWood Ave, Pittsburgh PA 15213"]
    this.pagedetail =[
          //fourth
          <div className = "signup"><div className="discrip" style={{marginTop: "60px"}}>I (have) studied at</div>
          <div class="school" id="autocomplete">
            <input type="text" id="school" onFocus = {(ev) => {this.setInstruction("Getting address from Google Map API")}} onKeyUp={this.keyfunc.bind(this)} placeholder="ABC University" />
            <ul id="auto-result" key="autolist" style={{display:this.display[this.state.display]}}></ul>
          </div>
          <div className="btnwrapper select">
            <div className = "btn colr" onClick={this.nextPage.bind(this)} style={{marginRight: 0}}>Next</div>
          </div>
          </div>,

        //fifth
          <div className = "signup">
          <div className="discrip" style={{marginTop: "60px"}}>I (have) studied</div>
                   <select id="degree">
                       <option value="0">PhD</option>
                       <option value="1">Master</option>
                       <option value="2">Bachelor</option>
                   </select>
                   <div className="discrip" style={{width:"auto", marginLeft:"16px", display:"inline-block"}}>of</div>
                   <input type="text" id="major"  placeholder="Major" onFocus = {(ev) => {this.setInstruction("Displaying the major list of the university")}}/>
                 
                   <div className="btnwrapper select">
                     <div className="btn emp" onClick={this.prevPage.bind(this)}>Back</div>
                     <div className = "btn colr" style={{marginRight: 0}} onClick={(ev) => {this.nextPage(); }}>Next</div>
                   </div>
       </div>,
       //sixth
<div className = "signup">
<div className="discrip" style={{marginTop: "60px"}}>I studied from</div>
      <div style={{textAlign:"center", marginBottom: "60px"}}>
      <select id="month">
          <option value="0">Fall</option>
          <option value="1">Spring</option>
          <option value="2">Summer</option>
      </select>
      <input type="text" id="year" placeholder="2019" />
      </div>

      <div className="discrip" style={{marginTop: "60px"}}>to</div>
      <div style={{textAlign:"center", marginBottom: "60px"}}>
      <select id="month" onChange = {(ev) => {if(ev.target.value !== 9){this.setState({inputop: 1})} else {this.setState({inputop: 0})}}}>
      <option value="9">Ongoing</option>
          <option value="0">Fall</option>
          <option value="1">Spring</option>
          <option value="2">Summer</option>
      </select>
      <input type="text" id="year" key="yearinput" placeholder="2019" style={{opacity: this.state.inputop}}/>
      </div>


      <div className="btnwrapper select">
        <div className="btn emp" onClick={this.prevPage.bind(this)}>Back</div>
        <div className = "btn colr" style={{marginRight: 0}} onClick={(ev) => {this.setState({maintrans: 1, mainop: 0}); setTimeout(function () {this.props.close()}.bind(this), 200)}}>Add School</div>
      </div>
      </div>,
]

  }
  componentDidMount(){
    setTimeout(function () {this.setState({maintrans: 0, mainop: 1})}.bind(this), 10);

  }
  prefill(){
    let yearinput = document.getElementById("year");
        yearinput.value = ("2019");
  }

  closeOnBoard(){
    this.setState({left: this.state.left -100, footop: 0, curnum:this.state.curnum + 1, signup: 1});
    // setTimeout(function () {this.setState({wrapdis:1})}.bind(this), 300);
    // this.props.initanim();
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
prefill(){
  let yearinput = document.getElementById("year");
      yearinput.value = ("2019");
}
nextPage(){
    this.setState({left: this.state.left - 33.3, page: this.state.page + 1});
    if(this.state.page === 2){
        this.prefill();
    }
}
prevPage(){
    this.setState({left: this.state.left + 33.3, page: this.state.page - 1});
}
setInstruction(cont){
    this.setState({altdis: 0, alert: cont});
    setTimeout(function () {this.setState({alertanim: 1})}.bind(this), 10);
    setTimeout(function () {this.setState({alertanim: 0})}.bind(this), 1100);
    setTimeout(function () {this.setState({altdis: 1})}.bind(this), 1400);
}

  render() {
    return (
      
                  <div className="addSchool" key="addpanel" style={{opacity: this.state.mainop, transform:this.maintransform[this.state.maintrans]}}>
                   
                  <div className="addSchoolWrap" style={{left:this.state.left + "%"}}>
                    {this.pagedetail[0]}
                    {this.pagedetail[1]}
                    {this.pagedetail[2]}
                    <div className= "instruction" key="notif" style={{opacity:this.state.alertanim, display:this.display[this.state.altdis]}}>
              {this.state.alert}
              </div>
              
            </div>
            <div className="xmark" onClick={(ev) => {this.setState({maintrans: 1, mainop: 0}); setTimeout(function () {this.props.close()}.bind(this), 200)}}>
                <svg width="25" height="25">
                <path d="M0 0 L25 25 M25 0 L0 25" />
                </svg>
              </div>
                  </div>
               
    );
  }
}

export default AddSchool;

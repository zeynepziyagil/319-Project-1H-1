import React from 'react'
import Popup from "reactjs-popup";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {Link} from "react-router-dom";

var assinfo ="Assignment 1: Design Report. ";
var uploadst="uploaded";
var gradest="not graded";
var feedbackst="given by instr";

function AssignmentsGroupPage() {
   var whoseprofile =0;
   var coursecirnum =3;
  var x =[];

  function showElement(anno){
    if ( whoseprofile === 1 ) 
      return (
        <div>
          <p>128 milyar dolar nerede?</p>
       </div> );
    else 
      return (
        <div>
          <p>128 milyar dolar nerede?.</p>
       </div> );
  }
  function fill(num) {
    for (let index = 0; index < num; index++) {
        x.push(<div><p>Request deadline extension is denied.</p></div>);
    }
  }
    
  function addx(){
    return ( 
      <div>
        <label>Give Feedback</label><br></br>
        <input class = "textfield "type="text" id="exp"/><br></br>
        <label>GiveGrade</label><br></br>
        <input class = "textfield "type="text" id="exp"/><br></br>
        </div>
        );
  }
    
  const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };

  return (
    <div className="asinfo">
        <center><h2>{assinfo}</h2></center>
        <center><h4>Upload status: &emsp;{uploadst}</h4>
        <h4>Grade status: &emsp;{gradest}</h4>
        <h4>Feedback status: &emsp;{feedbackst}</h4></center>

        <center><td>
        <h4>Give Feedback</h4>
        <Popup trigger={<button className="addann"><AiOutlinePlusCircle size="2.4em" /></button>}
        modalcontentStyle={contentStyle} >
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>&times;</a>
            <div className="content">{addx()}</div>
            <div className="actions">
              <button className="buttonxs">share</button>
              <button className="addann" onClick={() => { console.log("modal closed "); close();}}> close </button>
            </div>
          </div> )}
          </Popup></td></center>

        <center><h4>Show Feedback</h4><td>
        <Popup trigger={<button className="addann"><td><AiOutlinePlusCircle size="2.4em" /></td></button>}
        modalcontentStyle={contentStyle}>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}>&times;</a>
          <div className="content">{fill(coursecirnum)}{x.map(showElement)}</div>
          <div className="actions">
            <button className="buttonxs" onClick={() => { console.log("modal closed "); close();}}> close </button>
          </div>
          </div> )}
        </Popup></td></center>
    </div>
  );
}

export default AssignmentsGroupPage

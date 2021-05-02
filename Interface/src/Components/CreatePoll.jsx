import React, { UseState } from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";
import userEvent from "@testing-library/user-event";
import trypoll from "./trypoll"

import {AiOutlinePlusCircle} from "react-icons/ai";

  
function CreatePoll() {
    var newpoll =[];
    var whoseProfile = 0;
    var polnm ="poll 1"
    var coursecirnum=3;
    var pollname ="poll 1";
    
    function showAnswer(polly){
    return(<div><table><tr>
      <td><input type="radio" name ="answer" /></td>
      <td><p>{polly}</p> </td>
       </tr></table>        
    </div>);
    
    
    }
    
    const [info,setName] = React.useState({answer: ""});
    function handleChange(event) {
        setName({ ...info, [event.target.answer]: event.target.value });
    }
    
    
    
    
    function showPoll(pollx) {
      if(pollx.id==0)
      return(
            <div>
              <label><h3>{pollx.que}: </h3></label><br></br>
              <input className ="textfield" type="text" id="exp" onChange={handleChange} value={info.answer}/><br></br>
              
              </div>
      )
      else
        return(
          <div>
          <h3>{pollx.que}: </h3>
          {(pollx.ans).map(showAnswer)}
          </div>);
    
    }
    
    function Makepoll()
    {
        let cho =["Open Ended","Multiple Choice"];
        const[dispchoice,setChoice]=React.useState("");
            <div>
              <label><h3>How many questions you want to add? </h3></label><br></br>
              <input className ="textfield" type="text" id="exp" onChange={handleChange} value={info.answer}/><br></br>
              </div>
              var x =info.answer;
              for (let index = 0; index < x; index++) {
                <div>
                <label><h3>Choose type of question</h3></label><br></br>
                <hr/>
                {cho.map(result =>(<input type ="radio" value={result} name = "radiovalues" onChange={(e)=>setChoice(e.target.value)}/>))}
                <input className ="textfield" type="text" id="exp" onChange={handleChange} value={info.answer}/><br></br>
                </div>
               makequestion(dispchoice);
                  
              }
    
    }
    function makequestion(dispchoicey){
     if(dispchoicey== "Open Ended")
        {<div><label><h3>Enter question</h3></label><br></br>
        <input className ="textfield" type="text" id="exp" onChange={handleChange} value={info.answer}/><br></br>
        </div>}
    
    else{
        <div><label><h3>Enter question</h3></label><br></br>
            <input className ="textfield" type="text" id="exp" onChange={handleChange} value={info.answer}/><br></br>
            </div>
        var z = 5;
        var s = 0;
        var done = false;
        <div><label><h3>Enter choice num</h3></label><br></br>
            <input className ="textfield" type="text" id="exp" onChange={handleChange} value={info.answer}/><br></br>
        </div>
        var x = info.answer;
        while(z>0 && s<x)
        {z--;
        s++;
            <div><label><h3>Enter answer</h3></label><br></br>
            <input className ="textfield" type="text" id="exp" onChange={handleChange} value={info.answer}/><br></br>
            </div>
    
        }
    
    
    
    }
    
    
    }
    
    const contentStyle = {
        maxWidth: "600px",
        width: "90%"
      };
    
return(
    <Popup
      trigger={<button className="subbutton" type="button">{pollname}</button>}
      modal
      contentStyle={contentStyle}
    > 
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="content">
            {Makepoll()}
          {newpoll.map(showPoll)}
          </div>
          <div className="actions">
          <button
              className="buttonxs"
            >
              create poll
            </button>
            <button
              className="buttonxs"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close 
            </button>
          </div>
        </div>
      )}
    </Popup>
    );
}

export default Boxy(CreatePoll);
 
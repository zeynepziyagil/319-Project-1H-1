import React from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";
import trypoll from "./trypoll"

import {AiOutlinePlusCircle} from "react-icons/ai";

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


function showPoll(pollx) {
  if(pollx.id===0)
  return(
        <div>
          <label><h3>{pollx.que}: </h3></label><br></br>
          <input className ="textfield" type="text" id="exp"/><br></br>
          {/*expten answ çek*/}
          </div>
  )
  else
    return(
      <div>
      <h3>{pollx.que}: </h3>
      {(pollx.ans).map(showAnswer)}
      </div>);

}




const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };
  
const ToPoll = () => (


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
          {trypoll.map(showPoll)}
          </div>
          <div className="actions">
          <button
              className="buttonxs"
            >
              submit
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

export default Boxy(ToPoll);

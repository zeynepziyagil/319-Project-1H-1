import React from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";

import {AiOutlinePlusCircle} from "react-icons/ai";
var whoseProfile = 2;

function add(){
  return (
    <div>
      <label>AD Explanation</label><br></br>
       <input type="text" id="exp"/><br></br>            
   </div>);
}


const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };
  
  const GiveAdButton = () => (
    <Popup
      trigger={<button className="give-ad-button" type="button">Give Advertisement</button>}
      
      modal
      contentStyle={contentStyle}
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="content">
            { add()}
          </div>
          <center><div className="actions">
          <button
              className="buttonxs"
            >
              share
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
          </div></center>
        </div>
      )}
    </Popup>
  );

export default Boxy(GiveAdButton);

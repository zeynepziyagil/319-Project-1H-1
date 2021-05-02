import React from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";

import {AiOutlinePlusCircle} from "react-icons/ai";
var whoseProfile = 2;

function add(){
  return(<div>
                <label>People you want to work together with</label><br></br>
                <input type="text" id="people"/><br></br>
               
                
   </div>);
}


const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };
  
  const ReqFormation = () => (
    <Popup
      trigger={<button className="reqbutton" type="button">Request group formation</button>}
      
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
          <div className="actions">
          <button
              className="buttonxs"
            >
              request
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

export default Boxy(ReqFormation);

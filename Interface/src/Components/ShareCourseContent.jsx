import React from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";

import {AiOutlinePlusCircle} from "react-icons/ai";
var whoseProfile = 2;

function add(){
  return(<div>
                <label>Explanation</label><br></br>
                <input type="text" id="exp"/><br></br>
                <label>Drag a file</label><br></br>
                <input type="text" id="file"/><br></br>
                

   </div>);
}


const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };
  
  const ShareCourseContent = () => (
    <Popup
      trigger={<button className="give-ad-button" type="button">Share Course Content</button>}
      
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
          </div>
        </div>
      )}
    </Popup>
  );

export default Boxy(ShareCourseContent);

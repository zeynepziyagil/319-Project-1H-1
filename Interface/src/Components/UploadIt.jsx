import React from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";
import AddDocument from "./AddDocument";

import {AiOutlinePlusCircle} from "react-icons/ai";
var whoseProfile = 2;

function add(){
  return(<div>
                <label>Upload</label><br></br>
                <input className="textfield" type="text" id="exp"/><br></br>
                <AddDocument />
                
                

   </div>);
}


const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };
  
  const UploadIt = () => (
    <Popup
      trigger={<button  type="button">Upload</button>}
      
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

export default Boxy(UploadIt);

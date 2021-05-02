import React from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";

import {AiOutlinePlusCircle} from "react-icons/ai";

var whoseProfile = "instructor";


const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };
  
  const AddSign = () => (
    <Popup
      trigger={<button className="dashboardadd"><td><AiOutlinePlusCircle size="3em" /></td></button>}
      
      modal
      contentStyle={contentStyle}
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> Create Course </div>
          <div className="content">
            
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

export default Boxy(AddSign);

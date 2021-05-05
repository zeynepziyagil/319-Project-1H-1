import React from 'react'
import { Link } from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";

import { AiOutlinePlusCircle } from "react-icons/ai";
var whoseProfile = 2;

function add() {
  return (<div>
    <label>Announcement</label><br></br>
    <input type="text" id="announ" /><br></br>


  </div>);
}


const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};

const Addassign = () => (
  <Popup
    trigger={<buttonas className="addann"><td><AiOutlinePlusCircle size="1em" /></td></buttonas>}

    modal
    contentStyle={contentStyle}
  >
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
          </a>
        <div className="content">
          {add()}
        </div>
        <div className="actions">
          <button
            className="buttonxs"
          >
            announce
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

export default Boxy(Addassign);

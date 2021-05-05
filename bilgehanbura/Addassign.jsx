import React from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";
import AddDocument from "./AddDocument"
import {AiOutlinePlusCircle} from "react-icons/ai";
var whoseProfile = 2;

function add(){
  return(
  <div>
    <label>Course Name</label><br></br>
    <input type="text" id="CourseName"/><br></br>
    <label>Assignment Name</label><br></br>
    <input type="text" id="Assignmentname"/><br></br>
    <label>Assignment Due Date</label><br></br>
    <input type="text" id="Assignmentduedate"/><br></br>
    <label>Assignment Document</label><br></br>
    <AddDocument />   
    <label>Assignment explanation</label><br></br>
    <input type="text" id="Assignment explanation"/><br></br>    
</div>
);
}


const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };
  
  const Addassign = () => (
    <Popup
      trigger={<td><AiOutlinePlusCircle size="2em" /></td>}
      
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
              create assignment 
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

import React from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";

import {AiOutlinePlusCircle} from "react-icons/ai";


var whoseProfile = 1;


function addCourse(){
  return(<div>
                <label>CourseName</label><br></br>
                <input type="text" id="CourseName"/><br></br>
                <label>CourseCode</label><br></br>
                <input type="text" id="CourseCode"/><br></br>
                <label>CouseEnrollCode</label><br></br>
                <input type="text" id="CouseEnrollCode"/><br></br>      

   </div>);
}
function enrollCourse(){
  return(<div>
  <label>CourseCode</label><br></br>
  <input type="text" id="CourseCode"/><br></br>
  <label>CouseEnrollCode</label><br></br>
  <input type="text" id="CouseEnrollCode"/><br></br>      

</div>);
}

const contentStyle = {
    maxWidth: "600px",
    width: "90%"
  };
  
  const AddSign = () => (
    <Popup
      trigger={<buttonas className="dashboardadd"><td><AiOutlinePlusCircle size="3em" /></td></buttonas>}
      
      modal
      contentStyle={contentStyle}
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="content">
            {whoseProfile=== 1 ? addCourse():enrollCourse()}
          </div>
          <div className="actions">
          <button
              className="buttonxs"
            >
              done 
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

export default Boxy(AddSign);

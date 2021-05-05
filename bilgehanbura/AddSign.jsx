import React from 'react'
import {Link} from "react-router-dom";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";
import axios from "axios";
import {AiOutlinePlusCircle} from "react-icons/ai";


var whoseProfile = 1;

const contentStyle = {
  maxWidth: "600px",
  width: "90%"
};
  
  function AddSign(props) {
    var emailUser = sessionStorage.getItem('userMail'); 
    function enrollCourse(){
      return (
        <div>
          <label>CouseEnrollCode</label><br></br>
          <input onChange={handleChange} type="text" id="str"/><br></br>      
        </div>)
        ;
    }
    function addCourse(){
      return (
        <div>
          <label>CourseName</label><br></br>
          <input type="text" id="CourseName"/><br></br>
          <label>CourseCode</label><br></br>
          <input type="text" id="CourseCode"/><br></br>    
       </div>
       );
    }

    const [info,setInfo] = React.useState({str:""});
    function handleChange(event) {
        setInfo({ ...info, [event.target.id]: event.target.value });
        console.log(info.str);
    }
    
    function showMessage(event) {
      
        axios.post("http://localhost:8080/dashboard/enroll-course/" + emailUser,info).then(function(response){
           sessionStorage.setItem('userMail', info.mail);
            const sss = sessionStorage.getItem('userMail');
        });
    };
    return (
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
          <div className="content">
            {props.role === "instructor" ? addCourse() : enrollCourse()}
          </div>
          <div className="actions">
          <button onClick={showMessage} type="button" className="buttonxs">Enroll</button>
            <button className="buttonxs" onClick={() => { close();}}><Link to="Dashboard">Close</Link> </button>
          </div>
        </div>
      )}
    </Popup>
    );
  }

export default Boxy(AddSign);

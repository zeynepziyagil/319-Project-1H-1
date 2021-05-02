import React from 'react'
import Popup from "reactjs-popup";

var upcoming = "Next Meeting 09/05"
function MeetingsGroup() {
    function addx(){
        return(<div>
                      <label>Enter date</label><br></br>
                      <input type="text" id="exp"/><br></br>
                      
                      
      
         </div>);
      }
     
      
      
      const contentStyle = {
          maxWidth: "600px",
          width: "90%"
        };
        











    return (
        <div className="meeting">
            <h2>Group Meetings</h2>
        <h3>{upcoming}</h3>
        <h4>
        <Popup
      trigger={<button  type="button">Create</button>}
      
      modal
      contentStyle={contentStyle}
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="content">
            { addx()}
          </div>
          <div className="actions">
          <button
              className="buttonxs"
            >
              Create
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
        </h4>
        <h4><Popup
      trigger={<button  type="button">Remove</button>}
      
      modal
      contentStyle={contentStyle}
    >
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="content">
            { addx()}
          </div>
          <div className="actions">
          <button
              className="buttonxs"
            >
              remove
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
    </Popup></h4>
       
    </div>
    
    )
}

export default MeetingsGroup

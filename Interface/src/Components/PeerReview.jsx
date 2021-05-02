import React from 'react'
import StudentProfile from "./StudentProfile" 
import {Link} from "react-router-dom";
import PeerreviewPage from "./PeerreviewPage"
import Popup from "reactjs-popup";

var whoseprofile =2;
var member1="veli";
var member2="ali";
var member3 ="deniz";
function PeerReview() {
function ReviewOne(mem)
{function add(){
    return(<div>
                  <label>Comment</label><br></br>
                  <input type="text" id="exp"/><br></br>
                  
                  <label>Grade</label><br></br>
                  <input type="text" id="exp"/><br></br>
  
     </div>);
  }
  
  
  const contentStyle = {
      maxWidth: "600px",
      width: "90%"
    };
    return(<Popup
        trigger={<button  type="button">{mem}</button>}
        
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
                Review
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
      </Popup>)




}




    if(whoseprofile === 1)
    return (
        <div className="peerReview">
            <div className="top">
                <h2><Link to="PeerreviewPage">Peer Reviews</Link></h2>
                <h2><Link to="StudentProfile">{member1}</Link></h2>
                <h2><Link to="StudentProfile">{member2}</Link></h2> 
                <h2><Link to="StudentProfile">{member3}</Link></h2> 
            </div>
        </div>
    )
    else if(whoseprofile === 0)
    return(
        <div className="peerReview">
        <div className="top">
            <h2>Peer Reviews</h2>
            <h2>{ReviewOne(member1)}</h2>
            <h2>{ReviewOne(member2)}</h2> 
            <h2>{ReviewOne(member3)}</h2> 
        </div>
    </div>
    )
    else  return(
        <div className="peerReview">
        <div className="top">
            <h2>Peer Reviews</h2>
            <h2><Link to="StudentProfile">{member1}</Link></h2>
            <h2><Link to="StudentProfile">{member2}</Link></h2> 
            <h2><Link to="StudentProfile">{member3}</Link></h2> 
        </div>
    </div>
    )
}

export default PeerReview;

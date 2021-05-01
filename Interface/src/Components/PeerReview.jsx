import React from 'react'
import StudentProfile from "./StudentProfile" 
import {Link} from "react-router-dom";
import PeerreviewPage from "./PeerreviewPage"

var member1="veli";
var member2="ali";
var member3 ="deniz";
function PeerReview() {
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
}

export default PeerReview;

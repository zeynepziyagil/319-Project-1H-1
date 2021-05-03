import React from 'react'
import StudentProfile from "./StudentProfile" 
import {Link} from "react-router-dom";

var groupname ="1-H"
var member1="Yıldırım Demir";
var member2="Ali Ayhan";
var member3 ="Deniz Hayat";
function GroupInfoBox() {
    return (
        <div className="groupinfo">
            <center>
                <h2>{groupname}</h2>
                <h3><Link to="StudentProfile">{member1}</Link></h3>
                <h3><Link to="StudentProfile">{member2}</Link></h3> 
                <h3><Link to="StudentProfile">{member3}</Link></h3>
            </center>
        </div>
    )
}

export default GroupInfoBox;

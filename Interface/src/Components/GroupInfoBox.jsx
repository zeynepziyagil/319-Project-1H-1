import React from 'react'
import StudentProfile from "./StudentProfile" 
import {AiOutlineMinusCircle} from "react-icons/ai";

import {AiOutlinePlusCircle} from "react-icons/ai";

import {Link} from "react-router-dom";
var groupname ="1-H"
var member1="veli";
var member2="ali";
var member3 ="deniz";
function GroupInfoBox() {
    return (
        <div className="groupinfo">
            <h2>{groupname}</h2>
            <h3><Link to="StudentProfile">{member1}</Link></h3>
            <h3><Link to="StudentProfile">{member2}</Link></h3> 
            <h3><Link to="StudentProfile">{member3}</Link></h3> 
            <td><AiOutlinePlusCircle size="3em" /><h3>Add member</h3></td>
            <td><AiOutlineMinusCircle size="3em" /><h3>Remove member</h3></td>

        </div>
    )
}

export default GroupInfoBox;

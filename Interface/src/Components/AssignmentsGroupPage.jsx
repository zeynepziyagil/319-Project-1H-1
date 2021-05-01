import React from 'react'
import {AiOutlineMinusCircle} from "react-icons/ai";

import {AiOutlinePlusCircle} from "react-icons/ai";

import {Link} from "react-router-dom";
var assinfo ="Assignmentx: xxxx Report. ";
var uploadst="uploaded";
var gradest="not graded";
var feedbackst="given by instr";
function AssignmentsGroupPage() {
    return (
        <div className="asinfo">
        <h2>{assinfo}</h2>
        <h3><Link to="StudentProfile">member1</Link></h3>
        <h4>Upload status:{uploadst}</h4>
        <h4>Grade status:{gradest}</h4>
        <h4>Feedback status:{feedbackst}</h4>
        <td><AiOutlinePlusCircle size="3em" /><h3>Give Feedback</h3></td>
        <td><AiOutlinePlusCircle size="3em" /><h3>Show Feeback</h3></td>

    </div>
    )
}

export default AssignmentsGroupPage

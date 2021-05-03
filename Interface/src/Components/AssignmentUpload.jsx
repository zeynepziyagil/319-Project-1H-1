import React from 'react'
import UploadIt from "./UploadIt"
var upcoming = "Assignment 2";

function AssignmentUpload() {
    return (
        <div className="assi">
            <center><h2>Upcoming Assignments</h2></center>
            <center><h3>{upcoming}</h3></center>
            <h4><UploadIt/></h4>   
        </div>
    )
}

export default AssignmentUpload;

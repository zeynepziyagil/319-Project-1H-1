import React from 'react'
import UploadIt from "./UploadIt"
var upcoming = "assignment 2";
function AssignmentUpload() {
    return (
        <div className="assi">
            <h2>Upcoming Assignments</h2>
        <h3>{upcoming}</h3>
        <h4><UploadIt/></h4>
       
    </div>
    )
}

export default AssignmentUpload;

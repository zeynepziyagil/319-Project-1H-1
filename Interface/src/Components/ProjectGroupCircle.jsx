import React from 'react'
import {Link} from "react-router-dom";

var groupname = "Group 1-H";

export const ProjectGroupCircle = (props) => {
    return (
        <div className="circular-label">
        <Link to="GroupPage"><label className="dashboard-label">{groupname}</label></Link>
    </div>
    )
}




export default ProjectGroupCircle;

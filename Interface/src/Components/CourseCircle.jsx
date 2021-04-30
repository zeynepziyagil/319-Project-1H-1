import React from "react";
import {Link} from "react-router-dom";

function CourseCircle() {
    return (
        <div className="circular-label">
            <Link to="CoursePageStudent"><label className="dashboard-label">CS319 - Object Oriented Software Engineering</label></Link>
        </div>
    );
}
export default CourseCircle;
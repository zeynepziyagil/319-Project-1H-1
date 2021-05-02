import React from "react";
import {Link} from "react-router-dom";
var courselabel ="CS319 - Object Oriented Software Engineering"
var courseid =10;
function CourseCircle() {
    return (
        <div className="circular-label">
            <Link to="CoursePageStudent"><label className="dashboard-label">{courselabel}</label></Link>
        </div>
    );
}
export default CourseCircle;
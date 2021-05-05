import React from "react";
import {Link} from "react-router-dom";
var courselabel ="CS319 - Object Oriented Software Engineering"
var courseid =10;
function CourseCircle(props) {
    return (
        <div className="circular-label">
            <Link to="CoursePageStudent"><label className="dashboard-label">{props.name}</label></Link>
        </div>
    );
}
export default CourseCircle;
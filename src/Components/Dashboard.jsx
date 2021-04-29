import React from "react";
import LogoUpper from "./LogoUpper";
import CourseCircle from "./CourseCircle";
import Menu from "./Menu";
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <LogoUpper />
            <Link to="CoursePageStudent"><CourseCircle/></Link>
            <Menu />
        </div>
    );
}
export default Dashboard;
import React from "react";
import LogoUpper from "./LogoUpper";
import CourseCircle from "./CourseCircle";
import Menu from "./Menu";
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <LogoUpper />
            <CourseCircle/>
            <Menu />
        </div>
    );
}
export default Dashboard;
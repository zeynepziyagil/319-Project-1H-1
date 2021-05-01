import React from "react";
import LogoUpper from "./LogoUpper";
import CourseCircle from "./CourseCircle";
import ProjectGroupCircle from "./ProjectGroupCircle";
import AddSign from "./AddSign"
import PopUpTool from "./PopUpTool"

import Menu from "./Menu";
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <LogoUpper />
            <CourseCircle/>
            <ProjectGroupCircle/>
            <AddSign/>
            <Menu />
        </div>
    );
}
export default Dashboard;
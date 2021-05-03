import React from "react";
import LogoUpper from "./LogoUpper";
import CourseCircle from "./CourseCircle";
import ProjectGroupCircle from "./ProjectGroupCircle";
import AddSign from "./AddSign"
import PopUpTool from "./PopUpTool"

import Menu from "./Menu";
import {Link} from "react-router-dom";


function Dashboard() {
    var whoseprofile = 2;
    return (
        <div>
            <LogoUpper />
            <Menu /><br></br><br></br><br></br><br></br>
            <table>
                <tr>
                    <td><CourseCircle /></td>
                    <td>{whoseprofile === 0 || whoseprofile === 2 ? <ProjectGroupCircle/> : null}</td>
                    <td><AddSign/></td>
                </tr>
            </table>
        </div>
    );
}
export default Dashboard;
import React from "react";
import LogoUpper from "./LogoUpper";
import CourseCircle from "./CourseCircle";
import ProjectGroupCircle from "./ProjectGroupCircle";
import AddSign from "./AddSign"
import PopUpTool from "./PopUpTool"

import Menu from "./Menu";
import {Link} from "react-router-dom";


function Dashboard() {
    var whoseprofile = 0;
    var coursecirnum=1;
    var groupcirnum =1;
    var x =[];
    function showElement(circle)
    {
    return(<div><CourseCircle /></div>)
    
    }
    function fill(num)
    {
        for (let index = 0; index < num; index++) {
            x.push(<div><CourseCircle /></div>);
        }
    }
      
   
   
   
   
    return (
        <div>
            <LogoUpper />
            <Menu />
            {fill(coursecirnum)}{x.map(showElement)}
            <ProjectGroupCircle/>
            <AddSign/>
           
        </div>
    );
}
export default Dashboard;
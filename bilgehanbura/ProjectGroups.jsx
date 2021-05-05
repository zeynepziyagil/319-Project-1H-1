import React from "react";
import GroupPage from "./GroupPage"
import {Link} from "react-router-dom";

function ProjectGroups() {
    var whoseprofile = 0;
    var coursecirnum=3;
    var groupname ="1A"
    var x =[];
    function showElement(anno)
    { 
    return(<div>
     <h2><Link to="GroupPage"><p>{groupname}{'>'}</p></Link></h2>
       </div>)
      
    
    }
    function fill(num)
    {
        for (let index = 0; index < num; index++) {
            x.push( <h2><Link to="GroupPage"><p>{groupname} {'>'}</p></Link></h2>);
        }
    }
    return (
        <div className="project-group">
            <div className="top">
                <h2>Project Groups</h2>
            </div>
            <div>
            {fill(coursecirnum)}{x.map(showElement)}    
            </div>
        </div>
    );
}

export default ProjectGroups;
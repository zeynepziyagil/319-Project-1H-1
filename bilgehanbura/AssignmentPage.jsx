import React from "react";
import LogoUpper from "./LogoUpper";
import Menu from "./Menu";
import GroupsThatUploadedAssignment from "./GroupsThatUploadedAssignment";
import {Link} from "react-router-dom";
import {AiOutlineEdit} from "react-icons/ai";


function AssignmentPage() {

    function listGroups(group) {
        count++;
        return (
            <li key={group.id} className={group.className}>
                <Link to="/GroupPage">
                    {group.groupName}
                </Link>
            </li>
        );
    }
    
    function countRequest(group) {
        if ( group.request === true ) {
            count2++;
            return (
                <li className={group.className}>
                    {group.groupName}
                </li>
            );
        }
    }
    const [duedate, setDuedate] = React.useState(deadline)
    
    var totalNumber = 15;
    var count = 0;
    var count2 = 0;
    var deadline ="23.05.2021"
    var newDeadline = "";

    return (
        <div>
            <LogoUpper />
            <Menu />
            <center>
                <h1>Assignment 1 <AiOutlineEdit size="1.2em"/><br />
                    <p>(Due {deadline})</p>
                </h1>
            </center>
            <table>
            <tr>
            <td>
            <div className="uploaded-assignments">
                <center><h3>Uploaded Assignments</h3></center>
                    <ul>
                    {GroupsThatUploadedAssignment.map(listGroups)}
                    </ul>
            </div>
            </td>
            <td>
            <div className="assignment-stats">
                <center><h3>Assignment Statistics</h3></center>
                    <ul>
                        <li className="group-links">Number of the groups uploaded the assignment:&emsp;<b>{count}</b></li>
                        <li className="group-links">Uploading rate:&emsp;<b>{(count/totalNumber) * 100}%</b></li>
                    </ul>
            </div>
            </td>
            <td>
            <div className="extension-requests">
                <center><h3>Deadline Extension Requesting Groups</h3></center>
                    <ul>
                        {GroupsThatUploadedAssignment.map(countRequest)}
                        <li className="group-links">Request rate:&emsp;<b>{(count2/totalNumber) * 100}%</b></li>
                    </ul>
                    <hr />
                    <center><p className="group-links">Write the date you want as due date and press the button.</p></center>
                    <center><label className="group-links">New Deadline:</label></center>
                    <input type="text" className="deadline-input" id="deadline" placeholder="29.05.2021"/><br></br>
                    <button type="button">Extend Deadline</button>
            </div>
            </td>
            </tr>
            </table>
        </div>
    );
}

export default AssignmentPage;
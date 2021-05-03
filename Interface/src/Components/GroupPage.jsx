import React from 'react'
import Menu from "./Menu";
import LogoUpper from "./LogoUpper";
import {AiTwotoneCheckCircle} from "react-icons/ai"
import PeerReview from './PeerReview';
import {Link} from "react-router-dom";
import GroupInfoBox from "./GroupInfoBox"
import AssignmentUpload from './AssignmentUpload';
import MeetingsGroup from './MeetingsGroup';
import AssingmentChoices from './AssingmentChoices';
import PopUpTool from './PopUpTool';
import AssignmentsGroupPage from './AssignmentsGroupPage';
import GiveAdButton from './GiveAdButton';

var whoseprofile = 0;
var isMember = false;
var groupname = "GROUP 1-H";
export const GroupPage = (props) => {

    function addx(){
        return (
            <div>
              <label>Enter date</label><br></br>
              <input type="text" id="exp"/><br></br>
            </div>
            );
      }
     
      const contentStyle = {
          maxWidth: "600px",
          width: "90%"
        };
        

    if(isMember)
    return(
        <div>
            <LogoUpper />
            <h1 className="header-group-page">{groupname}</h1>
            <Menu />
            <PeerReview />
            <GroupInfoBox />
            <AssignmentUpload />
            <MeetingsGroup/>
            <AssingmentChoices/>
            <AssignmentsGroupPage/>
            <AssignmentsGroupPage/>
            <GiveAdButton />
        </div>
    )
    else
    return (
        <div>
            <h1 className="header-peer-review">{groupname}</h1>
            <LogoUpper />
            <Menu />
            <PeerReview />
            <GroupInfoBox />
            <AssignmentsGroupPage/>
            <AssignmentsGroupPage/>
            <buttonad>Give ADs</buttonad>

         
        </div>
    )
}





export default GroupPage;

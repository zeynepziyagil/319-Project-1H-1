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

var whoseprofile =0;





var groupname = "group 1-H";
export const GroupPage = (props) => {
    return (
        <div>
            <h1 className="header">{groupname}</h1>
            <LogoUpper />
            <Menu />
            <PeerReview />
            <GroupInfoBox />
            <AssignmentUpload />
            <MeetingsGroup/>
            <AssingmentChoices/>
            <AssignmentsGroupPage/>
            <AssignmentsGroupPage/>
            <buttonad>Give ADs</buttonad>

         
        </div>
    )
}





export default GroupPage;

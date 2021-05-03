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

var groupname = "GROUP 1-H";

function GroupPage() {

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
            <GiveAdButton />
        </div>
    );
}





export default GroupPage;

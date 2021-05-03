import React from "react";
import {Route, Link} from "react-router-dom";
import SignInPage from "./SignInPage";
import SignUpPageStudent from "./SignUpPageStudent";
import SignUpPageInstructor from "./SignUpPageInstructor";
import Dashboard from "./Dashboard";
import CoursePageStudent from "./CoursePageStudent";
import StudentProfile from "./StudentProfile";
import MessagePage from "./MessagePage";
import GroupPage from "./GroupPage";
import PeerreviewPage from "./PeerreviewPage";
import AssignmentPage from "./AssignmentPage";
import StudentProfileFromMyPointOfView from "./StudentProfileFromMyPointOfView";
import InstructorProfile from "./InstructorProfile";
import InstructorProfileFromMyPointOfView from "./InstructorProfileFromMyPointOfView";
import axios from "axios";
import GroupPageOtherPeople from "./GroupPageOtherPeople";
import TeachingAssistantProfile from "./TeachingAssistantProfile";
import TeachingAssistantProfileFromMyPointOfView from "./TeachingAssistantProfileFromMyPointOfView";

function App() {
    return (
        <div>
            <Route exact path="/" component={SignInPage} />
            <Route exact path="/SignUpStudent" component={SignUpPageStudent} />
            <Route exact path="/SignUpInstructor" component={SignUpPageInstructor} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/CoursePageStudent" component={CoursePageStudent} />
            <Route exact path="/StudentProfile" component={StudentProfile} />
            <Route exact path="/MessagePage" component={MessagePage} />
            <Route exact path="/GroupPage" component={GroupPage} />
            <Route exact path="/PeerreviewPage" component={PeerreviewPage} />
            <Route exact path="/AssignmentPage" component={AssignmentPage} />
            <Route exact path="/StudentProfileMyView" component={StudentProfileFromMyPointOfView} />
            <Route exact path="/InstructorProfile" component={InstructorProfile} />
            <Route exact path="/InstructorProfileMyView" component={InstructorProfileFromMyPointOfView} />
            <Route exact path="/GroupPageOtherPeople" component={GroupPageOtherPeople} />
            <Route exact path="/TeachingAssistantProfile" component={TeachingAssistantProfile} />
            <Route exact path="/TeachingAssistantProfileMyView" component={TeachingAssistantProfileFromMyPointOfView} />
        </div>
    );
}

export default App;
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
import PeerreviewPage from "./PeerreviewPage"

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
        </div>
    );
}

export default App;
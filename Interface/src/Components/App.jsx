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

function App() {

    /*const [userCourse, setUserCourse] = React.useState({})
    const fetchUserCourse = () => {
        axios.get("http://localhost:8080/dashboard/").then(res => {
            console.log(res);
            setUserCourse(res.data);
        });
    };

    React.useEffect(() => {
        fetchUserCourse();
    }, []);*/

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
        </div>
    );
}

export default App;
import React from "react";
import LogoUpper from "./LogoUpper";
import Menu from "./Menu";
import {TiEdit} from "react-icons/ti"
import 'react-calendar/dist/Calendar.css';
import axios from "axios";


function StudentProfileFromMyPointOfView() {
    var emailUser = sessionStorage.getItem('userMail');
    const [userProfile, setUserProfile] = React.useState({});
    const [userGroup, setUserGroup] = React.useState({});
    const str = "http://localhost:8080/profile/student/" + emailUser;
    const str1 = "http://localhost:8080/dashboard/group/"+emailUser;
    const fetchUserProfile = () => {
        axios.get(str).then(response => {
            setUserProfile(response.data);
        })
    };
    const fetchUserGroup = () => {
        axios.get(str1).then(response => {
            setUserGroup(response.data);
            console.log(response.data);
        })
    };
    React.useEffect(() => {
        fetchUserProfile();
        fetchUserGroup();
    }, []);
    
    return (
        <div>
            <LogoUpper />
            <Menu />
            <table className="profile-table">
                <tr>
                    <td><img src=""/></td>
                    <td className="profile-table-rows">
                        <tr><b>Name:</b> {userProfile.name}</tr>
                        <tr><b>Surname:</b> {userProfile.surname}</tr>
                        <tr><b>Department:</b> {userProfile.department}</tr>
                        <tr><b>Grade:</b> {userProfile.currentSemester}</tr>
                        <tr><b>Email:</b> {userProfile.mail}</tr>
                        <tr><b>Student ID:</b> {userProfile.studentId} </tr>
                        <tr><b>Group Number:</b> {userGroup.name}</tr>
                    </td>
                </tr>
            </table>
            <table className="comments-table profile-table-rows">
                <tr className="average-grade"><b>Average Grade:</b> 7.5/10</tr><br></br>
                <tr><b>COMMENTS</b></tr>
                <tr><textarea rows="6" cols="70" > * Very hardworking student. I'm glad to be a teammate with him :)))</textarea></tr>
            </table>
            <div className="edit-profile"><p>Edit Profile<TiEdit className="edit-icon" size="3em"/></p></div>
        </div>
    );
}

export default StudentProfileFromMyPointOfView;
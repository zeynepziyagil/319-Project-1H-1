import React from "react";
import LogoUpper from "./LogoUpper";
import Menu from "./Menu";
import {FiSend} from "react-icons/fi"
import {TiEdit} from "react-icons/ti"
import {GoLocation} from "react-icons/go";
import axios from "axios";

function TeachinAssistantProfileFromMyPointOfView() {
    var emailUser = sessionStorage.getItem('userMail');
    const [userProfile, setUserProfile] = React.useState({});
    const str = "http://localhost:8080/profile/ta/" + emailUser;
    const fetchUserProfile = () => {
        axios.get(str).then(response => {
            setUserProfile(response.data);
        })
    };
    React.useEffect(() => {
        fetchUserProfile();
    }, []);
    var space = "  ";
    return (
        <div>
            <LogoUpper />
            <Menu />
            <table className="profile-table2">
                <tr>
                    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xa--qqd4a-aoCBVuQmHEoDe-70ZNe8YTzQ&usqp=CAU"/></td>
                    <td className="profile-table-rows">
                    <tr><b>Name:</b> {userProfile.name}</tr>
                    <tr><b>Surname:</b> {userProfile.surname}</tr>
                    <tr><b>Email:</b> {userProfile.mail}</tr>
                    <tr><b>Courses: </b>CS319, CS315</tr>
                    <tr><b>Location of Office:</b> {userProfile.officeLocation}{space}<GoLocation size="1.2em" /></tr>
                    </td>
                </tr>
            </table>
            <div className="edit-profile2"><p>Edit Profile<TiEdit className="edit-icon" size="3em"/></p></div>
        </div>
    );
}

export default TeachinAssistantProfileFromMyPointOfView;
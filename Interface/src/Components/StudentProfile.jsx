import React from "react";
import LogoUpper from "./LogoUpper";
import Menu from "./Menu";
import {FiSend} from "react-icons/fi"

function StudentProfile(props) {
    return (
        <div>
            <LogoUpper />
            <Menu />
            <table className="profile-table">
                <tr>
                    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2HDymu2u6Ds4U3-bioGXvnp-yHqz8bRehw&usqp=CAU"/></td>
                    <td className="profile-table-rows">
                        <tr><b>Name:</b>{props.name}</tr>
                        <tr><b>Surname:</b>{props.surname}</tr>
                        <tr><b>Department:</b>{props.department}</tr>
                        <tr><b>Grade:</b>{props.grade}</tr>
                        <tr><b>Email:</b> {props.mail}</tr>
                        <tr><b>Student ID:</b>{props.id}</tr>
                        <tr><b>Group Number:</b>{props.groupNumber}</tr>
                    </td>
                </tr>
            </table>
            <table className="comments-table profile-table-rows">
                <tr><b>Average Grade:</b> 7.5/10</tr><br></br>
                <tr><b>COMMENTS</b></tr>
                <tr><textarea rows="6" cols="70" ></textarea></tr>
            </table>
            <button className="send-message-button2" type="button"><FiSend size="1.2em" className="message-icon"/>&emsp;Send Message</button> 
        </div>
    );
}

export default StudentProfile;
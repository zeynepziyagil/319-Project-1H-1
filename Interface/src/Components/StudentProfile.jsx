import React from "react";
import LogoUpper from "./LogoUpper";
import Menu from "./Menu";
import {FiSend} from "react-icons/fi"

function StudentProfile() {
    return (
        <div>
            <LogoUpper />
            <Menu />
            <table className="profile-table">
                <tr>
                    <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2HDymu2u6Ds4U3-bioGXvnp-yHqz8bRehw&usqp=CAU"/></td>
                    <td className="profile-table-rows">
                        <tr><b>Name:</b> Ahmet</tr>
                        <tr><b>Surname:</b> Yıldırım</tr>
                        <tr><b>Department:</b> CS</tr>
                        <tr><b>Grade:</b> 3</tr>
                        <tr><b>Email:</b> ahmet@yıldırım.com</tr>
                        <tr><b>Student ID:</b> 21507854</tr>
                        <tr><b>Group Number:</b> 1-H</tr>
                    </td>
                </tr>
            </table>
            <table className="comments-table profile-table-rows">
                <tr><b>Average Grade:</b> 7.5/10</tr><br></br>
                <tr><b>COMMENTS</b></tr>
                <tr><textarea rows="6" cols="70" ></textarea></tr>
            </table>
            <button className="send-message-button" type="button"><FiSend size="1.2em" className="message-icon"/>&emsp;Send Message</button> 
        </div>
    );
}

export default StudentProfile;
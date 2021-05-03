import React from "react";
import LogoUpper from "./LogoUpper";
import Menu from "./Menu";
import {GoLocation} from "react-icons/go"
import {FiSend} from "react-icons/fi"
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function TeachingAssistantProfile() {
    var space = "  ";
    return (
        <div>
        <LogoUpper />
        <Menu />
        <table className="profile-table2">
            <tr>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xa--qqd4a-aoCBVuQmHEoDe-70ZNe8YTzQ&usqp=CAU"/></td>
                <td className="profile-table-rows">
                    <tr><b>Name:</b> Mehmet Ali</tr>
                    <tr><b>Surname:</b> Kırılmaz</tr>
                    <tr><b>Department:</b> CS</tr>
                    <tr><b>Email:</b> memoli@yıldırım.com</tr>
                    <tr><b>Courses: </b>CS319, CS315</tr>
                    <tr><b>Location of Office:</b> EA-401{space}<GoLocation size="1.2em" /></tr>
                </td>
            </tr>
        </table>
        <button className="send-message-button" type="button"><FiSend size="1.2em" className="message-icon"/>&emsp;Send Message</button> 
    </div>
    );
}

export default TeachingAssistantProfile;
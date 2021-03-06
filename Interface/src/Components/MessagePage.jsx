import React from "react";
import LogoUpper from "./LogoUpper";
import Menu from "./Menu";
import {RiArrowRightSLine} from "react-icons/ri"
import Chat from "./Chat";

var name = "CS319";
var name2 = "Group 1-H"; 
var whoseProfile = 2;

function showButton() {
    return (
        <div>
            <button type="button">{name2}</button>
        </div>
    );
}

function MessagePage() {
    return (
        <div>
            <LogoUpper />
            <Menu />
            <h3 className="header-mes">Send Messages To:</h3>
            <div className="chat">
                <h3 className="name">Onat Postacı</h3>
                <Chat />
            </div>
            <div className="message">
                <button type="button">{name}</button>
                {whoseProfile === 0 ? showButton(): ( whoseProfile === 1 ? null : showButton())}
                <div className="dropdown">
                    <button className="dropbtn">Direct Message</button>
                    <div className="dropdown-content">
                    <a href="#"><RiArrowRightSLine />Bilgehan Akcan</a>
                    <a href="#"><RiArrowRightSLine />Zeynep Büşra Ziyagil</a>
                    <a href="#"><RiArrowRightSLine />İlke Kaş</a>
                    </div>
                </div>
            </div>
            
            <input className="input-message" type="text" placeholder="Type the message you want to send."></input>
            <button className="send-message" type="button">Send</button>
        </div>
    );
}

export default MessagePage;
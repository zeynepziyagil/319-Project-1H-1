import React from "react";
import {SiCircle} from "react-icons/si";
import {IoLogOutOutline} from "react-icons/io5";

const SidebarData = [
    {
        id: 1,
        title: "Dashboard",
        path: "/Dashboard",
        icon: <SiCircle size="1.5em" />,
        className: "nav-text"
    },
    {
        id: 2,
        title: "Log Out",
        path: "/",
        icon: <IoLogOutOutline size="1.5em" />,
        className: "nav-text"
    },
];

export default SidebarData;
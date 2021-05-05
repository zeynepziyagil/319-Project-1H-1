import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarData from "./SidebarData";

function NavigationBar() {

    const [sidebar, arrangeSidebar] = React.useState(false);

    function setSidebar() {
        arrangeSidebar(!sidebar);
    }

    function navBarItems(data) {
        return (
            <li key={data.id} path={data.path} className={data.className}>
                <Link to={data.path}>
                    {data.icon}&emsp;
                    <p>{data.title}</p>
                </Link>
            </li>
        );
    }

    return (
        <div>
            <div>
                <Link to="#"><AiOutlineMenu size="3em" onClick={setSidebar} /></Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"} dir="RTL">
                <ul onClick={setSidebar}>
                    <Link to="#">
                        <AiOutlineClose className="nav-text" size="3em" onClick={setSidebar} />
                    </Link>
                    {SidebarData.map(navBarItems)}
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;
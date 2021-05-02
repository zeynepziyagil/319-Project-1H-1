import React from "react"
import {AiOutlineBell} from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {Link} from "react-router-dom";
import NavigationBar from "./NavigationBar";

var whoseProfile = "student";

function Menu() {
    return (
        <div>
            <table className="icon">
                <tr >
                    <td><AiOutlineBell size="3em" /></td>
                    <td><Link to="MessagePage"> <BiMessageDetail size="3em" /></Link></td>
                    <td>
                        {whoseProfile === "student" ? <Link to="StudentProfileMyView"><CgProfile size="3em" /></Link> : <Link to="Dashboard"><CgProfile size="3em" /></Link>}
                    </td>
                    <td><NavigationBar /></td>
                </tr>
            </table>
        </div>
    );
}

export default Menu;
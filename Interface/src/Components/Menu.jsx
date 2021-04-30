import React from "react"
import {AiOutlineBell} from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {Link} from "react-router-dom";
import NavigationBar from "./NavigationBar";

var whoseProfile = "instructor";

function Menu() {
    return (
        <div>
            <table className="icon">
                <tr >
                    <td><AiOutlineBell size="3em" /></td>
                    <td><BiMessageDetail size="3em" /></td>
                    <td>
                        {whoseProfile === "instructor" ? <Link to="StudentProfile"><CgProfile size="3em" /></Link> : <Link to="Dashboard"><CgProfile size="3em" /></Link>}
                    </td>
                    <td><NavigationBar /></td>
                </tr>
            </table>
        </div>
    );
}

export default Menu;
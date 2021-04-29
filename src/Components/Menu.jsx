import React from "react"
import {AiOutlineBell} from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {AiOutlineMenu} from "react-icons/ai";

function Menu() {
    return (
        <div>
            <table className="icon">
                <tr >
                    <td><AiOutlineBell size="3em" /></td>
                    <td><BiMessageDetail size="3em" /></td>
                    <td><CgProfile size="3em" /></td>
                    <td><AiOutlineMenu size="3em" /></td>
                </tr>
            </table>
        </div>
    );
}

export default Menu;
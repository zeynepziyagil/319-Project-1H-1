import React from "react"
import {AiOutlineBell} from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {Link} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import axios from "axios";

var whoseProfile = "student";

function Menu() {
    var emailUser = sessionStorage.getItem('userMail'); 
    const [userRole, setUserRole] = React.useState({})
    const str3 = "http://localhost:8080/dashboard/enroll-role/" + emailUser;
    const fetchUserRole = () => {
        axios.get(str3).then(response => {
            console.log(response.data);
            setUserRole(response.data);
        })
    };
    React.useEffect(() => {
        fetchUserRole();
    }, []);
    return (
        <div>
            <table className="icon">
                <tr >
                    <td><AiOutlineBell size="3em" /></td>
                    <td><Link to="MessagePage"> <BiMessageDetail size="3em" /></Link></td>
                    <td>
                        {userRole.str === "student" ? <Link to="StudentProfileMyView"><CgProfile size="3em" /></Link> : (userRole.str === "teaching assistant" ? <Link to="TeachingAssistantProfileMyView"><CgProfile size="3em" /></Link>: <Link to="InstructorProfileMyView"><CgProfile size="3em" /></Link>) }
                    </td>
                    <td><NavigationBar /></td>
                </tr>
            </table>
        </div>
    );
}

export default Menu;
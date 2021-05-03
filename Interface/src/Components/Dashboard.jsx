import React from "react";
import LogoUpper from "./LogoUpper";
import CourseCircle from "./CourseCircle";
import ProjectGroupCircle from "./ProjectGroupCircle";
import AddSign from "./AddSign"
import PopUpTool from "./PopUpTool"
import axios from "axios";
import Menu from "./Menu";
import {Link} from "react-router-dom";


function Dashboard() {
    var whoseprofile = 2;
    const [userCourse, setUserCourse] = React.useState({})
    const fetchUserCourse = () => {
        axios.get("http://localhost:8080/dashboard").then(res => {
            console.log(res);
            setUserCourse(res.data);
        });
    };

    React.useEffect(() => {
        fetchUserCourse();
    }, []);

    return (
        <div>
            <LogoUpper />
            <Menu /><br></br><br></br><br></br><br></br>
            <table>
                <tr>
                    <td><CourseCircle name={userCourse.name}/></td>
                    <td>{whoseprofile === 0 || whoseprofile === 2 ? <ProjectGroupCircle/> : null}</td>
                    <td><AddSign/></td>
                </tr>
            </table>
        </div>
    );
}
export default Dashboard;
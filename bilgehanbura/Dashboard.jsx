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
    /*componentDidMount =() =>{
        const email = localStorage.getItem('userMail');
        //this.setState({ email });
      }*/

    var emailUser = sessionStorage.getItem('userMail'); 
    const [userCourse, setUserCourse] = React.useState({})
    const [userGroup, setUserGroup] = React.useState({})
    const [userRole, setUserRole] = React.useState({})
    const str = "http://localhost:8080/dashboard/" + emailUser;
    const str2 = "http://localhost:8080/dashboard/group/" + emailUser; 
    const str3 = "http://localhost:8080/dashboard/enroll-role/" + emailUser;
    console.log(userCourse);
    console.log(emailUser);
    const fetchUserCourse = () => {
        axios.get(str).then(res => {
            console.log(res.data);
            setUserCourse(res.data);
        });
    };
    const fetchUserGroup = () => {
        axios.get(str2).then(response => {
            console.log(response.data);
            setUserGroup(response.data);
        })
    };
    const fetchUserRole = () => {
        axios.get(str3).then(response => {
            console.log(response.data);
            setUserRole(response.data);
        })
    };
    React.useEffect(() => {
        fetchUserCourse();
        fetchUserGroup();
    }, []);
    return (
        <div>
            <LogoUpper />
            <Menu /><br></br><br></br><br></br><br></br>
            <table>
                <tr>
                    <td>{userCourse.code != null ? <CourseCircle name={userCourse.name}/> : <label></label>}</td>
                    <td>{userGroup.id != null ? <ProjectGroupCircle name={userGroup.name}/> : <label></label>}</td>
                    <td>{userCourse.code == null ? <AddSign role={userRole.str}/>: <label></label>}</td>
                </tr>
            </table>
        </div>
    );
}
export default Dashboard;
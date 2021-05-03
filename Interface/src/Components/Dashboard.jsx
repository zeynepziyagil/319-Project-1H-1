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
    var whoseprofile = 2;
    const [userCourse, setUserCourse] = React.useState({})
    const [userGroup, setUserGroup] = React.useState({})
    const str = "http://localhost:8080/dashboard/" + emailUser;
    const str2 = "http://localhost:8080/dashboard/group/" + emailUser; 
    const fetchUserCourse = () => {
        axios.get(str).then(res => {
            console.log(res);
            setUserCourse(res.data);
        });
    };
    const fetchUserGroup = () => {
        axios.get(str2).then(response => {
            console.log(response);
            setUserGroup(response.data);
            console.log(userGroup.maxMemberNum);
        })
    };
    React.useEffect(() => {
        fetchUserCourse();
    }, []);
    React.useEffect(() => {
        fetchUserGroup();
    }, []);
    return (
        <div>
            <LogoUpper />
            <Menu /><br></br><br></br><br></br><br></br>
            <table>
                <tr>
                    <td><CourseCircle name={userCourse.name}/></td>
                    <td>{whoseprofile === 0 || whoseprofile === 2 ? <ProjectGroupCircle name={userGroup.name}/> : null}</td>
                    <td><AddSign/></td>
                </tr>
            </table>
        </div>
    );
}
export default Dashboard;
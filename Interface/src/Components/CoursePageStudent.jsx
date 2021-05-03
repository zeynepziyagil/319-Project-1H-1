import React from "react";
import Advertisement from "./Advertisement";
import Announcement from "./Announcement";
import LogoUpper from "./LogoUpper";
import Menu from "./Menu";
import Poll from "./Poll";
import ProjectGroups from "./ProjectGroups";
import { AiTwotoneCheckCircle } from "react-icons/ai"
import Addassign from "./Addassign";
import Addannoun from "./Addannoun";
import ShareCourseContent from "./ShareCourseContent";
import ReqFormation from "./ReqFormation";
import AssingmentChoices from "./AssingmentChoices";
import CoursePAssi from "./CoursePAssi"
import trypoll from "./trypoll"
import ToPoll from "./ToPoll"
import axios from "axios";
function CoursePageStudent() {

    var weeknum = 5;
    var z = 0;
    var x = [];
    var elements = [];
    var whoseProfile = 1;
    const [userCourse, setUserCourse] = React.useState({})
    const emailUser = sessionStorage.getItem('userMail');
    const str = "http://localhost:8080/coursePage/" + emailUser;
    const fetchUserCourse = () => {
        axios.get(str).then(res => {
            console.log(res);
            setUserCourse(res.data);
        });
    };
    React.useEffect(() => {
        fetchUserCourse();
    }, []);
    function showElement(add) {
        if (z < weeknum) { z++; }
        if (elements.weeknum !== 0 && whoseProfile === 1)
            return (<div><tr><th className="table-headers">WEEK {z}</th><h5><Addassign /></h5></tr>

                <tr><AiTwotoneCheckCircle size="0.7em" />&emsp;{elements}</tr>
            </div>)
        else if (elements.weeknum !== 0)
            return (<div><tr><th className="table-headers">WEEK {z}</th></tr>

                <tr><AiTwotoneCheckCircle size="0.7em" />&emsp;{elements}</tr>
            </div>)
        else
            return (<div><tr><th className="table-headers">WEEK {z}</th></tr>
            </div>)

    }
    function fill(num) {
        for (let index = 0; index < num; index++) {
            x.push(<div><tr><th className="table-headers">WEEK {weeknum}</th></tr>
            </div>


            );
        }
    }

    if (whoseProfile === 2)
        return (
            <div>
                <h1 className="header">{userCourse.name}</h1>

                <LogoUpper />
                <Announcement />

                <Poll />
                <ProjectGroups />
                <Menu />

                <CoursePAssi />

                <table className="table">

                    {fill(weeknum)}{x.map(showElement)}
                </table>
            </div>
        );
    else if (whoseProfile === 1)
        return (<div>
            <h1 className="header">{userCourse}</h1>
            <LogoUpper />
            <Announcement />

            <Poll />
            <ProjectGroups />
            <Menu />
            <ShareCourseContent />
            <CoursePAssi />
            <table className="table">

                {fill(weeknum)}{x.map(showElement)}
            </table>
        </div>);
    else
        return (<div>
            <h1 className="header">{userCourse}</h1>
            <LogoUpper />
            <Announcement />

            <Poll />
            <ProjectGroups />
            <ReqFormation />
            <Advertisement />
            <Menu />
            <table className="table">

                {fill(weeknum)}{x.map(showElement)}
            </table>
        </div>);

}

export default CoursePageStudent;
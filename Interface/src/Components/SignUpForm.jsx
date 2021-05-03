import userEvent from "@testing-library/user-event";
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
function SignUpForm() {
    const [info,setName] = React.useState({name: "", surname: "", mail: "", department: "", grade: null, studentId: "", password: ""});

    const [password2, setPassWord2] = React.useState("");

    function handleChange(event) {
        setName({ ...info, [event.target.id]: event.target.value });
    }

    function showMessage(event) {
        /*if (info.password != password2) {
            alert("Passwords do not match");
        }
        else
        {*/
            axios.post("http://localhost:8080/sign-up/Student", info).then(function(response){
            console.log(response);
          });
        //}
    }

    function compare(event) {
        setPassWord2(event.target.value);
    }
    return (
        <div className="signup">
            <h3 className="name">Sign Up</h3>
            <form>
                <center>
                    <table>
                        <tr>
                            <td><Link to="SignUpInstructor"><input type="radio" name="user" id="instructor/ta" value="instructor/ta"/></Link></td>
                            <td><Link to="SignUpInstructor"><label for="instructor/ta">Instructor/TA</label></Link></td>
                            <td><input type="radio" name="user" id="student" value="student"></input></td>
                            <td><label for="student">Student</label></td>
                        </tr>
                    </table>
                </center>
                <label>Name</label><br></br>
                <input onChange={handleChange} type="text" id="name" value={info.name}/><br></br>
                <label>Surname</label><br></br>
                <input onChange={handleChange} type="text" id="surname" value={info.surname}/><br></br>
                <label>Email</label><br></br>
                <input onChange={handleChange} type="text" id="mail" value={info.mail}/><br></br>
                <label>Department</label><br></br>
                <input onChange={handleChange} type="text" id="department" value={info.department}/><br></br>
                <label>Grade</label><br></br>
                <input onChange={handleChange} type="text" id="grade" value={info.grade}/><br></br>
                <label>Student ID</label><br></br>
                <input onChange={handleChange} type="text" id="studentId" value={info.studentId}/><br></br>
                <label>Password</label><br></br>
                <input onChange={handleChange} type="password" id="password" value={info.password}/><br></br>
                <label>Confirm Password</label><br></br>
                <input onChange={compare} type="password" id="confirmPassword" value={password2}/><br></br>
                <button onClick={showMessage}type="button"><Link to="Dashboard">Sign Up</Link></button>
            </form>
        </div>
    );
}

export default SignUpForm;
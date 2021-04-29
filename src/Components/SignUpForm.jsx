import React from "react";
import {Link} from "react-router-dom";

function SignUpForm() {
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
                <input type="text" id="name"/><br></br>
                <label>Surname</label><br></br>
                <input type="text" id="surname"/><br></br>
                <label>Email</label><br></br>
                <input type="text" id="email"/><br></br>
                <label>Department</label><br></br>
                <input type="text" id="department"/><br></br>
                <label>Grade</label><br></br>
                <input type="text" id="grade"/><br></br>
                <label>Student ID</label><br></br>
                <input type="text" id="id"/><br></br>
                <label>Password</label><br></br>
                <input type="password" id="password"/><br></br>
                <label>Confirm Password</label><br></br>
                <input type="password" id="confirmPassword"/><br></br>
                <button type="button"><Link to="Dashboard">Sign Up</Link></button>
            </form>
        </div>
    );
}

export default SignUpForm;
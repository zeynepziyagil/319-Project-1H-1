import React from "react";
import {Link} from "react-router-dom";

function SignUpForm2() {
    return (
        <div className="signup-instructor">
            <h3 className="name">Sign Up</h3>
            <form>
                <center>
                    <table>
                        <tr>
                            <td><input type="radio" name="user" id="instructor/ta" value="instructor/ta"/></td>
                            <td><label for="instructor/ta">Instructor/TA</label></td>
                            <td><Link to="SignUpStudent"><input type="radio" name="user" id="student" value="student"/></Link></td>
                            <td><Link to="SignUpStudent"><label for="student">Student</label></Link></td>
                        </tr>
                    </table>
                </center>
                <label>Name</label><br></br>
                <input type="text" id="name"/><br></br>
                <label>Surname</label><br></br>
                <input type="text" id="surname"/><br></br>
                <label>Email</label><br></br>
                <input type="text" id="email"/><br></br>
                <label>Password</label><br></br>
                <input type="password" id="password"/><br></br>
                <label>Confirm Password</label><br></br>
                <input type="password" id="confirmPassword"/><br></br>
                <center>
                <p>Are you an instructor or a teaching assistant? Select below.</p>
                <td><label for="instructor">Instructor</label><input type="radio" name="user" id="instructor" value="instructor"/></td>
                <td><label for="ta">Teaching Assistant</label><input type="radio" name="user" id="ta" value="ta"/></td>
                </center>
                <button type="button"><Link to="Dashboard">Sign Up</Link></button>
            </form>
        </div>
    );
}

export default SignUpForm2;
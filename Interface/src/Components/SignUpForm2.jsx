import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function SignUpForm2() {
    const [info,setName] = React.useState({name: "", surname: "", mail: "", password: "", role: ""});

    function handleChange(event) {
        setName({ ...info, [event.target.id]: event.target.value });
    }

    function showMessage(event) {
        axios.post("http://localhost:8080/sign-up/Instructor-TA", info).then(function(response){
            console.log(response);
          });
    };
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
                <input onChange={handleChange} type="text" id="name" value={info.name}/><br></br>
                <label>Surname</label><br></br>
                <input onChange={handleChange} type="text" id="surname" value={info.surname}/><br></br>
                <label>Email</label><br></br>
                <input onChange={handleChange} type="text" id="mail" value={info.mail}/><br></br>
                <label>Password</label><br></br>
                <input onChange={handleChange} type="password" id="password" value={info.password}/><br></br>
                <label>Confirm Password</label><br></br>
                <input type="password" id="confirmPassword"/><br></br>
                <center>
                <p>Are you an instructor or a teaching assistant? Select below.</p>
                <td><label for="instructor">Instructor</label><input onChange={handleChange} type="radio" name="user" id="role" value="instructor"/></td>
                <td><label for="ta">Teaching Assistant</label><input onChange={handleChange} type="radio" name="user" id="role" value="teaching assistant"/></td>
                </center>
                <button onClick={showMessage} type="button"><Link to="Dashboard">Sign Up</Link></button>
            </form>
        </div>
    );
}

export default SignUpForm2;
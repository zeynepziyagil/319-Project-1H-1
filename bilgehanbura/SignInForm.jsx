import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Dashboard from "./Dashboard";

function SignInForm() {
    const [info,setInfo] = React.useState({mail: "", password: ""});
    function handleChange(event) {
        setInfo({ ...info, [event.target.id]: event.target.value });
    }
    
    function showMessage(event) {
        console.log(info.mail);
        axios.post("http://localhost:8080/sign-in",info).then(function(response){
            console.log(response.data);
            sessionStorage.setItem('userMail', info.mail);
            const sss = sessionStorage.getItem('userMail');
            console.log(info.mail);
            console.log(sss);
        });
    };

   
    return (
        
        <div className="signin">
            <h3 className="name">Sign In</h3>
            <form>
                <label>Email</label><br></br>
                <input onChange={handleChange} type="text" id="mail" value={info.mail}/><br></br>
                <label>Password</label><br></br>
                <input onChange={handleChange} type="password" id="password" value={info.password}/><br></br>
                <button onClick={showMessage} type="button"><Link to="Dashboard">Sign In</Link></button>

            </form>
            <hr />
            <p className="name">If you don't have an account:</p>
            <button type="button"><Link to="SignUpStudent">Sign Up</Link></button>
        </div>
    );
}

export default SignInForm;
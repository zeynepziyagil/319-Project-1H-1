import React from "react";
import {Link} from "react-router-dom";

function SignInForm() {
    return (
        <div className="signin">
            <h3 className="name">Sign In</h3>
            <form>
                <label>Email</label><br></br>
                <input type="text" id="email"/><br></br>
                <label>Password</label><br></br>
                <input type="password" id="password"/><br></br>
                <button type="button"><Link to="Dashboard">Sign In</Link></button>
            </form>
            <hr />
            <p className="name">If you don't have an account:</p>
            <button type="button"><Link to="SignUpStudent">Sign Up</Link></button>
        </div>
    );
}

export default SignInForm;
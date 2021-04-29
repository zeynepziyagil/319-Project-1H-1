import React from "react"

function Advertisement() {
    return (
        <div>
            <div className="advertisement">
                <div className="top">
                    <h2>Advertisement</h2>
                </div>
                <div>
                    <p>Looking for a group member who is qualified in JavaScript.</p>
                    <p>I don't have a group. Please contact me if you are looking for a group member.</p>
                </div>
            </div>
            <button className="give-ad-button" type="button">Give Advertisement</button>
        </div>
    );
}

export default Advertisement;
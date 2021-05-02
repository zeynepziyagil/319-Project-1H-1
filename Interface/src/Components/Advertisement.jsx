import React from "react"
import GiveAdButton from "./GiveAdButton";



function Advertisement() {
    var whoseprofile = 0;
    var coursecirnum=1;
    var x =[];
    function showElement(add)
    {
    return(<div><p>Looking for a group member who is qualified in JavaScript.</p>
       </div>)
    
    }
    function fill(num)
    {
        for (let index = 0; index < num; index++) {
            x.push(<div><p>Looking for a group member who is qualified in JavaScript.</p>
                </div>);
        }
    }
    return (
        <div>
            <div className="advertisement">
                <div className="top">
                    <h2>Advertisement</h2>
                </div>
                <div>
                {fill(coursecirnum)}{x.map(showElement)}
                </div>
            </div>
            <GiveAdButton />
        </div>
    );
}

export default Advertisement;
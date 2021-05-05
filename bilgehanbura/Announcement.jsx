import React from "react"
import Addannoun from "./Addannoun";

function Announcement() {
    var whoseprofile = 1;
    var coursecirnum=3;
    var x =[];
    function showElement(anno)
    { if(whoseprofile === 1)
    return(<div>
        <p>128 milyar dolar nerede?</p>

       </div>)
       else return(<div>
        <p>128 milyar dolar nerede?.</p>

       </div>)
    
    }
    function fill(num)
    {
        for (let index = 0; index < num; index++) {
            x.push(<div><p>Request deadline extension is denied.</p>

                </div>);
        }
    }
    
    if(whoseprofile !== 1)
    return (
        <div className="announcement">
            <div className="top">
                <h2>Announcements</h2>
            </div>
            <div>
            {fill(coursecirnum)}{x.map(showElement)}

            </div>
        </div>
    );
    else
    return (
        <div className="announcement">
            <div className="top">
                <h2>Announcements</h2>
            </div>
            <div>
            {fill(coursecirnum)}{x.map(showElement)}
            <h8><Addannoun/></h8>
            </div>
        </div>
    );
}

export default Announcement;



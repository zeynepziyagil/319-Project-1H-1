import React from "react";
import ToPoll from "./ToPoll"
import CreatePoll from "./CreatePoll"
function Poll() {
    var whoseprofile = 1;
    var coursecirnum=3;
    var x =[];
    function showElement(anno)
    { if(whoseprofile !== 1)
    return(<div>
      <ToPoll/>
       </div>)
       else return(<CreatePoll/>)
    
    }
    function fill(num)
    {
        for (let index = 0; index < num; index++) {
            x.push(<div><p>Request deadline extension is denied.</p>

                </div>);
        }
    }




    return (
        <div className="poll">
            <div className="top">
                <h2>Polls</h2>
            </div>
            {fill(coursecirnum)}{x.map(showElement)}
        </div>
    );
}

export default Poll;
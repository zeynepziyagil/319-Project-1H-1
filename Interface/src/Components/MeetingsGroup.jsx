import React from 'react'
var upcoming = "Next Meeting 09/05"
function MeetingsGroup() {
    return (
        <div className="meeting">
            <h2>Group Meetings</h2>
        <h3>{upcoming}</h3>
        <h4><button>ADD</button></h4>
        <h4><button>REMOVE</button></h4>
       
    </div>
    
    )
}

export default MeetingsGroup

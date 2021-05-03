import React from 'react'
import Review from "./Review"
import LogoUpper from "./LogoUpper";
import Menu from "./Menu"
var groupname ="Group 1H";
function PeerreviewPage() {
    return (
        <div>
            <LogoUpper />
            <center><h1 className="header">{groupname}</h1></center>
            <Menu />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
        </div>
    )
}

export default PeerreviewPage

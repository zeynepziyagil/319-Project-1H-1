import React from 'react'
import Review from "./Review"
import LogoUpper from "./LogoUpper";
import Menu from "./Menu"
var groupname ="Group 1H";
function PeerreviewPage() {
    return (
        <div>
            <h1 className="header">{groupname}</h1>
            <LogoUpper />
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

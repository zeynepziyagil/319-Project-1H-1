import React from 'react'
import tryreview from "./tryreview"
import {Link} from "react-router-dom";
import StudentProfile from "./StudentProfile"

var studentname ='bilgehan akcan';

function showReview(message) {
    return (
        <div>
            <h4>{message.reviewer}: {message.message}, grade:{message.grade}/5 </h4>
            </div>
    );
}

function Review() {
    return (
        <div className="reviewx">
        <div className="topx">
        <h2><Link to="StudentProfile">{studentname}</Link></h2>
        </div>
        <div>
        {tryreview.map(showReview)}
        </div>
        <h3>Given reviews</h3>
        <div>
        {tryreview.map(showReview)}
        </div>
    </div>
    )
}

export default Review

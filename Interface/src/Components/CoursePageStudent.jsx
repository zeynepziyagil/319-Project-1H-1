import React from "react";
import Advertisement from "./Advertisement";
import Announcement from "./Announcement";
import LogoUpper from "./LogoUpper";
import Menu from "./Menu";
import Poll from "./Poll";
import ProjectGroups from "./ProjectGroups";
import {AiTwotoneCheckCircle} from "react-icons/ai"

function CoursePageStudent() {
    return (
        <div>
            <h1 className="header1">CS 319</h1>
            <LogoUpper />
            <Announcement />
            <Poll />
            <ProjectGroups />
            <Advertisement />
            <Menu />
            <table className="table">
                <tr><th className="table-headers">WEEK 1</th></tr>
                <tr><AiTwotoneCheckCircle size="0.7em"/>&emsp;Assignment 1</tr>
                <tr><th className="table-headers">WEEK 2</th></tr>
                <tr><AiTwotoneCheckCircle size="0.7em"/>&emsp;Requirements and Analysis Report: Iteration 1</tr>
                <tr><th className="table-headers">WEEK 3</th></tr>
                <tr><AiTwotoneCheckCircle size="0.7em"/>&emsp;Example Reports From Last Years</tr>
                <tr><th className="table-headers">WEEK 4</th></tr>
                <tr><AiTwotoneCheckCircle size="0.7em"/>&emsp;Design Report: Iteration 1</tr>
                <tr><th className="table-headers">WEEK 5</th></tr>
                <tr><AiTwotoneCheckCircle size="0.7em"/>&emsp;Design Report & Requirements and Analysis Report: Final</tr>
            </table>
        </div>
    );
}

export default CoursePageStudent;
import React from 'react'
import {Link} from "react-router-dom";

import {AiOutlinePlusCircle} from "react-icons/ai";
import { connect } from 'react-redux'
var whoseProfile = "instructor";

function AddSign(){
    return (
        <div>
            <table className="dashboardadd">
                <tr >
                    <td><AiOutlinePlusCircle size="3em" /></td>
                   
                    
                </tr>
            </table>
        </div>
    )
}


export default AddSign;

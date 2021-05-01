import 'reactjs-popup/dist/index.css';
import AddSign from "./AddSign"
import React from "react";
import Boxy from "./Boxy";
import Popup from "reactjs-popup";
import {AiOutlinePlusCircle} from "react-icons/ai";


const PopUpTool = () => (
  <Popup
  trigger={<button className="button">< icon type = {AiOutlinePlusCircle}/></button>}
  position="bottom left"
  closeOnDocumentClick
  >
    <div>
      Add members to group via group page
      
    </div>
  </Popup>
);

export  default  Boxy(PopUpTool);

import React from "react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id = {window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {/* <div id="icon">{val.icons}</div> */}
               <img id ="icon" src = {val.icons} style={{height:'20px', width:'20px', color:'white'}}></img>
              {/* <div id="title">{val.title}</div> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;

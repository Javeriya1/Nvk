import React from "react";
import "./HeaderNav.css";

export default function HeaderNav() {
  return (
    <div className="header">
      <div className="nav-header">
        <a href="#" className="navbar-brand">
          <img src="../assets/img/logo.svg" alt="" />
        </a>
        <ul className="menu">
        <li>
          <a href="#">
            <img src="../assets/img/notifications.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/message-center.svg"  alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../assets/img/profile-img.svg" alt="" />
            <span className = "user">User name</span>
          </a>
        </li>
        <li >
          <a href="#">
            <img class="lastMenu" src="../assets/img/menu.svg" alt="" /> 
          </a>
        </li>
      </ul>
      </div>
      
    </div>
  );
}

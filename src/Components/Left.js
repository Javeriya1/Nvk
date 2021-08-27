
import React, { useState } from 'react';
import "./Left.css";

const Left = ()=> {
  
  return (
    <div id="mySidebar" class="sidebar"  >
        <ul className="sidebarList">
          <li>
            <a href="#">
              <img className= "icon" src="../assets/img/dashboard.svg"  id = "icon"  alt="" />
              <span className= "title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/customer-quotes.svg" alt=""/>
                <span className = "title customer">Customer Quotes &amp; Orders </span>
            </a>
            <ul className = "sub-menu" >
                <li><a href = "#">Order List</a></li>
                <li><a href = "#">New Order</a></li>
                <li><a href = "#">New Quote</a></li>
                <li><a href = "#">Quick Pick</a></li>
                <li><a href = "#">Reserve</a></li>
                <li><a href = "#">Invoice & Adjustments</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/purchase-orders.svg" alt=""/>
                <span className = "title">Purchase Orders</span>
            </a>
            <ul className = "sub-menu">
                <li><a href = "#">P.O.List</a></li>
                <li><a href = "#">New P.O</a></li>
                
            </ul>
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/inventory.svg" alt=""/>
                <span className = "title">Inventory</span>
            </a>
            <ul className = "sub-menu">
                <li><a href = "#">Inventory Manager</a></li>
                <li><a href = "#">Plant Manager</a></li>
                <li><a href = "#">Product Manager</a></li>
                <li><a href = "#">Plant Setting</a></li>
                <li><a href = "#">Product Setting</a></li>
                <li><a href = "#">Inventory Setting</a></li>
                <li><a href = "#">Task Queue</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/customer-quotes.svg" alt=""/>
                <span className = "title">Customer Quotes &amp; Orders</span>
            </a>
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/Customer-management.svg" alt=""/>
                <span className = "title">Customer Management</span>
            </a>
          </li>
          <li >
            <a href="#">
            <img className= "icon" src="../assets/img/supplier.svg" alt=""/>
                <span className = "title">Supplier Management</span>
            </a>
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/settings.svg" alt=""/>
                <span className = "title">Tools & Settings</span>
            </a>
            <ul className = "sub-menu">
                <li><a href = "#">Organization Settings</a></li>
                <li><a href = "#">Customer Setting</a></li>
                <li><a href = "#">Supplier Setting</a></li>
                <li><a href = "#">Tags & Lables</a></li>
                <li><a href = "#">Image Management</a></li>
                <li><a href = "#">User Management</a></li>
                
            </ul>
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/reports.svg" alt=""/>
                <span className = "title">Reports</span>
            </a>
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/staff.svg" alt=""/>
                <span className = "title">Staff Directory</span>
            </a>
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/message-center.svg" alt=""/>
                <span className = "title">Message Center</span>
            </a>
            <ul className = "sub-menu">
                <li><a href = "#">Inbox</a></li>
                <li><a href = "#">Sent Items</a></li>
                <li><a href = "#">Compose Message</a></li>
                
            </ul>
            
          </li>
          <li>
            <a href="#">
            <img className= "icon" src="../assets/img/location.svg" alt=""/>
                <span className = "title">Map Locator</span>
            </a>
          </li>
        </ul>
      </div>
    
  );
}

export default Left;

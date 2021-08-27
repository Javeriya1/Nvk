import React from "react";
import Dashboard from "../assets/img/dashboard.svg";
import Orders from "../assets/img/customer-quotes.svg";
import Purchase from "../assets/img/purchase-orders.svg";
import Inventory from "../assets/img/inventory.svg";
import Customer from "../assets/img/customer-management.svg"
import Supplier from "../assets/img/supplier.svg";
import Tools from "../assets/img/settings.svg";
import Reports from "../assets/img/reports.svg";
import Staff  from "../assets/img/staff.svg" 
import Mail from "../assets/img/message-center.svg";
import Location from "../assets/img/location.svg"

export const SidebarData = [
    {
        title: "Dashboard",
        icons : Dashboard,
        link : "/dashboard"
    },
    {
        title: "Customer Quotes & Orders",
        icons : Orders,
        link : "/orders"
    },

    {
        title: "Purchase Orders",
        icons : Purchase,
        link : "/purchase"
    },
    {
        title: "Inventory Management",
        icons : Inventory,
        link : "/inventory"
    },
    {
        title: "Customer Management",
        icons : Customer,
        link : "/customer"
    },
    {
        title: "Supplier Management",
        icons : Supplier,
        link : "/supplier"
    },
    {
        title: "Tools & Settings",
        icons : Tools,
        link : "/settings"
    },
    {
        title: "Reports",
        icons : Reports,
        link : "/reports"
    },
    {
        title: "Staff Directory",
        icons : Staff,
        link : "/staff"
    },
    {
        title: "Message Center",
        icons : Mail,
        link : "/mail"
    },
    {
        title: "Map Locator",
        icons : Location,
        link : "/location"
    },

]
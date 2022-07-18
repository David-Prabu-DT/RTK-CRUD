import React from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";

const NavSidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar>
        <CDBSidebarHeader>
          <Link to={"/dashboard"}>SideBar </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem>
              <Link to={"/dashboard/home"}>
                <ArrowRightCircle /> Home
              </Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <Link to={"/dashboard/about"}>
                <ArrowRightCircle /> About
              </Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <Link to={"/dashboard/services"}>
                <ArrowRightCircle /> Services
              </Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <Link to={"/dashboard/products"}>
                <ArrowRightCircle /> Products
              </Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <Link to={"/dashboard/contacts"}>
                <ArrowRightCircle /> Contacts
              </Link>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default NavSidebar;

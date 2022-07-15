import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
const NavSidebar = () => {
  return (
    <>
      <ProSidebar>
        <SidebarHeader>
          {/**
           *  You can add a header for the sidebar ex: logo
           */}
        </SidebarHeader>
        <SidebarContent>
          {/**
           *  You can add the content of the sidebar ex: menu, profile details, ...
           */}
        </SidebarContent>
        <SidebarFooter>
          {/**
           *  You can add a footer for the sidebar ex: copyright
           */}
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default NavSidebar;

import React from "react";
import NavItem from "../navItem/NavItem";
import style from "./sidebar.module.css";
import { sideMenu } from "./sidemenu.config";

const Sidebar = (_props) => {
  return (
    <nav className={style.sidebar}>
      {sideMenu.map((item, index) => {
        return <NavItem key={`${item.label}-${index}`} item={item} />;
      })}
    </nav>
  );
};

export default Sidebar;

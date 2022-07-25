import React from "react";
import { Link } from "react-router-dom";
import style from "./navItem.module.css";
import NavItemHeader from "./NavItemHeader";

const NavItem = (props) => {
  const { label, Icon, to, children } = props.item;

  if (children) {
    return <NavItemHeader item={props.item} />;
  }

  return (
    <Link to={to} className={style.navItem}>
      <Icon className={style.navIcon} />
      <span className={style.navLabel}>{label}</span>
    </Link>
  );
};

export default NavItem;

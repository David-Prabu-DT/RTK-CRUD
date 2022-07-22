import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import style from "./layout.module.css";

const Layout = (_props: any) => {
  const { children } = _props;
  const signInPage = window.location.pathname === "/";
  const loginPage = window.location.pathname === "/login";

  return (
    <div className={style.layout}>
      {/* <header className={style.header}></header> */}
      <aside
        className={style.aside}
        style={{ display: loginPage || signInPage ? "none" : "block" }}
      >
        <Sidebar />
      </aside>
      <main
        className={style.main}
        style={{ gridColumnStart: loginPage || signInPage ? 1 : 2 }}
      >
        {children}
      </main>
      <footer className={style.footer}></footer>
    </div>
  );
};

export default Layout;

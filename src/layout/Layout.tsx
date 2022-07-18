import React from "react";

const Layout = (_props: any) => {
  const { children } = _props;
  return (
    <div>
      <header></header>
      <aside></aside>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Layout;

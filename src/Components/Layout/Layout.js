import React from "react";
import Header from "../../Containers/Header/Header";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>{props.children}</div>
    </section>
  );
};

export default Layout;

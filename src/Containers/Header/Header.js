import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <section className={classes.container}>
      <div className={classes.logoSection}>Integrations Assessment</div>
      <div className={classes.navLinkSection}>
        <Link to="/">Transfer</Link>
        <Link to="/transaction-history">Transactions history</Link>
      </div>
    </section>
  );
};

export default Header;

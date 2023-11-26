import React from "react";
import classes from "./home.module.css";
import logo from "../../../assets/logo.png";

const Home = () => {
  return (
    <div className={classes.home}>
      <img className={classes.logo} src={logo} alt="logo" />
      <h3>Welcome to Grant Thornton Bharat LLP</h3>
      <p>ECL Tool</p>

      <p className={classes.copyRight}>
        © 2023 Grant Thornton Bharat LLP – All rights reserved.
      </p>
    </div>
  );
};

export default Home;

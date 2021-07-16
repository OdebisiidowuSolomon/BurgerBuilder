import React from "react";

import classes from "./Logo.module.css";
import burgerLogo from "../../assets/images/Opera Snapshot_2020-07-09_135250_localhost.png";

const logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default logo;

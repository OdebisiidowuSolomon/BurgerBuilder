import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = ({ isAuthenticated }) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      {isAuthenticated && (
        <NavigationItem link="/orders">Orders</NavigationItem>
      )}
      <NavigationItem link={isAuthenticated ? "/logout" : "/auth"}>
        {isAuthenticated ? "Logout" : "Authenticate"}
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;

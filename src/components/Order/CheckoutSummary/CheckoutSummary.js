import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";
import { useState } from "react";

const CheckoutSummary = (props) => {
  const ingredients = useState([null]);
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We Hope It Tastes Well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger
          ingredients={props.ingredients ? props.ingredients : ingredients}
        />
        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.checkoutContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;

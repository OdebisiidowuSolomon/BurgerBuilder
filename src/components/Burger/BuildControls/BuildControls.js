import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  reset,
  price,
  purchasable,
  ordered,
  isAuth,
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>${price.toFixed(2)} </strong>
        <button
          className={classes.Reset}
          disabled={!purchasable}
          onClick={reset}
        >
          Reset
        </button>
      </p>
      {controls.map((e) => (
        <BuildControl
          key={e.label}
          label={e.label}
          added={() => ingredientAdded(e.type)}
          removed={() => ingredientRemoved(e.type)}
          disabled={disabled[e.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={ordered}
      >
        {isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
};

export default buildControls;

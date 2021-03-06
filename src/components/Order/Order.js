import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig, i) => {
    return (
      <span
        key={i}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "3px 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {ig.name} {ig.amount}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)} </strong>
      </p>
    </div>
  );
};

export default order;

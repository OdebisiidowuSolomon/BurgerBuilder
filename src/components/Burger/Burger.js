import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformingredients = Object.keys(props.ingredients)
    .map((igk) => {
      return [...Array(props.ingredients[igk])].map((_, i) => {
        return <BurgerIngredient type={igk} key={igk + i} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformingredients.length === 0) {
    transformingredients = <p>Please Start Adding ingredient!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

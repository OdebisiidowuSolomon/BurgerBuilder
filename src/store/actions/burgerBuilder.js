// import Axios from "axios";
import instance from "../../axios-orders";

export const addIngredients = (name) => {
  return {
    type: "ADD_INGREDIENT",
    ingredientName: name,
  };
};

export const removeIngredients = (name) => {
  return {
    type: "REMOVE_INGREDIENT",
    ingredientName: name,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

const setIngredients = (ingredients) => {
  return {
    type: "SET_INGREDIENTS",
    ingredients,
  };
};

const fetchIngredientsFailed = () => {
  return {
    type: "FETCH_INGREDIENTS_FAILED",
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    instance
      .get("/ingredients.json")
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((err) => {
        dispatch(fetchIngredientsFailed());
        // this.setState({ error: true });
      });
  };
};

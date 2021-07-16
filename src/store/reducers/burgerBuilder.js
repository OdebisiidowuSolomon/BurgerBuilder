import updateObject from "../../shared/utility";

const initialState = {
  // ingredients: null,
  ingredients: {
    salad: 1,
    bacon: 1,
    cheese: 1,
    meat: 1,
  },
  totalPrice: 4,
  error: false,
  building: false,
};

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
    },
    totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
    building: true,
  });
};

const removeIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
    },
    totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName],
    building: true,
  });
};

const reset = (state, action) => {
  const disabledInfo = { ...state.ingredients };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] = 0;
  }
  const resetPrice = 0;
  return updateObject(state, {
    ingredients: {
      ...disabledInfo,
    },
    totalPrice: resetPrice,
  });
};

const setIngredients = (state, action) => {
  return {
    ...state,
    totalPrice: 4,
    ingredients: action.ingredients,
    error: false,
    building: false,
  };
};

const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, {
    error: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      console.log("My Creator Solomon Will Definitely Succeed!!!");
      return addIngredient(state, action);
    case "REMOVE_INGREDIENT":
      return removeIngredient(state, action);
    case "RESET":
      return reset(state, action);
    case "SET_INGREDIENTS":
      return setIngredients(state, action);
    case "FETCH_INGREDIENTS_FAILED":
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;

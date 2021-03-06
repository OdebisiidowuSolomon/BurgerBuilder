import updateObject from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, {
    id: action.orderId.name,
  });
  return updateObject(state, {
    loading: false,
    orders: state.orders.concat(newOrder),
    purchased: true,
  });
};
const purchaseBurgerFail = (state, action) => {
  return updateObject(state, { loading: false });
};
const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const fetchOrdersStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { loading: false, orders: action.orders });
};
const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false, error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PURCHASE_INIT":
      return purchaseInit(state, action);
    case "PURCHASE_BURGER_SUCCESS":
      return purchaseBurgerSuccess(state, action);
    case "PURCHASE_BURGER_FAIL":
      return purchaseBurgerFail(state, action);
    case "PURCHASE_BURGER_START":
      return purchaseBurgerStart(state, action);
    case "FETCH_ORDERS_START":
      return fetchOrdersStart(state, action);
    case "FETCH_ORDERS_SUCCESS":
      return fetchOrdersSuccess(state, action);
    case "FETCH_ORDERS_FAIL":
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;

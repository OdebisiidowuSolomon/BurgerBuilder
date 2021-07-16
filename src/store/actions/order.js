import instance from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: "PURCHASE_BURGER_SUCCESS",
    orderId: id,
    orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: "PURCHASE_BURGER_FAIL",
    error,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: "PURCHASE_BURGER_START",
  };
};

export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseBurgerStart());
    instance
      .post("/orders.json?auth=" + token, orderData)
      .then((res) => {
        dispatch(purchaseBurgerSuccess(res.data, orderData));
      })
      .catch((err) => {
        dispatch(purchaseBurgerFail(err));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: "PURCHASE_INIT",
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: "FETCH_ORDERS_SUCCESS",
    orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: "FETCH_ORDERS_FAIL",
    error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: "FETCH_ORDERS_START",
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const queryParams =
      "/orders.json?auth=" +
      token +
      '&orderBy="userId"&equalTo="' +
      userId +
      '"';
    instance
      .get(queryParams)
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res?.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};

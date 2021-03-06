import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import { fetchOrders } from "../../store/actions/order";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let order = (
      <>
        {this.props.orders.map((order, i) => (
          <Order key={i} ingredients={order.ingredients} price={order.price} />
        ))}
      </>
    );
    if (this.props.loading) {
      return (order = <Spinner />);
    }
    if (this.props.error) {
      return (order = <h3>Some Error</h3>);
    }
    if (!this.props.orders.length && !this.props.error) {
      return (order = <h2>NO ORDERS YET!....START ADDING INGREDIENTS</h2>);
    }
    return <div>{order}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));

import React, { Component } from "react";

import Aux from "../../../hoc/Auxx/Auxx";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((igk) => (
      <li key={igk}>
        <span style={{ textTransform: "capitalize" }}>{igk}</span>:{" "}
        {this.props.ingredients[igk]}
      </li>
    ));
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A Delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: USD {this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue To CheckOut?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;

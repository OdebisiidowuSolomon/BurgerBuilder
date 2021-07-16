import React, { Component } from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxx/Auxx";
import BackDrop from "./../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.show !== nextProps.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    const { show, modalClosed, children } = this.props;
    return (
      <Aux>
        <BackDrop show={show} removeModal={modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? "1" : "0",
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
}

export default Modal;

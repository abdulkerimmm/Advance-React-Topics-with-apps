import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeCart2} />;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const elementportal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeCart2={props.closeCart2} />,
        elementportal
      )}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        elementportal
      )}
    </>
  );
};

export default Modal;

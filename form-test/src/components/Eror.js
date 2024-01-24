import React, { useState } from "react";
import { Button } from "./Button";
import "./Eror.css";
import ReactDom from "react-dom";

const BackDrop = (props) => {
  return <div onClick={props.changeEror} className="wrapPageEror" />;
};

const OverlayDrop = (props) => {
  return (
    <div className="ErorBox">
      <p
        style={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {props.message}
      </p>
      <Button changeEror={props.changeEror} className="buton">
        okey
      </Button>
    </div>
  );
};

export const Eror = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop changeEror={props.changeEror} />,
        document.getElementById("portal1")
      )}
      {ReactDom.createPortal(
        <OverlayDrop message={props.message} changeEror={props.changeEror} />,
        document.getElementById("portal2")
      )}
    </>
  );
};

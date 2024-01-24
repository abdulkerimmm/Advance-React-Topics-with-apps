import React from "react";

export const Button = (props) => {
  return (
    <button onClick={props.changeEror} className={props.className}>
      {props.children}
    </button>
  );
};

import React from "react";
import "./Card.css";

const Card = (props) => {
  const classNameCard = "card " + props.className;
  return <div className={classNameCard}>{props.children}</div>;
};

export default Card;

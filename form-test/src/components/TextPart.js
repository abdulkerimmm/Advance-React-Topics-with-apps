import React from "react";
import "./textPart.css";

const TextPart = (props) => {
  return (
    <div className="divtext">
      {/* {props.bolen && <div>error<div>} */}
      {props.texts.map((item) => {
        return (
          <div key={item} className="divtext2">
            <p>{item}(age)</p>
          </div>
        );
      })}
    </div>
  );
};

export default TextPart;

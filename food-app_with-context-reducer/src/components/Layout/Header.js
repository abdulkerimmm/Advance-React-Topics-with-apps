import React from "react";
import TheImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton shownCartTwo={props.shownCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={TheImage} alt="delicious food" />
      </div>
    </>
  );
};

export default Header;

import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const Mealitem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartctx = useContext(CartContext);
  const addToCart = (amountItem) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amountItem,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm addToCart={addToCart} id={props.id} />
      </div>
    </li>
  );
};

export default Mealitem;

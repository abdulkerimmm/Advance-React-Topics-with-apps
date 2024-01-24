import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const hasItem = cartctx.items.length > 0;

  const RemoveHandler = (id) => {
    cartctx.removeItem(id);
  };
  const addHandler = (item) => {
    cartctx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={RemoveHandler.bind(null, item.id)}
          onAdd={addHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;

  return (
    <Modal closeCart2={props.closeCart}>
      {cartItems}
      <div className={classes.total}>
        <span>total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeCart}>
          close
        </button>
        {hasItem && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const hasItem = cartctx.items.length > 0;
  const [isCheckout, setIsCheckout] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const Buttons = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.closeCart}>
        close
      </button>
      {hasItem && (
        <button className={classes.button} onClick={orderHandler}>
          order
        </button>
      )}
    </div>
  );

  const SendDatabaseHandler = async (userData) => {
    setLoading(true);
    await fetch(
      "https://http-request-1cf75-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userInfo: userData,
          order: cartctx.items,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          cartctx.resetItems();
          props.HandlerOrderReady();
          setLoading(false);
        } else {
          console.log("error fail");
        }
      })
      .catch((error) => {
        console.error("the error", error);
      });
  };

  const MainContext = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={SendDatabaseHandler} onCancel={props.closeCart} />
      )}
      {!isCheckout && Buttons}
    </>
  );

  return (
    <Modal closeCart2={props.closeCart}>
      {loading ? <p>Loading......</p> : MainContext}
    </Modal>
  );
};

export default Cart;

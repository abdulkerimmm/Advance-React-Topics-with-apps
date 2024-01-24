import classes from "./CartButton.module.css";
import { showCartHandler } from "../../hooks/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  let temp = 0;
  cart.forEach((element) => {
    temp += element.quantity;
  });
  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(showCartHandler());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{temp}</span>
    </button>
  );
};

export default CartButton;

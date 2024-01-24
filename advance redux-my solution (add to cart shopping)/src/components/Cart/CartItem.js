import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { decreaseProduct, increaseProduct } from "../../hooks/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <header>
        <h3>{props.product.title}</h3>
        <div className={classes.price}>
          ${props.product.total}
          <span className={classes.itemprice}>(${props.product.price})</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.product.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(decreaseProduct(props.product));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(increaseProduct(props.product));
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

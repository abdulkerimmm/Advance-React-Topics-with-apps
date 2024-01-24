import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const data = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {data.map((item) => {
          return (
            <CartItem
              product={{
                title: item.title,
                quantity: item.quantity,
                total: item.quantity * item.price,
                price: item.price,
              }}
            />
          );
        })}
      </ul>
      <h2>Total Amount:{totalAmount}</h2>
    </Card>
  );
};

export default Cart;

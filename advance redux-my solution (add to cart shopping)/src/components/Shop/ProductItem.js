import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addItem } from "../../hooks/cartSlice";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button
            onClick={() =>
              dispatch(
                addItem({
                  title: title,
                  quantity: 1,
                  total: 1,
                  price: price,
                })
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

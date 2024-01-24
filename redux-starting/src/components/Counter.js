import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const incrementHandlerByFive = () => {
    dispatch({ type: "incrementbyfive", amount: 5 });
  };
  console.log(counter);
  const toggleCounterHandler = () => {
    dispatch({ type: "toggleHandler" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {showCounter ? counter : ""} </div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementHandlerByFive}>increment By 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

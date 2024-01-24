import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "./../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(CounterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(CounterActions.decrement());
  };
  const incrementHandlerByFive = () => {
    dispatch(CounterActions.incrementbyfive(5)); // {actions: UNIQ_INDEFTIFIER , payload:5}
  };
  console.log(counter);
  const toggleCounterHandler = () => {
    dispatch(CounterActions.toggleHandler());
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

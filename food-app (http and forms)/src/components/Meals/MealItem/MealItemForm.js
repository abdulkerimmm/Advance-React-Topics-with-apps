import React, { useContext, useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const entredAmount = inputRef.current.value;
    const entredAmountNumber = +entredAmount;

    if (
      entredAmount.trim().length === 0 ||
      entredAmountNumber < 1 ||
      entredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }
    props.addToCart(entredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        Input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>please enter a valid number (1-5)</p>}
    </form>
  );
};

export default MealItemForm;

import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpense, setShowExpense] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setShowExpense(false);
  };

  const expenseHandler = () => {
    setShowExpense(true);
  };

  const expenseHandlertwo = () => {
    setShowExpense(false);
  };

  return (
    <div className="new-expense">
      {showExpense && (
        <ExpenseForm
          expenseHandlertwo={expenseHandlertwo}
          onSaveExpenseDate={saveExpenseHandler}
        />
      )}
      {!showExpense && <button onClick={expenseHandler}>Add expense</button>}
    </div>
  );
};

export default NewExpense;

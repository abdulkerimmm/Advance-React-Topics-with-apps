import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ expenses }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenses={expenses} />
        <div className="expense-item__description">
          <h2>{expenses.title}</h2>
          <div className="expense-item__price">${expenses.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

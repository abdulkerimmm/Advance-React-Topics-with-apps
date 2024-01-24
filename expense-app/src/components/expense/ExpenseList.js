import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

export const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">NOt found item</p>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            filteredYear={props.filteredYear}
            key={item.id}
            expenses={item}
          />
        );
      })}
    </ul>
  );
};

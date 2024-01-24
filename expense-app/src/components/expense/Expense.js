import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { ExpenseList } from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const a = expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={a} />
        <ExpenseList items={a} filteredYear={filteredYear} />
      </Card>
    </div>
  );
};

export default Expense;

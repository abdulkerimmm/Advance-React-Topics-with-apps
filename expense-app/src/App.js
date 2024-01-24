import "./App.css";
import Expense from "./components/expense/Expense";
import NewExpense from "./components/newExpense/NewExpense";
import { useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [array, setArray] = useState(expenses);
  const addExpenseHandler = (expense) => {
    setArray((prevstate) => [expense, ...prevstate]);
  };
  console.log(array);
  return (
    <div className="App">
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expense expenses={array} />
      </div>
    </div>
  );
}

export default App;

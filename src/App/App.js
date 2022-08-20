import { useState } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Expenses from "../components/Expenses/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense/NewExpense";

const dummy_expenses = [
  {
    // id: b1,
    date: new Date(2022, 0, 1),
    title: "Expense Title",
    amount: "0.00",
    category: "Expense Category",
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

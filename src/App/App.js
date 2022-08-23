import { useState } from "react";
import "./App.css";
import Header from "../components/Header/Header";
import Expenses from "../components/Expenses/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: 0.156,
    date: new Date(2022, 0, 1),
    title: "Rent",
    amount: "750.00",
    category: "fixed costs",
  },
  {
    id: 0.126,
    date: new Date(2021, 0, 1),
    title: "Expense Title",
    amount: "158.47",
    category: "groceries",
  },
  {
    id: 0.146,
    date: new Date(2023, 0, 1),
    title: "Expense Title",
    amount: "53.67",
    category: "eating out",
  },
  {
    id: 0.165,
    date: new Date(2022, 0, 1),
    title: "Expense Title",
    amount: "26.57",
    category: "misc",
  },
  {
    id: 0.175,
    date: new Date(2021, 0, 1),
    title: "Expense Title",
    amount: "45.55",
    category: "gas",
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

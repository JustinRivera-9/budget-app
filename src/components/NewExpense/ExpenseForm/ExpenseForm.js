import { useState } from "react";
import "./ExpenseForm.css";

//WRAP IN CARD
function ExpenseForm(props) {
  ////CATEGORY STATE/////
  const [enteredCategory, setCategory] = useState("");

  function categoryChangeHandler(e) {
    setCategory(e.target.value);
  }

  ////DATE STATE/////
  const [enteredDate, setDate] = useState("");

  function dateChangeHandler(e) {
    setDate(e.target.value);
  }

  ////TITLE STATE/////
  const [enteredTitle, setTitle] = useState("");

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }

  ////AMOUNT STATE/////
  const [enteredAmount, setAmount] = useState("");

  function amountChangeHandler(e) {
    setAmount(e.target.value);
  }

  ////SUBMIT HANDLER/////
  function submitHandler(e) {
    e.preventDefault();

    const expenseData = {
      category: enteredCategory,
      date: new Date(enteredDate),
      title: enteredTitle,
      amount: enteredAmount,
    };

    props.onSubmitExpense(expenseData);
    setCategory("");
    setDate("");
    setTitle("");
    setAmount("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-form">
        <div className="new-expense_field">
          <select
            onChange={categoryChangeHandler}
            for="category"
            id="category"
            required
          >
            <option value="">Select Category</option>
            <option value="groceries">Groceries</option>
            <option value="gas">Gas</option>
            <option value="eating-out">Eating Out</option>
            <option value="fixed-costs">Fixed Costs</option>
            <option value="misc">Misc</option>
          </select>
        </div>
        <div className="new-expense_field">
          <label for="date">Date: </label>
          <input
            onChange={dateChangeHandler}
            type="date"
            id="date"
            name="expense-date"
            min="01-01-2022"
            max="12-31-2022"
            value={enteredDate}
            required
          />
        </div>
        <div className="new-expense_field">
          <label>Title: </label>
          <input
            onChange={titleChangeHandler}
            type="text"
            placeholder="Expense title"
            for="title"
            id="title"
            value={enteredTitle}
            required
          />
        </div>
        <div className="new-expense_field">
          <label>Amount: </label>
          <input
            onChange={amountChangeHandler}
            type="number"
            placeholder="Expense amount"
            for="amount"
            id="amount"
            value={enteredAmount}
            required
          />
        </div>
        <div className="button-Background">
          <button type="submit" className="submit-expense-button">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

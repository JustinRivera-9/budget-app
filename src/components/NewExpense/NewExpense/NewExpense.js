import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <div className="box">
          <button className="add-expense" onClick={startEditingHandler}>
            ADD EXPENSE
          </button>
        </div>
      )}
      {isEditing && (
        <ExpenseForm
          onSubmitExpense={saveExpenseHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  // Renders the expenses based on year filter selected and if there are any expenses for that year

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;

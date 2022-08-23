import "./ExpenseItem.css";
import ExpenseItemDate from "../ExpenseItemDate/ExpenseItemDate";
import Card from "../../UI/Card/Card";

function ExpenseItem(props) {
  let categoryColor = props.category;
  let color;
  switch (categoryColor) {
    case "groceries":
      color = "green";
      break;
    case "going out":
      color = "blue";
      break;
    case "gas":
      color = "red";
      break;
    case "fixed costs":
      color = "purple";
      break;
    default:
      color = "gray";
  }

  return (
    <Card className="budget-detail">
      <ExpenseItemDate date={props.date} />
      <div className="details">
        <p className="expense-title">{props.title}</p>
        <p>
          <strong>Category: </strong> {props.category}
        </p>
      </div>
      <p className="expense-amount" style={{ backgroundColor: color }}>
        ${props.amount}
      </p>
      <button className="edit-button">Edit</button>
    </Card>
  );
}

export default ExpenseItem;

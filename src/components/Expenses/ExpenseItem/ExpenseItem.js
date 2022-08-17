import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseItemDate from "../ExpenseItemDate/ExpenseItemDate";
import Card from "../../UI/Card/Card";

function ExpenseItem(props) {
  let categoryColor = props.category;
  let color;
  switch (categoryColor) {
    case "Groceries":
      color = "green";
      break;
    case "Eating Out":
      color = "blue";
      break;
    case "Gas":
      color = "red";
      break;
    case "Fixed Costs":
      color = "purple";
      break;
    default:
      color = "gray";
  }

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("GOTCHA BITCH");
  };

  return (
    <Card className="budget-detail">
      <ExpenseItemDate date={props.date} />
      <div className="details">
        <p className="expense-title">{title}</p>
        <p>
          <strong>Category: </strong> {props.category}
        </p>
      </div>
      <p className="expense-amount" style={{ backgroundColor: color }}>
        ${props.amount}
      </p>
      <button className="edit-button" onClick={clickHandler}>
        Edit
      </button>
    </Card>
  );
}

export default ExpenseItem;

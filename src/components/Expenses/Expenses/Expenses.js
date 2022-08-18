import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import NewExpense from "../../NewExpense/NewExpense/NewExpense";
import "./Expenses.css";

function Expenses(props) {
  const Items = [
    {
      // id: b1,
      date: new Date(2022, 8, 10),
      title: "King Soopers",
      amount: "129.37",
      category: "Groceries",
    },
    {
      //id: b2,
      date: new Date(2022, 8, 16),
      title: "Gas",
      amount: "59.26",
      category: "Gas",
    },
    {
      //id: b3,
      date: new Date(2022, 8, 25),
      title: "Denver Beer Co.",
      amount: "31.59",
      category: "Going Out",
    },
    {
      // id: b4,
      date: new Date(2022, 8, 17),
      title: "Utilities",
      amount: "50",
      category: "Fixed Costs",
    },
    {
      // id: b5,
      date: new Date(2022, 8, 26),
      title: "Airplane Tickets",
      amount: "32.57",
      category: "Misc",
    },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log("in expenses.js");
    console.log(expenseData);
    Items.push(expenseData);
    console.log(Items);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpenseItem
          date={Items[0].date}
          title={Items[0].title}
          amount={Items[0].amount}
          category={Items[0].category}
        />
        <ExpenseItem
          date={Items[1].date}
          title={Items[1].title}
          amount={Items[1].amount}
          category={Items[1].category}
        />
        <ExpenseItem
          date={Items[2].date}
          title={Items[2].title}
          amount={Items[2].amount}
          category={Items[2].category}
        />
        <ExpenseItem
          date={Items[3].date}
          title={Items[3].title}
          amount={Items[3].amount}
          category={Items[3].category}
        />
        <ExpenseItem
          date={Items[4].date}
          title={Items[4].title}
          amount={Items[4].amount}
          category={Items[4].category}
        />
      </Card>
    </div>
  );
}

export default Expenses;

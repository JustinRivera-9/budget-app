import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import "./Expenses.css";
import CategoryFilter from "../../Filters/CategoryFilter/CategoryFilter";
import YearFilter from "../../Filters/YearFilter/YearFilter";
import { useState } from "react";

function Expenses(props) {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("2021");

  //CATEGORY FILTER STATE
  const filterCategoryHandler = (selectedCategory) => {
    setCategoryFilter(selectedCategory);
    console.log(selectedCategory);
  };

  //YEAR FILTER STATE
  const filterYearHandler = (selectedYear) => {
    setYearFilter(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <div>
          <CategoryFilter
            selected={yearFilter}
            categoryFilter={filterCategoryHandler}
          />
          <YearFilter
            selected={categoryFilter}
            yearFilter={filterYearHandler}
          />
        </div>
        {props.items.map((expense) => (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            category={expense.category}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;

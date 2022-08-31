import Card from "../../UI/Card/Card";
import "./Expenses.css";
import CategoryFilter from "../../Filters/CategoryFilter/CategoryFilter";
import YearFilter from "../../Filters/YearFilter/YearFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses(props) {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("2022");

  //CATEGORY FILTER STATE
  const filterCategoryHandler = (selectedCategory) => {
    setCategoryFilter(selectedCategory);
  };

  //YEAR FILTER STATE
  const filterYearHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <div>
          <CategoryFilter
            selected={categoryFilter}
            categoryFilter={filterCategoryHandler}
          />
          <YearFilter selected={yearFilter} yearFilter={filterYearHandler} />
        </div>
        <ExpensesChart expenses={filteredYear} />
        <ExpensesList items={filteredYear} />
      </Card>
    </div>
  );
}

export default Expenses;

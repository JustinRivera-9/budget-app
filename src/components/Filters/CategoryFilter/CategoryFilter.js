import "./CategoryFilter.css";

function CategoryFilter(props) {
  return (
    <div className="category-filter">
      <div className="title">Filter by Category</div>
      <div className="new-expense_field">
        <select for="category" id="category" required>
          <option value="">Select Category</option>
          <option value="groceries">Groceries</option>
          <option value="gas">Gas</option>
          <option value="eating-out">Eating Out</option>
          <option value="fixed-costs">Fixed Costs</option>
          <option value="misc">Misc</option>
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;

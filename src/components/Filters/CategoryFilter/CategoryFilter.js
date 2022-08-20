import "./CategoryFilter.css";

function CategoryFilter(props) {
  function dropDownChangeHandler(e) {
    props.categoryFilter(e.target.value);
  }

  return (
    <div className="filter-container">
      <div className="title">Filter by Category</div>
      <div className="filter-dropdown">
        <select
          id="category-filter"
          value={props.selected}
          onChange={dropDownChangeHandler}
        >
          <option value="">Select Category</option>
          <option value="groceries">Groceries</option>
          <option value="gas">Gas</option>
          <option value="eating out">Eating Out</option>
          <option value="fixed costs">Fixed Costs</option>
          <option value="misc">Misc</option>
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;

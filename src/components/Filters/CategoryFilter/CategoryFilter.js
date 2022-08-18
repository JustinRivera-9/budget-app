import "./CategoryFilter.css";

function CategoryFilter(props) {
  function catgeoryFilterHandler(e) {
    const selectedCategory = e.target.value;
    props.onCategoryFilter(selectedCategory);
  }

  return (
    <div className="filter-container">
      <div className="title">Filter by Category</div>
      <div className="filter-dropdown">
        <select id="category-filter" onChange={catgeoryFilterHandler} required>
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

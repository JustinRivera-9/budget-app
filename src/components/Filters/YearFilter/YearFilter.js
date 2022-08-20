import "./YearFilter.css";

function YearFilter(props) {
  const dropDownChangeHandler = (e) => {
    props.yearFilter(e.target.value);
  };

  return (
    <div className="filter-container">
      <div className="title">Filter by Year</div>
      <div className="filter-dropdown">
        <select
          id="year-filter"
          value={props.selected}
          onChange={dropDownChangeHandler}
        >
          <option value="">Select Year</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default YearFilter;

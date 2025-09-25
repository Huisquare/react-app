interface Props {
  handleSelect: (category: string) => void;
}

const ExpenseFilter = ({ handleSelect }: Props) => {
  return (
    <div className="mb-3 pt-3">
      <label htmlFor="category" className="form-label">
        Filter by category:
      </label>
      <select
        className="form-select"
        id="category"
        onChange={(event) => {
          console.log("selected category is:", event.target.value);
          handleSelect(event.target.value);
        }}
      >
        <option value="">--Please choose an option--</option>
        <option value="Groceries">Groceries</option>
        <option value="Food">Food</option>
        <option value="Utilities">Utilities</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;

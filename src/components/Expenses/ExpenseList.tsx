import { Expense } from "./Expense";

interface Props {
  tableData: Expense[];
  onDelete: (id: number) => void;
  selectedCategory: string;
}

const ExpenseList = ({ tableData, onDelete, selectedCategory }: Props) => {
  const tableHeaders = ["Description", "Amount", "Category", "Delete?"];

  const filteredData =
    selectedCategory === ""
      ? tableData
      : tableData.filter((data) => {
          return data.category === selectedCategory;
        });
  let total = 0;
  filteredData.map((item) => (total += item.amount));

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row) => (
          <tr key={row.id}>
            <td>{row.description}</td>
            <td>{row.amount}</td>
            <td>{row.category}</td>
            <td>
              <button
                onClick={() => {
                  onDelete(row.id);
                  console.log("deleting id: ", row.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td>{total}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseList;

import { useState } from "react";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import ExpenseList from "./components/Expenses/ExpenseList";
import { Expense } from "./components/Expenses/Expense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 0, description: "Carrot", amount: 10, category: "Groceries" },
    { id: 1, description: "Chicken Rice", amount: 6, category: "Food" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 120,
      category: "Utilities",
    },
    { id: 3, description: "Apples", amount: 15, category: "Groceries" },
    { id: 4, description: "Pizza", amount: 25, category: "Food" },
    { id: 5, description: "Water Bill", amount: 45, category: "Utilities" },
    { id: 6, description: "Milk", amount: 8, category: "Groceries" },
    { id: 7, description: "Burger", amount: 12, category: "Food" },
    { id: 8, description: "Gas Bill", amount: 90, category: "Utilities" },
    { id: 9, description: "Bananas", amount: 7, category: "Groceries" },
  ]);

  const [nextId, setNextId] = useState(expenses.length + 1);

  const [selectedCategory, setCategory] = useState("");

  const onSelectItem = (cat: string) => {
    setCategory(cat);
  };

  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) => {
          setExpenses([...expenses, { id: nextId, ...expense }]);
          setNextId(nextId + 1);
        }}
      />
      <ExpenseFilter handleSelect={onSelectItem}></ExpenseFilter>
      <ExpenseList
        tableData={expenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((entry) => entry.id !== id))
        }
        selectedCategory={selectedCategory}
      ></ExpenseList>
    </div>
  );
}
export default App;

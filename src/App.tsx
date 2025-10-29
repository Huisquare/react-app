import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
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

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
export default App;

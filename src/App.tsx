import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [selectCategory, setSelectCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 2, category: "Groceries" },
    { id: 2, description: "Movie", amount: 10, category: "Entertainment" },
    { id: 3, description: "Water", amount: 5, category: "Utilities" },
    { id: 4, description: "Petrol", amount: 8, category: "Utilities" },
    { id: 5, description: "Songs", amount: 15, category: "Entertainment" },
  ]);

  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
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
          onSelectCategory={(category: string) => setSelectCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  );
}
export default App;

import { useState } from "react";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  // Function to handle input changes
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // Function to add a new expense
  const handleAddExpense = () => {
    if (description.trim() !== "" && amount.trim() !== "" && !isNaN(amount)) {
      const newExpense = { description, amount: parseFloat(amount) };
      setExpenses([...expenses, newExpense]);
      setDescription(""); // Clear input
      setAmount(""); // Clear input
    } else {
      alert("Please enter valid description and amount.");
    }
  };

  // Function to remove an expense
  const handleRemoveExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  // Calculate total expenses
  const totalExpense = expenses.reduce((total, exp) => total + exp.amount, 0);

  return (
    <div style={styles.container}>
      <h2>Expense Tracker</h2>

      {/* Input Fields */}
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={handleDescriptionChange}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
        style={styles.input}
      />
      <button onClick={handleAddExpense} style={styles.addButton}>
        Add Expense
      </button>

      {/* Expense List */}
      <ul style={styles.list}>
        {expenses.map((expense, index) => (
          <li key={index} style={styles.listItem}>
            {expense.description} - ₹{expense.amount.toFixed(2)}
            <button onClick={() => handleRemoveExpense(index)} style={styles.removeButton}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* Total Expenses */}
      <h3>Total Expense: ₹{totalExpense.toFixed(2)}</h3>
    </div>
  );
}

// CSS-in-JS styles
const styles = {
  container: { textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" },
  input: { padding: "8px", margin: "5px", borderRadius: "5px", border: "1px solid #ccc" },
  addButton: { backgroundColor: "green", color: "white", padding: "8px 12px", border: "none", cursor: "pointer" },
  list: { listStyle: "none", padding: "0" },
  listItem: { backgroundColor: "#f4f4f4", padding: "10px", margin: "5px 0", borderRadius: "5px", display: "flex", justifyContent: "space-between" },
  removeButton: { backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" },
};

export default ExpenseTracker;

import { Input, InputLabel } from "../../ui/input";
import { Button } from "../../ui/button";
import { Row, Column } from "../../ui/layout/divs";
import { useState } from "react";
import styled from "styled-components";
import { Calendar } from "primereact/calendar";
import { createGlobalStyle } from "styled-components";
// import "react-datepicker/dist/react-datepicker.css"; // Import CSS for react-datepicker
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { TransactionAPI } from "../../api";

const GlobalStyles = createGlobalStyle`
  .p-calendar .p-inputtext {
    border: 1px solid #808080; /* Custom border color */
    background-color: ${({ theme }) =>
      theme.backgroundColor}; /* Custom background color */ 
    color: ${({ theme }) => theme.textColors.primary}; /* Custom text color */
    font-family: ${({ theme }) => theme.fonts.primary}; /* Custom font family */
    width: 100%; /* Set width of the input */
    padding: 0.75em;
    margin: 0.75em;
    border: 1px solid #808080; /* Custom border color */

  font-size: 15px; }

  .p-calendar .p-datepicker {
    background-color: #e0f2f1; /* Custom background color for the popup */
    width: 800px; /* Set width of the popup */
    /* Other styles... */
  }

  /* Add more custom styles as needed */
  .multi-month-calendar .p-monthpicker {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .multi-month-calendar .p-monthpicker .p-monthpicker-month {
    flex: 0 0 45%; /* Adjust the percentage as needed to fit two months per row */
    margin: 0.5rem; /* Optional: Add some spacing between the months */
  }

  .p-calendar .p-datepicker table {
    font-size: 0.85em; /* Smaller text */
  }

  .p-calendar .p-monthpicker .p-monthpicker-month {
    flex: 0 0 45%; /* Adjust for better fitting */
    margin: 0.25rem; /* Smaller margins */
  }

  /* Adjust navigation buttons if needed */
  .p-calendar .p-datepicker .p-datepicker-header {
    /* Styles for header */
  }

  .p-calendar .p-datepicker .p-datepicker-prev,
  .p-calendar .p-datepicker .p-datepicker-next {
    /* Styles for prev and next buttons */
  }

  .Toastify__toast-container {
    /* Example styles */
    width: 500px;
    height: 300px;
  }
  
`;

const InputContainer = styled(Row)`
  background-color: grey;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  align-items: center;
`;

// private User user;
// private Type type;
// private Date date;
// private BigDecimal amount;
// private String category;
// private String subcategory;

// private String description;
function HorizontalInput({ label, ...props }) {
  const [income, setIncome] = useState({
    type: "INCOME",
    // Ensure the date is a Date object
    date: new Date(),
    amount: null,
    category: "",
    subcategory: "",
    userId: 1,
    description: "",
  });
  const [expense, setExpense] = useState({
    type: "EXPENSE",
    // Ensure the date is a Date object
    date: new Date(),
    amount: null,
    category: "",
    subcategory: "",
    userId: 1,
    description: "",
  });
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const handleAddIncome = () => {
    if (income.amount && income.category && income.subcategory) {
      // Check if input value is not empty
      setIncomes((prevIncomes) => [...prevIncomes, income]); // Add the input value to the incomes array
    }
  };

  const handleAddExpense = () => {
    if (expense.amount && expense.category && expense.subcategory) {
      // Check if input value is not empty
      setExpenses((prevExpenses) => [...prevExpenses, expense]); // Add the input value to the expenses array
    }
  };

  const onIncomeFormChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onExpenseFormChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleIncomeDateChange = (date) => {
    setIncome({ ...income, date: date });
    console.log(income);
  };

  const handleExpenseDateChange = (date) => {
    setExpense({ ...expense, date: date });
    console.log(expense);
  };

  const formatForBackend = (date) => {
    // Convert to ISO string and remove milliseconds and timezone information
    return date.toISOString().split(".")[0];
  };

  const formatForDisplay = (date) => {
    const pad = (number) => (number < 10 ? `0${number}` : number);
    return `${pad(date.getMonth() + 1)}/${pad(
      date.getDate()
    )}/${date.getFullYear()}`;
  };

  const formatAmount = (amount) => {
    // Convert amount to a number to ensure toFixed can be used
    // (in case amount is passed as a string)
    const number = Number(amount);

    // Use toFixed to convert the number to a string with 2 decimal places
    return number.toFixed(2);
  };

  const handleSubmitTransactions = async () => {
    // Combine your incomes and expenses into one array
    const transactions = [...incomes, ...expenses].map((transaction) => ({
      ...transaction,
      // Ensure date is formatted for the backend
      date: formatForBackend(new Date(transaction.date)),
      amount: formatAmount(transaction.amount),
    }));

    try {
      // Assuming `TransactionAPI.createTransaction` is a method that takes a transaction object
      // and sends it to your backend. You might need to adjust this based on how your API module is set up.
      for (const transaction of transactions) {
        await TransactionAPI.createTransaction(transaction);
      }
      alert("All transactions have been successfully submitted!");
    } catch (error) {
      console.error("Failed to submit transactions:", error);
      alert("Error submitting transactions. Please try again.");
    }
  };

  return (
    <div>
      <InputContainer>
        {/* <InputLabel>{label}</InputLabel> */}
        <GlobalStyles />
        <Calendar
          value={income.date}
          onChange={(e) => handleIncomeDateChange(e.value)}
          dateFormat="mm/dd/yy"
          placeholder="Date"
        />

        <Input
          name="amount"
          placeholder="Amount"
          onChange={onIncomeFormChange}
        />
        <Input
          name="category"
          placeholder="Category"
          onChange={onIncomeFormChange}
        />
        <Input
          name="subcategory"
          placeholder="Subcategory"
          onChange={onIncomeFormChange}
        />
        <Input
          name="description"
          placeholder="Description"
          onChange={onIncomeFormChange}
        />
        <Button onClick={handleAddIncome}>Add income</Button>
      </InputContainer>
      <Column>
        {incomes.reverse().map((income, index) => (
          // Using a reversed copy of incomes to display them in reverse order
          // The `key` should ideally be something unique other than `index` if possible
          <Column key={index}>
            <Row style={{ display: "flex", gap: "16px" }}>
              <p>{formatForDisplay(income.date)}</p>
              <p>{income.amount}</p>
              <p>{income.category}</p>
              <p>{income.subcategory}</p>
            </Row>
          </Column>
        ))}
      </Column>
      <InputContainer>
        <Calendar
          value={expense.date}
          onChange={(e) => handleExpenseDateChange(e.value)}
          dateFormat="mm/dd/yy"
          placeholder="Date"
        />
        <Input
          name="amount"
          placeholder="Amount"
          onChange={onExpenseFormChange}
        />
        <Input
          name="category"
          placeholder="Category"
          onChange={onExpenseFormChange}
        />
        <Input
          name="subcategory"
          placeholder="Subcategory"
          onChange={onExpenseFormChange}
        />
        <Input
          name="description"
          placeholder="Description"
          onChange={onExpenseFormChange}
        />
        <Button onClick={handleAddExpense}>Add expense</Button>
      </InputContainer>

      <Column>
        {expenses.reverse().map((expense, index) => (
          // Using a reversed copy of expenses to display them in reverse order
          // The `key` should ideally be something unique other than `index` if possible
          <Column key={index}>
            <Row style={{ display: "flex", gap: "16px" }}>
              <p>{formatForDisplay(expense.date)}</p>
              <p>{expense.amount}</p>
              <p>{expense.category}</p>
              <p>{expense.subcategory}</p>
            </Row>
          </Column>
        ))}
      </Column>

      <Button onClick={handleSubmitTransactions}>Submit Transactions</Button>
    </div>
  );
}

export default HorizontalInput;

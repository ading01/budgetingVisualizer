import React, { createContext, useState, useContext, useEffect } from "react";
import { TransactionAPI } from "../api";

const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTransactions = async () => {
    setIsLoading(true);
    try {
      // Replace the URL with your actual API endpoint
      const data = await TransactionAPI.getTransactions(1);
      console.log("transaction context", data);
      setTransactions(data);
      setError(null); // reset error state
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []); // Empty array means this effect runs once on mount

  return (
    <TransactionsContext.Provider value={{ transactions, isLoading, error }}>
      {children}
    </TransactionsContext.Provider>
  );
};

// Custom hook to use the context
export const useTransactions = () => useContext(TransactionsContext);

import { MyAreaChart } from "../../components/myAreaChart/myAreaChart";
import SectionContainer from "../../components/SectionContainer";
import SplitContainer from "../../components/SplitContainer";
import styled from "styled-components";
import GridExample from "../../components/Table";
// import NumberInputBasic from "../../components/NumberInput";
import HorizontalInput from "../../components/Input/HorizontalInput";
import { useTransactions } from "../../contexts/TransactionsContext";
import React, { useMemo } from "react";
import { useState } from "react";
import tempData from "../../tempData";

// import {Column}

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.texts.primary};
`;

function Home() {
  const { transactions, isLoading, error } = useTransactions();
  const [monthTransactions, setMonthTransactions] = useState([]);
  // interface :
  // const interface = `{month: "Feburary", transactions: []}`;

  const incomeTransactions = useMemo(() => {
    return transactions
      ? transactions.filter((transaction) => transaction.type === "INCOME")
      : [];
  }, [transactions]);

  const populateMonthTransactions = (monthsRequested) => {
    const groupedTransactions = groupAndSortTransactions.slice(
      0,
      parseInt(monthsRequested)
    );
    console.log("groupedTransactions", groupedTransactions);
    setMonthTransactions(groupedTransactions);
  };

  // see if this can be replaced with a useMemo
  const getTransactionsWithinMonth = (month, year) => {
    return transactions
      ? transactions.filter(
          (transaction) =>
            Date(transaction.date) > Date("2024-03-00T04:00:00.000+00:00")
        )
      : [];
  };

  const groupAndSortTransactions = useMemo(() => {
    const grouped = transactions
      ? transactions.reduce((acc, transaction) => {
          const monthYear = new Date(transaction.date).toLocaleString(
            "default",
            {
              month: "long",
              year: "numeric",
            }
          );
          if (!acc[monthYear]) {
            acc[monthYear] = [];
          }
          acc[monthYear].push(transaction);
          return acc;
        }, {})
      : [];

    // Convert to an array and sort by date (assuming transaction.date is in 'YYYY-MM-DD' format)
    return Object.entries(grouped)
      .map(([month, transactions]) => ({
        month,
        transactions,
      }))
      .sort(
        (a, b) =>
          new Date(b.transactions[0].date) - new Date(a.transactions[0].date)
      ); // Sort by the first transaction in each group
  }, [transactions]);

  const expenseTransactions = useMemo(() => {
    return transactions
      ? transactions.filter((transaction) => transaction.type === "EXPENSE")
      : [];
  }, [transactions]);

  return (
    <HomeContainer>
      <SectionContainer sectionNameId="inputs">
        <HorizontalInput label="Add income" placeholder="Enter your name" />
      </SectionContainer>
      <SectionContainer sectionNameId="hello">
        <MyAreaChart />
      </SectionContainer>
      <select
        onChange={(event) => populateMonthTransactions(event.target.value)}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>{" "}
      month
      {/* <NumberInputBasic
        aria-label="Demo number input"
        placeholder="Type a number…"
      /> */}
      {monthTransactions &&
        monthTransactions.map((transaction, key) => (
          <SectionContainer sectionNameId={key}>
            <SplitContainer
              section_name={transaction.month}
              resume_content={<GridExample data={transaction.transactions} />}
            />
          </SectionContainer>
        ))}
      <SectionContainer sectionNameId="hello">
        <SplitContainer
          section_name="Income"
          resume_content={<GridExample data={incomeTransactions} />}
        />
      </SectionContainer>
      <SectionContainer sectionNameId="hello">
        <SplitContainer
          section_name="Expenses"
          resume_content={<GridExample data={expenseTransactions} />}
        />
      </SectionContainer>
    </HomeContainer>
  );
}

export default Home;

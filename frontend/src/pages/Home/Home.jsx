import { MyAreaChart } from "../../components/myAreaChart/myAreaChart";
import SectionContainer from "../../components/SectionContainer";
import SplitContainer from "../../components/SplitContainer";
import GridExample from "../../components/Table";
import HorizontalInput from "../../components/Input/HorizontalInput";
import { useTransactions } from "../../contexts/TransactionsContext";
import React, { useMemo } from "react";
import { useState } from "react";
import { HomeContainer } from ".";

export function Home() {
  const { transactions, isLoading, error } = useTransactions();
  const { monthTransactions, setMonthTransactions } = useState([]);
  // interface :
  // const interface = `{month: "Feburary", transactions: []}`;
  const getTransactionsWithinMonth = (month, year) => {};

  const populateMonthTransactions = (monthsRequested) => {
    let requestedTransactions = [];
    const currMonth = Date().getDate();
    console.log("currMonth", currMonth);
    console.log(monthsRequested);
    // get current month
    // decrement backwards from that month
    // append transactions
    while (monthsRequested >= 0) {
      requestedTransactions = [
        ...requestedTransactions,
        { month: "March", transactions },
      ];
      monthsRequested -= 1;
    }

    // setMonthTransactions();
  };

  const incomeTransactions = useMemo(() => {
    return transactions.filter((transaction) => transaction.type === "INCOME");
  }, [transactions]);

  const expenseTransactions = useMemo(() => {
    return transactions.filter((transaction) => transaction.type === "EXPENSE");
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
      </select>
      {/* <NumberInputBasic
              aria-label="Demo number input"
              placeholder="Type a number…"
            /> */}

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

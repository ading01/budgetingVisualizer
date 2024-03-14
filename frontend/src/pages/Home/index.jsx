import { MyAreaChart } from "../../components/myAreaChart/myAreaChart";
import SectionContainer from "../../components/SectionContainer";
import SplitContainer from "../../components/SplitContainer";
import styled from "styled-components";
import GridExample from "../../components/Table";
import { Input, InputLabel } from "../../ui/input";
import { Button } from "../../ui/button";
import HorizontalInput from "../../components/Input/HorizontalInput";
import { useTransactions } from "../../contexts/TransactionsContext";
import React, { useMemo } from "react";

// import {Column}

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.texts.primary};
`;

function Home() {
  const { transactions, isLoading, error } = useTransactions();

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

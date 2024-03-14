import { MyAreaChart } from "../../components/myAreaChart/myAreaChart";
import SectionContainer from "../../components/SectionContainer";
import SplitContainer from "../../components/SplitContainer";
import styled from "styled-components";
import { GridExample } from "../../components/Table";
import { Input, InputLabel } from "../../ui/input";
import { Button } from "../../ui/button";
import HorizontalInput from "../../components/Input/HorizontalInput";
import { useTransactions } from "../../contexts/TransactionsContext";

// import {Column}

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.texts.primary};
`;

function Home() {
  const { transactions, isLoading, error } = useTransactions();

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
          section_name="Skills"
          resume_content={<GridExample />}
        />
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {transactions && (
          <div>
            <h2>Transactions</h2>
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  {transaction.text} - {transaction.amount}
                </li>
              ))}
            </ul>
          </div>
        )}
      </SectionContainer>
      <SectionContainer sectionNameId="hello">
        <SplitContainer
          section_name="Skills"
          resume_content={<GridExample />}
        />
      </SectionContainer>
    </HomeContainer>
  );
}

export default Home;

import { MyAreaChart } from "../../components/myAreaChart/myAreaChart";
import SectionContainer from "../../components/SectionContainer";
import SplitContainer from "../../components/SplitContainer";
import styled from "styled-components";
import GridExample from "../../components/Table";
// import NumberInputBasic from "../../components/NumberInput";
import HorizontalInput from "../../components/Input/HorizontalInput";
import { useTransactions } from "../../contexts/TransactionsContext";
import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import tempData from "../../tempData";
import { Chart } from "primereact/chart";

// import {Column}
import { LineChart } from "@mui/x-charts/LineChart";

// const monthlyElectricityProduction = [
//   { month: "January", income: 570.57, expenses: 1265.29 },
//   { month: "February", income: 701.19, expenses: 1419.51 },
//   { month: "March", income: 850.89, expenses: 1587.13 },
//   { month: "April", income: 1040.06, expenses: 1849.4 },
//   { month: "May", income: 1289.27, expenses: 2139.23 },
//   // Add more months as needed...
// ];

const chartData = [
  { month: "January", year: 2023, income: 1200, expenses: 1100 },
  { month: "February", year: 2023, income: 1500, expenses: 1200 },
  { month: "March", year: 2023, income: 1800, expenses: 1300 },
  { month: "April", year: 2023, income: 1600, expenses: 1450 },
  { month: "May", year: 2023, income: 2000, expenses: 1500 },
  { month: "June", year: 2023, income: 1700, expenses: 1600 },
  { month: "July", year: 2023, income: 2100, expenses: 1650 },
  { month: "August", year: 2023, income: 1900, expenses: 1700 },
  { month: "September", year: 2023, income: 2200, expenses: 1750 },
  { month: "October", year: 2023, income: 2300, expenses: 1800 },
  { month: "November", year: 2023, income: 2400, expenses: 1850 },
  { month: "December", year: 2023, income: 2500, expenses: 1900 },
];
export function MonthlyLineDataset({ chartData }) {
  const valueFormatter = (value) => `$${value}`;
  const colors = {
    income: "#1cb700",
    expenses: "#ff0000",
    savings: "rgba(72, 238, 46, 0.68)",
  };

  return (
    <LineChart
      dataset={chartData}
      grid={{ vertical: true, horizontal: true }}
      xAxis={[
        {
          scaleType: "point",
          dataKey: "month",
          valueFormatter: (month, context) => {
            // Find the year for the current month from chartData
            const year =
              chartData.find((data) => data.month === month)?.year || "Year";
            return context.location === "tick"
              ? `${month.slice(0, 3)} \n${year}` // Use the dynamically found year here
              : `${month} ${year}`;
          },
        },
      ]}
      series={[
        {
          dataKey: "income",
          label: "Income",
          color: colors.income,
          valueFormatter,
        },
        {
          dataKey: "expenses",
          label: "Expenses",
          color: colors.expenses,
          valueFormatter,
        },
        {
          dataKey: "savings",
          label: "Savings",
          color: colors.savings,
          // area: true,
          valueFormatter,
        },
      ]}
      width={800}
      height={500}
    />
  );
}
// const simplifiedElectricityProduction = [
//   { year: 2018, income: 570.57, expenses: 1265.29 },
//   { year: 2019, income: 701.19, expenses: 1419.51 },
//   { year: 2020, income: 850.89, expenses: 1587.13 },
//   { year: 2021, income: 1040.06, expenses: 1849.4 },
//   { year: 2022, income: 1289.27, expenses: 2139.23 },
// ];

// const colors = {
//   income: "#fab856",
//   expenses: "lightblue",
// };

// const stackStrategy = {
//   area: true,
//   stackOffset: "none", // To stack 0 on top of others
// };

// export function SimplifiedLineDataset() {
//   return (
//     <LineChart
//       xAxis={[
//         {
//           dataKey: "year",
//           valueFormatter: (value) => value.toString(),
//           // Assuming the xAxis can automatically handle the range based on data
//         },
//       ]}
//       series={[
//         {
//           dataKey: "income",
//           label: "Electricity from income (TWh)",
//           color: colors.income,
//           ...stackStrategy,
//         },
//         {
//           dataKey: "expenses",
//           label: "Electricity from expenses (TWh)",
//           color: colors.expenses,
//           ...stackStrategy,
//         },
//       ]}
//       dataset={simplifiedElectricityProduction}
//       height={300}
//       // Additional customization here if needed
//     />
//   );
// }

const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.texts.primary};
`;

function Home() {
  const { transactions, isLoading, error } = useTransactions();
  const [monthTransactions, setMonthTransactions] = useState([]);
  const [newChartData, setChartData] = useState([
    { month: "January", income: 570.57, expenses: 1265.29 },
    { month: "February", income: 701.19, expenses: 1419.51 },
    { month: "March", income: 850.89, expenses: 1587.13 },
    { month: "April", income: 1040.06, expenses: 1849.4 },
    { month: "May", income: 1289.27, expenses: 2139.23 },
    // Add more months as needed...
  ]);
  // interface :
  // const interface = `{month: "Feburary", transactions: []}`;

  const incomeTransactions = useMemo(() => {
    return transactions
      ? transactions.filter((transaction) => transaction.type === "INCOME")
      : [];
  }, [transactions]);

  useEffect(() => {
    // Your code here will run once, after the initial render
    populateMonthTransactions(6);
    populateChartData(6);
  }, [transactions]); // Empty dependency array means this runs on mount only

  function processTransactions(transactions) {
    const transactionSummary = {};

    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const year = date.getFullYear();
      const month = date.toLocaleString("default", { month: "long" });
      const key = `${month} ${year}`;

      if (!transactionSummary[key]) {
        transactionSummary[key] = {
          month,
          year,
          income: 0,
          expenses: 0,
          savings: 0,
        };
      }

      if (transaction.type === "INCOME") {
        transactionSummary[key].income += transaction.amount;
        transactionSummary[key].savings += transaction.amount;
      } else if (transaction.type === "EXPENSE") {
        transactionSummary[key].expenses += transaction.amount;
        transactionSummary[key].savings -= transaction.amount;
      }
    });

    // Convert the summary object into an array of values
    return Object.values(transactionSummary).sort((a, b) => {
      return (
        new Date(
          a.year,
          new Date(Date.parse(`${a.month} 1, ${a.year}`)).getMonth()
        ) -
        new Date(
          b.year,
          new Date(Date.parse(`${b.month} 1, ${b.year}`)).getMonth()
        )
      );
    });
  }

  const populateChartData = (monthsRequested) => {
    console.log("processed transactions", processTransactions(transactions));

    // Reverse the data array so that the most recent month is first
    setChartData(processTransactions(transactions));
  };

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

  // const chartData = {
  //   labels: ["January", "February", "March", "April", "May"],
  //   datasets: [
  //     {
  //       label: "Income",
  //       data: [500, 300, 499, 293, 292],
  //       borderColor: "#39a6ff",
  //       // fill: true,
  //       tension: 0.4,
  //     },
  //     {
  //       label: "Expenses",
  //       // backgroundColor: "#FFA726",
  //       data: [28, 48, 40, 19, 86],
  //       fill: true,
  //       tension: 0.4,
  //       backgroundColor: "rgba(255, 186, 38, 0.2)",
  //     },
  //   ],
  // };

  // const chartOptions = {
  //   plugins: {
  //     legend: {
  //       display: true,
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Monthly Income and Expenses",
  //     },
  //   },
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //       title: {
  //         display: true,
  //         text: "Amount ($)",
  //       },
  //     },
  //   },
  //   responsive: true,
  //   maintainAspectRatio: true,
  // };

  return (
    <HomeContainer>
      <SectionContainer sectionNameId="inputs">
        <HorizontalInput label="Add income" placeholder="Enter your name" />
      </SectionContainer>
      <SectionContainer sectionNameId="hello">
        <div style={{ width: "800px", height: "800px" }}>
          {/* <Chart type="line" data={chartData} options={chartOptions} /> */}
          <MonthlyLineDataset chartData={newChartData} />
        </div>
        {/* <LineDataset /> */}
        {/* <BasicArea /> */}
        {/* <MyAreaChart /> */}
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

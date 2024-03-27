import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "Janurary",
    income: 1000,
    expenses: 2400,
  },
  {
    month: "February",
    income: 3000,
    expenses: 1398,
  },
  {
    month: "March",
    income: 2000,
    expenses: 1200,
  },
];

export const MyAreaChart = () => {
  return (
    <AreaChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 10,
        bottom: 20,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="income"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="expenses"
        stackId="1"
        stroke="#d20000"
        fill="#d20000"
      />
    </AreaChart>
  );
};

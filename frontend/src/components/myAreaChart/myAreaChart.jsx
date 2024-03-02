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
    name: "Janurary",
    uv: 4000,
    pv: 2400,
    amt: 10_200,
    expenses: 2400,
  },
  {
    name: "February",
    uv: 3000,
    pv: 1398,
    amt: 2210,
    expenses: 2400,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
    expenses: 2400,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
    expenses: 2400,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
    expenses: 2400,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
    expenses: 2400,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
    expenses: 2400,
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
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
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

import React from "react";
import { Bar } from "react-chartjs-2";

const BarChar = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default BarChar;

import React from "react";
import { Pie } from "react-chartjs-2";

const BarChar = ({ chartData }) => {
  return <Pie data={chartData} />;
};

export default BarChar;

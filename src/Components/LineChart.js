import React from "react";
import { Line } from "react-chartjs-2";

const BarChar = ({ chartData }) => {
  return <Line data={chartData} />;
};

export default BarChar;

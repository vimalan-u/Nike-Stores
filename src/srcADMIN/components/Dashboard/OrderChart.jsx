import React, { useRef, useEffect, useState } from "react";
import { Box, useTheme } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart as ChartComponent } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const colors = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "blue",
  "purple",
];

export const data = {
  labels,
  datasets: [
    {
      label: "ORDERS",
      data: labels.map(() => Math.random() * 1000),
      pointStyle: "circle",
    },
    {
      label: "USERS",
      data: labels.map(() => Math.random() * 1000),
      pointStyle: "circle",
    },
  ],
};

function createGradient(ctx, area) {
  const colorStart = colors[Math.floor(Math.random() * colors.length)];
  const colorMid = colors.filter((color) => color !== colorStart)[
    Math.floor(Math.random() * (colors.length - 1))
  ];
  const colorEnd = colors.filter(
    (color) => color !== colorStart && color !== colorMid
  )[Math.floor(Math.random() * (colors.length - 2))];

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

function OrderChart() {
  const theme = useTheme();
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    ...data,
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const updatedData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
        borderColor: theme.colors.gray[800],
      })),
    };

    setChartData(updatedData);
  }, [theme]);

  return (
    <Box bg={"#13141c"} p={4} borderRadius="md" boxShadow="md">
      <ChartComponent ref={chartRef} type="line" data={chartData} />
    </Box>
  );
}

export default OrderChart;

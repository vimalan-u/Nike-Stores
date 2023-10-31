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
import { Line } from "react-chartjs-2";

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
    },
    {
      label: "USERS",
      data: labels.map(() => Math.random() * 1000),
    },
  ],
};

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
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function createGradient(ctx, area) {
      const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
      gradient.addColorStop(0, getRandomColor());
      gradient.addColorStop(0.5, getRandomColor());
      gradient.addColorStop(1, getRandomColor());

      return gradient;
    }

    const updatedData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };
    // const chartOptions = {
    //   scales: {
    //     y: {
    //       beginAtZero: true,
    //       color: '#fff', // Set y-axis label text color to white
    //     },
    //     x: {
    //       color: '#fff', // Set x-axis label text color to white
    //     },
    //   },
    // };
    setChartData(updatedData);
    // chart.options = chartOptions;
  }, [theme]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Order Line Chart",
      },
    },
  };

  return (
    <Box
      bg={"#13141c"}
      width={"full"}
      p={4}
      borderRadius="md"
      boxShadow="md"
      minH={"250px"}
      sx={{
        background: "rgba(255, 255, 255, 0.02)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
        border: "1px solid rgba(255, 255, 255, 0.42)",
      }}
    >
      <Line options={options} ref={chartRef} data={chartData} />
    </Box>
  );
}

export default OrderChart;

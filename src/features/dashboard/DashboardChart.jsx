import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardChart = () => {
  // Example data
  const data = {
    labels: ["Completed", "Pending", "Cancelled"], // Categories
    datasets: [
      {
        label: "Appointments",
        data: [20, 15, 5], // Example data values
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"], // Bar colors
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Lawyer Appointment Statistics",
      },
    },
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DashboardChart;

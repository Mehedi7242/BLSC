import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const GenerateReport = () => {
  const [reportData, setReportData] = useState({
    clients: 500,
    appointments: 20,
    revenue: 1500,
    expenses: 800,
    profit: 700,
    orders: 300,
  });

  // Enhanced Dummy Data for Bar Chart
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [1200, 1100, 1300, 900, 1500],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Expenses ($)',
        data: [800, 700, 750, 600, 900],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Profit ($)',
        data: [400, 400, 550, 300, 600],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Orders',
        data: [150, 200, 220, 180, 250],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Enhanced Dummy Data for Pie Chart
  const pieChartData = {
    labels: ['Clients', 'Appointments', 'Revenue', 'Orders', 'Expenses', 'Profit'],
    datasets: [
      {
        data: [500, 20, 1500, 300, 800, 700],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Clients
          'rgba(153, 102, 255, 0.6)', // Appointments
          'rgba(255, 159, 64, 0.6)', // Revenue
          'rgba(54, 162, 235, 0.6)', // Orders
          'rgba(255, 99, 132, 0.6)', // Expenses
          'rgba(255, 206, 86, 0.6)', // Profit
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)', // Clients
          'rgba(153, 102, 255, 1)', // Appointments
          'rgba(255, 159, 64, 1)', // Revenue
          'rgba(54, 162, 235, 1)', // Orders
          'rgba(255, 99, 132, 1)', // Expenses
          'rgba(255, 206, 86, 1)', // Profit
        ],
        borderWidth: 1,
      },
    ],
  };

  // Simulate report generation
  const handleGenerateReport = () => {
    console.log("Generating Report...");
    const report = `Clients,Appointments,Revenue,Orders,Expenses,Profit\n${reportData.clients},${reportData.appointments},${reportData.revenue},${reportData.orders},${reportData.expenses},${reportData.profit}`;
    const blob = new Blob([report], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "report.csv";
    link.click();
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
``  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
    Generate Report
  </h2>

  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      Report Summary
    </h3>
    <div className="bg-gray-50 p-4 rounded-lg shadow-md border border-gray-200">
      <p className="text-lg text-gray-700 mb-2">
        <strong>Total Clients:</strong> {reportData.clients}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Upcoming Appointments:</strong> {reportData.appointments}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Total Revenue:</strong> ${reportData.revenue}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Total Orders:</strong> {reportData.orders}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Total Expenses:</strong> ${reportData.expenses}
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Total Profit:</strong> ${reportData.profit}
      </p>
    </div>
  </div>

  <div className="my-6" style={{ height: "400px", width: "100%" }}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Financial Overview</h3>
    <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
  </div>

  <div className="my-6" style={{ height: "400px", width: "100%" }}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">Distribution</h3>
    <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
  </div>

  {/* Generate Report Button */}
  <div className="text-center mt-8">
    <button
      onClick={handleGenerateReport}
      className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
    >
      Generate Report
    </button>
  </div>``
</div>

  );
};

export default GenerateReport;

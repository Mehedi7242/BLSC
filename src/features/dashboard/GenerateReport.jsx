import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Link } from "react-router-dom";
import {
  FaUserAlt,
  FaCalendarCheck,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const GenerateReport = () => {
  const [reportData] = useState({
    clients: 500,
    appointments: 20,
    revenue: 1500,
    expenses: 800,
    profit: 700,
    orders: 300,
  });

  const barChartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [1200, 1100, 1300, 900, 1500],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expenses ($)",
        data: [800, 700, 750, 600, 900],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Clients", "Appointments", "Revenue", "Orders", "Expenses", "Profit"],
    datasets: [
      {
        data: [500, 20, 1500, 300, 800, 700],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleGenerateReport = () => {
    const report = `Clients,Appointments,Revenue,Orders,Expenses,Profit\n${reportData.clients},${reportData.appointments},${reportData.revenue},${reportData.orders},${reportData.expenses},${reportData.profit}`;
    const blob = new Blob([report], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "report.csv";
    link.click();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-800 text-white p-6">
  <h2 className="text-2xl font-bold mb-8">Lawyer Panel</h2>
  <nav>
    <ul>
      {/* Dashboard Link */}
      <li className="mb-4">
        <Link to="/dashboard" className="text-lg hover:text-gray-400">
          Dashboard
        </Link>
      </li>

      {/* Manage Clients Link */}
      <li>
        <Link
          to="/dashboard/manage-clients"
          className="flex items-center p-2 hover:bg-gray-700 rounded mb-4"
        >
          <FaUserAlt className="mr-2" /> Manage Clients
        </Link>
      </li>

      {/* Manage Appointments Link */}
      <li>
        <Link
          to="/dashboard/appointments"
          className="flex items-center p-2 hover:bg-gray-700 rounded mb-4"
        >
          <FaCalendarCheck className="mr-2" /> Manage Appointments
        </Link>
      </li>

      {/* Generate Reports Link */}
      <li>
        <Link
          to="/dashboard/reports"
          className="flex items-center p-2 hover:bg-gray-700 rounded mb-4"
        >
          <FaFileAlt className="mr-2" /> Generate Reports
        </Link>
      </li>

      {/* Messages Link */}
      <li>
        <Link
          to="/dashboard/messages"
          className="flex items-center p-2 hover:bg-gray-700 rounded"
        >
          <FaEnvelope className="mr-2" /> Messages
        </Link>
      </li>
    </ul>
  </nav>
</div>


      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
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
            </div>
          </div>

          <div className="mb-6" style={{ height: "400px" }}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Financial Overview
            </h3>
            <Bar
              data={barChartData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>

          <div className="mb-6" style={{ height: "400px" }}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Distribution
            </h3>
            <Pie
              data={pieChartData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>

          <div className="text-center">
            <button
              onClick={handleGenerateReport}
              className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;

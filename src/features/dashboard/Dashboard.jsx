import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaCalendarCheck, FaFileAlt, FaEnvelope } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="text-lg hover:text-gray-400">Dashboard</Link>
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
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Laywer Dashboard</h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Total Clients</h3>
            <p className="text-2xl font-bold text-blue-600">500</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h3>
            <p className="text-2xl font-bold text-green-600">20</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <Link to={'/dashboard/messages'} className="text-lg font-semibold text-gray-800">Messages</Link>
            <p className="text-2xl font-bold text-red-600">10</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <ul className="bg-white shadow-lg rounded-lg p-6">
            <li className="flex justify-between mb-4">
              <span>Client "John Doe" booked an appointment</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between mb-4">
              <span>New message from "Sarah Lee"</span>
              <span className="text-sm text-gray-500">3 hours ago</span>
            </li>
            <li className="flex justify-between mb-4">
              <span>Report generated for the month of December</span>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </li>
          </ul>
        </div>

        {/* Settings Link */}
        <div className="mt-8 text-center">
          <Link
            to="/dashboard/settings"
            className="text-blue-500 hover:text-blue-700 font-semibold text-lg"
          >
            Go to Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

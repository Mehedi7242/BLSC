import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import DashboardChart from "./DashboardChart";

import { FaUserAlt, FaCalendarCheck, FaFileAlt, FaEnvelope } from "react-icons/fa";

const ManageClients = () => {
  const [clients, setClients] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
    { id: 3, name: "Sam Johnson", email: "sam@example.com", phone: "555-555-5555" },
  ]);

  // Delete client handler
  const handleDelete = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Lawyer Panel</h2>
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

    <div className="flex-1 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Clients</h2>

      {/* Clients Table */}
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-b">
              <td className="py-2 px-4">{client.name}</td>
              <td className="py-2 px-4">{client.email}</td>
              <td className="py-2 px-4">{client.phone}</td>
              <td className="py-2 px-4 flex items-center space-x-2">
                <Link to={`/dashboard/manage-clients/edit/${client.id}`} className="text-yellow-500 hover:text-yellow-700">
                  <FaPen />
                </Link>
                <button
                  onClick={() => handleDelete(client.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Client Button */}
      <div className="mt-6 text-center">
        <Link
          to="/dashboard/manage-clients/add"
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Add New Client
        </Link>
      </div>
      <DashboardChart></DashboardChart>
    </div>
  </div>
  );
};

export default ManageClients;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";


import { FaUserAlt, FaCalendarCheck, FaFileAlt, FaEnvelope, } from "react-icons/fa";

const ManageAppointments = () => {
  // Dummy appointments data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      clientName: "John Doe",
      date: "2024-12-31",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      clientName: "Jane Smith",
      date: "2024-12-30",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      clientName: "Sam Johnson",
      date: "2024-12-29",
      time: "11:00 AM",
      status: "Canceled",
    },
  ]);

  // Delete appointment handler
  const handleDelete = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };

  // Edit appointment handler (just for navigation here)
  const handleEdit = (id) => {
    // Redirect to edit appointment page
    console.log(`Editing appointment with ID: ${id}`);
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
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Manage Appointments
      </h2>

      {/* Appointments Table */}
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">Client Name</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Time</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="border-b">
              <td className="py-2 px-4">{appointment.clientName}</td>
              <td className="py-2 px-4">{appointment.date}</td>
              <td className="py-2 px-4">{appointment.time}</td>
              <td className="py-2 px-4">{appointment.status}</td>
              <td className="py-2 px-4 flex items-center space-x-2">
                <Link
                  to={`/dashboard/appointments/edit/${appointment.id}`}
                  onClick={() => handleEdit(appointment.id)}
                  className="text-yellow-500 hover:text-yellow-700"
                >
                  <FaPen />
                </Link>
                <button
                  onClick={() => handleDelete(appointment.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Appointment Button */}
      <div className="mt-6 text-center">
        <Link
          to="/dashboard/appointments/add"
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Add New Appointment
        </Link>
      </div>
    </div>
    </div>
  );
};

export default ManageAppointments;

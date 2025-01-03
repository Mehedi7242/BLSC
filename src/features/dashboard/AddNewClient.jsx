import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaUserAlt, FaCalendarCheck, FaFileAlt, FaEnvelope } from "react-icons/fa";

const AddNewClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();; // Used for redirecting after form submission

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can add logic to save the client data (e.g., to a backend or local storage)

    // For now, we'll just log the data and redirect
    const newClient = {
      name,
      email,
      phone,
    };

    console.log("New Client added:", newClient);

    // Redirect to the Manage Clients page after submitting the form
    navigate('/dashboard/manage-clients');
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Client</h2>
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Laywer Panel</h2>
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

      {/* Add Client Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter client's name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter client's email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter client's phone number"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Add Client
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewClient;

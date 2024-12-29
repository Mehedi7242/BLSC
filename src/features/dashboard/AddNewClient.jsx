import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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

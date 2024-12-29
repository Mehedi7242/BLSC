import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditClient = () => {
  const { id } = useParams(); // Get client id from URL
  const navigate = useNavigate();

  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Simulate fetching the client data from an API or state
  useEffect(() => {
    // Find the client by id (you might fetch this from an API or global state)
    const foundClient = {
      id,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    };
    setClient(foundClient);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate updating the client (e.g., send a PUT request to an API)
    console.log("Client updated:", client);
    // Redirect back to manage clients page
    navigate("/dashboard/manage-clients");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={client.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={client.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={client.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditClient;

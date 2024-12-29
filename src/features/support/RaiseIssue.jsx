// src/features/support/RaiseIssue.jsx
import React, { useState } from "react";

const RaiseIssue = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle submitting the issue to the backend
    console.log("Issue Raised:", { title, description });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Raise a New Issue</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Issue Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Issue Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded">Submit Issue</button>
      </form>
    </div>
  );
};

export default RaiseIssue;

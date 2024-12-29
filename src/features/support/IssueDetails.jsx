// src/features/support/IssueDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const IssueDetails = () => {
  const { issueId } = useParams();
  
  // Dummy data for demonstration
  const issue = {
    id: issueId,
    title: "Unable to access the dashboard",
    description: "User is facing issues while trying to access the dashboard. Error 404 appears.",
    status: "Open",
    createdAt: "2024-12-29",
    updatedAt: "2024-12-29"
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">{issue.title}</h2>
      <p className="mt-2">Description: {issue.description}</p>
      <p className="mt-2">Status: <span className="font-semibold">{issue.status}</span></p>
      <p className="mt-2">Created at: {issue.createdAt}</p>
      <p className="mt-2">Last updated: {issue.updatedAt}</p>
    </div>
  );
};

export default IssueDetails;

// src/features/support/IssueList.jsx
import React from "react";
import { Link } from "react-router-dom";

const IssueList = () => {
  // Dummy data for demonstration
  const issues = [
    { id: 1, title: "Unable to access dashboard", status: "Open" },
    { id: 2, title: "Payment issue", status: "Closed" },
    { id: 3, title: "Bug in the profile page", status: "Open" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Issues List</h2>
      <ul className="space-y-4">
        {issues.map((issue) => (
          <li key={issue.id} className="border-b pb-2">
            <Link to={`/support/issues/${issue.id}`} className="text-blue-600">
              {issue.title} - <span className={`font-semibold ${issue.status === "Open" ? "text-red-600" : "text-green-600"}`}>{issue.status}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;

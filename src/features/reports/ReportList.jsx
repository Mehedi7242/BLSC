import React from "react";
import { Link } from "react-router-dom";

const ReportList = () => {
  const reports = [
    { id: 1, title: "Monthly Appointments Report", date: "2024-01-01" },
    { id: 2, title: "Consultant Performance Report", date: "2024-01-15" },
    { id: 3, title: "Client Feedback Analysis", date: "2024-02-01" },
  ];

  return (
    <section>
      <h1>Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <Link to={`/reports/${report.id}`}>
              {report.title} - {report.date}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReportList;

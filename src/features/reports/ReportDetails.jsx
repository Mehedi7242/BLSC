import React from "react";
import { useParams } from "react-router-dom";

const ReportDetails = () => {
  const { reportId } = useParams();

  const reportData = {
    1: "Detailed analysis of monthly appointments.",
    2: "Performance metrics for consultants over the last quarter.",
    3: "Summary of client feedback and suggestions.",
  };

  return (
    <section>
      <h1>Report Details</h1>
      <p><strong>Report ID:</strong> {reportId}</p>
      <p>{reportData[reportId] || "No details available for this report."}</p>
    </section>
  );
};

export default ReportDetails;

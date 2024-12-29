// src/features/appointments/AppointmentDetails.jsx
import React from "react";

const AppointmentDetails = ({ selectedAppointment }) => {
  if (!selectedAppointment) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold">Select an appointment to view details</h3>
      </div>
    );
  }

  const { clientName, date, time, contact, notes } = selectedAppointment;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
      <div className="space-y-4">
        <p className="font-medium">Client: <span className="font-normal">{clientName}</span></p>
        <p className="font-medium">Date: <span className="font-normal">{date}</span></p>
        <p className="font-medium">Time: <span className="font-normal">{time}</span></p>
        <p className="font-medium">Contact: <span className="font-normal">{contact}</span></p>
        <p className="font-medium">Notes: <span className="font-normal">{notes}</span></p>
      </div>
    </div>
  );
};

export default AppointmentDetails;

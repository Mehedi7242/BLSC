// src/features/appointments/Appointments.jsx
import React, { useState } from "react";
import AppointmentsList from "./AppointmentsList";
import AppointmentDetails from "./AppointmentDetails";

// Dummy data for appointments
const dummyAppointments = [
  {
    id: 1,
    clientName: "John Doe",
    date: "2024-12-30",
    time: "10:00 AM",
    contact: "johndoe@example.com",
    notes: "Discuss contract renewal.",
  },
  {
    id: 2,
    clientName: "Jane Smith",
    date: "2024-12-31",
    time: "2:00 PM",
    contact: "janesmith@example.com",
    notes: "Prepare for case hearing.",
  },
  {
    id: 3,
    clientName: "Michael Brown",
    date: "2025-01-05",
    time: "11:00 AM",
    contact: "michaelb@example.com",
    notes: "Discuss partnership agreement.",
  },
];

const Appointments = () => {
  const [appointments] = useState(dummyAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleSelectAppointment = (id) => {
    const appointment = appointments.find((app) => app.id === id);
    setSelectedAppointment(appointment);
  };

  return (
    <div className="flex space-x-10 p-6">
      <div className="w-1/3">
        <AppointmentsList
          appointments={appointments}
          onSelectAppointment={handleSelectAppointment}
        />
      </div>
      <div className="w-2/3">
        <AppointmentDetails selectedAppointment={selectedAppointment} />
      </div>
    </div>
  );
};

export default Appointments;

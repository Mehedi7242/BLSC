// src/features/appointments/AppointmentsList.jsx
import React from "react";

const AppointmentsList = ({ appointments, onSelectAppointment }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Appointments</h3>
      {appointments.length === 0 ? (
        <p>No appointments available</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="cursor-pointer bg-gray-100 p-3 mb-3 rounded-lg hover:bg-gray-200"
              onClick={() => onSelectAppointment(appointment.id)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium">{appointment.clientName}</p>
                <p className="text-sm text-gray-600">
                  {appointment.date} at {appointment.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentsList;

import React, { useState } from "react";

const AppointmentsList = ({ appointments, onSelectAppointment }) => {
  const [filter, setFilter] = useState("all"); // "all" or "completed"

  // Filtered appointments based on the selected filter
  const filteredAppointments =
    filter === "completed"
      ? appointments.filter((appointment) => appointment.status === "Completed")
      : appointments;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Appointments</h3>
        <div>
          <button
            className={`px-4 py-2 mr-2 rounded ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded ${
              filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {filteredAppointments.length === 0 ? (
        <p>No appointments available</p>
      ) : (
        <ul>
          {filteredAppointments.map((appointment) => (
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
                <p
                  className={`text-sm ${
                    appointment.status === "Completed"
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                >
                  {appointment.status}
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

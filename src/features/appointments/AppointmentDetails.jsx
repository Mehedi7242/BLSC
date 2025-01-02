import React from "react";
import Swal from "sweetalert2";

const AppointmentDetails = ({ selectedAppointment, onMarkCompleted, onCancelAppointment }) => {
  if (!selectedAppointment) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold">Select an appointment to view details</h3>
      </div>
    );
  }

  const { clientName, date, time, contact, notes } = selectedAppointment;

  const handleMarkCompleted = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to mark this appointment as completed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, mark it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Marked!", "The appointment has been marked as completed.", "success");
        onMarkCompleted(selectedAppointment.id);
      }
    });
  };

  const handleCancelAppointment = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This appointment will be canceled permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Canceled!", "The appointment has been canceled.", "success");
        onCancelAppointment(selectedAppointment.id);
      }
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Appointment Details</h3>
      <div className="space-y-4">
        <p className="font-medium">
          Client: <span className="font-normal">{clientName}</span>
        </p>
        <p className="font-medium">
          Date: <span className="font-normal">{date}</span>
        </p>
        <p className="font-medium">
          Time: <span className="font-normal">{time}</span>
        </p>
        <p className="font-medium">
          Contact: <span className="font-normal">{contact}</span>
        </p>
        <p className="font-medium">
          Notes: <span className="font-normal">{notes || "No additional notes"}</span>
        </p>
      </div>
      <div className="mt-6 flex space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleMarkCompleted}
        >
          Mark as Completed
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleCancelAppointment}
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetails;

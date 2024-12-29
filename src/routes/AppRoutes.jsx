// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import NotFound from "../pages/NotFound";


import Dashboard from "../features/dashboard/Dashboard";
import Appointments from "../features/appointments/Appointments";
import AppointmentDetails from "../features/appointments/AppointmentDetails"; 
import Profile from "../features/profile/Profile"; 
import IssueList from "../features/support/IssueList";
import IssueDetails from "../features/support/IssueDetails";
import RaiseIssue from "../features/support/RaiseIssue";

import PrivateRoute from "./PrivateRoute";
import LawyerDetails from "../features/Home/LawyerDetails";
import EditProfile from "../features/profile/EditProfile";
import Message from "../features/dashboard/Message";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Private Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/appointments"
        element={
          <PrivateRoute>
            <Appointments />
          </PrivateRoute>
        }
      />
      <Route path="/lawyers/:lawyerName" element={<LawyerDetails />} />
      <Route
        path="/appointments/:appointmentId"
        element={
          <PrivateRoute>
            <AppointmentDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile/edit"
        element={
          <PrivateRoute>
            <EditProfile></EditProfile>
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard/messages"
        element={
          <PrivateRoute>
            <Message></Message>
          </PrivateRoute>
        }
      />
      
      <Route
        path="/support/issues"
        element={
          <PrivateRoute>
            <IssueList />
          </PrivateRoute>
        }
      />
      <Route
        path="/support/issues/:issueId"
        element={
          <PrivateRoute>
            <IssueDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/support/raise-issue"
        element={
          <PrivateRoute>
            <RaiseIssue />
          </PrivateRoute>
        }
      />


      {/* Catch-all Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

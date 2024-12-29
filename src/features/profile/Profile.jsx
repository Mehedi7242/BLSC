import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street",
    dob: "1990-01-01",
    gender: "male",
    specialization: "Corporate Law",
    experience: "5 years",
    userType: "customer", // Default user type is 'customer'
    licenseNumber: "", // Empty initially for customer
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleToggleUserType = () => {
    setProfile((prevState) => ({
      ...prevState,
      userType: prevState.userType === "customer" ? "lawyer" : "customer",
    }));
  };

 
  useEffect(() => {
    const fetchProfile = async () => {
     
      const fetchedProfile = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1234567890",
        address: "123 Main Street",
        dob: "1990-01-01",
        gender: "male",
        specialization: "Corporate Law",
        experience: "5 years",
        userType: "customer", // Default user type is 'customer'
        licenseNumber: "", // Empty initially for customer
      };
      setProfile(fetchedProfile);
    };

    fetchProfile();
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">My Profile</h1>

        {/* Profile Card */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Profile Information</h2>
            <p className="text-lg text-gray-600">
              Welcome to your profile page! Here you can view and manage your profile details.
            </p>
          </div>

          {/* Toggle between Lawyer and Customer */}
          <div className="mb-4 flex justify-center">
            <button
              onClick={handleToggleUserType}
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Switch to {profile.userType === "customer" ? "Lawyer" : "Customer"} Profile
            </button>
          </div>

          {/* Profile Details */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Name:</span>
              <span className="text-gray-600">{profile.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Email:</span>
              <span className="text-gray-600">{profile.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Phone:</span>
              <span className="text-gray-600">{profile.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Date of Birth:</span>
              <span className="text-gray-600">{profile.dob}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-700">Gender:</span>
              <span className="text-gray-600">{profile.gender}</span>
            </div>

            {/* Additional Fields Based on User Type */}
            {profile.userType === "customer" && (
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Address:</span>
                <span className="text-gray-600">{profile.address}</span>
              </div>
            )}

            {profile.userType === "lawyer" && (
              <>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">License Number:</span>
                  <span className="text-gray-600">{profile.licenseNumber || "Not Provided"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Specialization:</span>
                  <span className="text-gray-600">{profile.specialization}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">Experience:</span>
                  <span className="text-gray-600">{profile.experience}</span>
                </div>
              </>
            )}
          </div>

          {/* Edit Profile Link */}
          <div className="mt-8 text-center">
            <Link
              to="/profile/edit"
              className="text-blue-500 hover:text-blue-700 font-semibold text-lg"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

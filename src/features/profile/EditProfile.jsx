import React, { useState } from "react";
import Swal from "sweetalert2";

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street",
    dob: "1990-01-01",
    gender: "male",
    specialization: "Corporate Law",
    experience: "5 years",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!profile.name || !profile.email || !profile.phone || !profile.address) {
      Swal.fire({
        title: 'Error!',
        text: 'All fields are required.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
      return;
    }

    // Display SweetAlert success message
    Swal.fire({
      title: 'Profile Updated!',
      text: 'Your profile information has been successfully updated.',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    // You can add your API call to update the profile here
    console.log("Updated Profile:", profile);
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Edit Profile</h1>

        {/* Profile Edit Form */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-lg font-semibold text-gray-700">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label htmlFor="dob" className="block text-lg font-semibold text-gray-700">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={profile.dob}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label htmlFor="gender" className="block text-lg font-semibold text-gray-700">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Specialization */}
            <div className="mb-4">
              <label htmlFor="specialization" className="block text-lg font-semibold text-gray-700">Specialization:</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={profile.specialization}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Experience */}
            <div className="mb-4">
              <label htmlFor="experience" className="block text-lg font-semibold text-gray-700">Years of Experience:</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={profile.experience}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Save Changes Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;

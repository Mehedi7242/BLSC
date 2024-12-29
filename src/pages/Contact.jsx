import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseDescription: "",
    inquiryType: "General Inquiry",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or email)
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>

        {/* Contact Description */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <p className="text-lg text-gray-600">
            If you have any questions or need legal support, please don't hesitate to reach out to us. We are here to assist you with your legal concerns and will get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Inquiry Type */}
              <div className="mb-4">
                <label htmlFor="inquiryType" className="block text-gray-700 font-semibold mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Case Consultation">Case Consultation</option>
                  <option value="Legal Advice">Legal Advice</option>
                </select>
              </div>
            </div>

            {/* Case Description */}
            <div className="mb-4">
              <label htmlFor="caseDescription" className="block text-gray-700 font-semibold mb-2">
                Case Description
              </label>
              <textarea
                id="caseDescription"
                name="caseDescription"
                value={formData.caseDescription}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Briefly describe your legal issue or case."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Contact Information</h2>
          <p className="text-lg text-gray-600">You can also reach us through the following contact details:</p>
          <p className="text-lg text-gray-600 mt-4">Email: <span className="text-blue-500">support@legalconsultation.com</span></p>
          <p className="text-lg text-gray-600 mt-2">Phone: <span className="text-blue-500">+880 123 456 7890</span></p>
          <p className="text-lg text-gray-600 mt-2">Address: <span className="text-blue-500">Dhaka, Bangladesh, 1205</span></p>
          <p className="text-lg text-gray-600 mt-2">Office Location: <span className="text-blue-500">Legal Consulting Firm, House #123, Road #4, Sector #6, Uttara, Dhaka, Bangladesh</span></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

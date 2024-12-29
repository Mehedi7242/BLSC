import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>

        {/* Introduction Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome to Our Legal Consultation System</h2>
          <p className="text-gray-600 text-lg">
            Our platform connects clients with experienced legal professionals to provide expert advice and assistance in various fields of law. We are dedicated to offering high-quality legal consultation that is accessible, reliable, and trustworthy.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            We aim to make legal assistance accessible to everyone. Our mission is to simplify the process of finding qualified lawyers and provide clients with reliable advice that can help them make informed decisions.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            We believe in integrity, professionalism, and a commitment to excellence, ensuring that our clients receive the best legal services possible.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://img.freepik.com/free-vector/female-lawyer-concept-illustration_114360-16427.jpg?t=st=1735472904~exp=1735476504~hmac=494e74223834197eee2ed13b053fbf8ba9b7f695d8ada2f1278653d96752e70b&w=740"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-700">John Doe</h3>
              <p className="text-center text-gray-600">Criminal Law Expert</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://img.freepik.com/free-vector/female-lawyer-concept-illustration_114360-16427.jpg?t=st=1735472904~exp=1735476504~hmac=494e74223834197eee2ed13b053fbf8ba9b7f695d8ada2f1278653d96752e70b&w=740"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-700">Jane Smith</h3>
              <p className="text-center text-gray-600">Family Law Specialist</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <img
                src="https://img.freepik.com/free-vector/female-lawyer-concept-illustration_114360-16427.jpg?t=st=1735472904~exp=1735476504~hmac=494e74223834197eee2ed13b053fbf8ba9b7f695d8ada2f1278653d96752e70b&w=740"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-700">Samuel Lee</h3>
              <p className="text-center text-gray-600">Corporate Law Advisor</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-4">
            If you have any questions or need legal advice, feel free to reach out to us. We are here to assist you.
          </p>
          <p className="text-gray-600 text-lg">
            Email: <span className="text-blue-500">support@legalconsultation.com</span>
          </p>
          <p className="text-gray-600 text-lg mt-2">
            Phone: <span className="text-blue-500">+1 (123) 456-7890</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

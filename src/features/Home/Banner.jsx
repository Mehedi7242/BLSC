import React from "react";

const Banner = () => {
  return (
    <section className="bg-green-500 text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Expert Legal Consultation at Your Fingertips</h2>
      <p className="text-lg mb-6">Get professional legal advice and services from trusted experts in Bangladesh.</p>
      <a
        href="/contact"
        className="bg-white text-green-500 py-2 px-6 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300"
      >
        Contact Us Today
      </a>
    </section>
  );
};

export default Banner;

import React from "react";

const CTA = () => {
  return (
    <section className="bg-green-500 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-lg mb-6">Our legal experts are just a call away. Get in touch now to schedule a consultation.</p>
      <a
        href="/contact"
        className="bg-white text-green-500 py-2 px-6 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300"
      >
        Get in Touch
      </a>
    </section>
  );
};

export default CTA;

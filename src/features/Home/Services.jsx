import React from "react";

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Legal Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Family Law</h3>
            <p className="text-gray-700">Consult with experienced lawyers to handle matters like divorce, child custody, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Criminal Defense</h3>
            <p className="text-gray-700">Get the best defense strategies for your criminal charges from skilled attorneys.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Corporate Law</h3>
            <p className="text-gray-700">Expert legal advice for businesses, including mergers, contracts, and intellectual property.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

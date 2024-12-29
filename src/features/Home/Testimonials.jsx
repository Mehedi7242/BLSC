import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center space-x-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mb-6">
            <p className="text-gray-700 mb-4">"The legal consultation I received was professional and thorough. I highly recommend their services."</p>
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-500">Business Owner</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mb-6">
            <p className="text-gray-700 mb-4">"Excellent service and friendly staff. They really took the time to understand my case."</p>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-gray-500">Individual Client</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

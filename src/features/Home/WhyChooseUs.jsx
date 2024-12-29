import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Experienced Lawyers</h3>
            <p className="text-gray-700">Our team consists of experienced lawyers specializing in various legal fields.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Affordable Rates</h3>
            <p className="text-gray-700">We offer legal services at competitive rates to ensure accessibility for all.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Client-Centric Approach</h3>
            <p className="text-gray-700">We prioritize our clients' needs and provide personalized, compassionate service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

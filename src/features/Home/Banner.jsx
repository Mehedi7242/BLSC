import React from "react";
import { motion } from "framer-motion";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <section className="bg-green-500 text-white py-20 text-center">
      {/* Animate the heading */}
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Expert Legal Consultation at Your Fingertips
      </motion.h2>

      {/* Animate the paragraph */}
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Get professional legal advice and services from trusted experts in Bangladesh.
      </motion.p>

      {/* Animate the button */}
      <motion.a
        href="/contact"
        className="bg-white text-green-500 py-2 px-6 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Contact Us Today
      </motion.a>
    </section>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // For social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* About Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold text-green-500">Bangladesh Legal Consultation Service</h3>
            <p className="mt-2 text-sm">Providing expert legal advice and services to ensure your rights are protected.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-500">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-500">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-500">Contact</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-500">Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Email: <a href="mailto:info@blcs.com" className="hover:text-green-500">info@blcs.com</a></p>
            <p className="text-sm">Phone: <span className="hover:text-green-500">+8801234567890</span></p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" className="text-white hover:text-green-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-green-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-green-500">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-green-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 Bangladesh Legal Consultation Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

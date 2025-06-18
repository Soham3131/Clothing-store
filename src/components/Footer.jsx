// Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Added more icons for direct use
import logo from '../assets/logo.jpg'; // Ensure this path is correct
import { Link } from 'react-router-dom'; // Assuming React Router is in use

const Footer = () => {
  return (
    // Deeper, richer background color for a premium feel
    <footer className="bg-[#1A1A1A] text-bg-lightest px-4 py-20 font-sans relative overflow-hidden">
      {/* Optional: Subtle background pattern or texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/path/to/subtle-texture.png')", backgroundSize: 'cover', pointerEvents: 'none' }}></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-y-12 md:gap-x-16 relative z-10">

        {/* Brand Identity: Logo + Brand Statement */}
        <div className="flex flex-col items-center md:items-start md:w-1/4">
          <img
            src={logo}
            alt="RDS BY RICHA SHAH Logo"
            className="h-28 w-28 rounded-full object-cover border-4 border-primary-gold shadow-lg mb-4 transform hover:scale-105 transition-transform duration-300" // Slightly larger, interactive hover
          />
          <h3 className="text-2xl font-heading font-bold text-primary-gold mb-2 tracking-wide">RDS BY RICHA SHAH</h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Where every thread weaves a story of timeless elegance, cultural heritage, and empowered individuality.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/4">
          <h4 className="text-xl font-heading font-semibold mb-6 text-bg-lightest">Quick Discover</h4>
          <ul className="text-lg space-y-4 text-gray-300">
            <li><Link to="/" className="hover:text-primary-gold transition-colors duration-200 block">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary-gold transition-colors duration-200 block">Collections</Link></li> {/* Renamed for sophistication */}
            <li><Link to="/about" className="hover:text-primary-gold transition-colors duration-200 block">Our Story</Link></li> {/* Renamed for engagement */}
            <li><Link to="/contact" className="hover:text-primary-gold transition-colors duration-200 block">Connect</Link></li> {/* Renamed for engagement */}
          </ul>
        </div>

        {/* Connect Directly (Contact Info) */}
        <div className="md:w-1/4">
          <h4 className="text-xl font-heading font-semibold mb-6 text-bg-lightest">Direct Connect</h4>
          <div className="space-y-4 text-gray-300 text-lg">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-primary-gold text-2xl" />
              <a href="mailto:rdscreation@gmail.com" className="hover:text-primary-gold transition-colors duration-200">rdscreation@gmail.com</a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-primary-gold text-2xl" />
              <a href="tel:+919428001031" className="hover:text-primary-gold transition-colors duration-200">+91 9428001031</a>
            </p>
            <p className="flex items-start justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-primary-gold text-2xl mt-1" />
              <span className="max-w-[200px] inline-block">
                2nd Floor, Punit Plaza, Ashram Road, Ahmedabad, India 380014
              </span>
            </p>
          </div>
        </div>

        {/* Follow & Engage (Social Media) */}
        <div className="md:w-1/4">
          <h4 className="text-xl font-heading font-semibold mb-6 text-bg-lightest">Follow Our Journey</h4>
          <div className="flex justify-center md:justify-start gap-6 text-3xl">
            <a href="https://www.instagram.com/rdscreation_by_richashah/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-primary-gold transition-colors duration-200 transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/rdscreationbyrichashah/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-primary-gold transition-colors duration-200 transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/919428001031" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-300 hover:text-primary-gold transition-colors duration-200 transform hover:scale-110">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-20 pt-8 border-t border-gray-700 relative z-10">
        &copy; {new Date().getFullYear()} RDS BY RICHA SHAH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
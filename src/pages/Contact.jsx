// Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiry: '',
    details: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    // Ensuring the message is clearly formatted for WhatsApp and mentions the brand
    const message = `Hello RDS BY RICHA SHAH Team,%0A%0A` +
      `I have an inquiry from your website:%0A` +
      `Name: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Interested In: ${form.inquiry}%0A` +
      `Additional Details: ${form.details}%0A%0A` +
      `Looking forward to your response!`;
    window.open(`https://wa.me/919428001031?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    // Consistent light background color
    <div className="bg-bg-lightest min-h-screen py-20 px-5 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -30 }} // Adjusted animation for speed
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} // Faster animation
        className="text-5xl font-heading font-bold text-text-dark text-center mb-14 tracking-wide" // Consistent heading style
      >
        Let's Connect
      </motion.h2>

      {/* Contact Details & Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} // Adjusted animation for speed
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} // Faster animation
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto" // Increased gap, added max-width
      >
        {/* Contact Details Section */}
        <div className="space-y-6 text-text-medium text-lg font-sans"> {/* Consistent text color, font, and spacing */}
          <p className="text-xl text-text-dark font-semibold font-heading mb-4">Reach out to us:</p> {/* Prominent sub-heading */}
          
          <div className="flex items-center gap-4"> {/* Increased gap for icons */}
            <FaEnvelope className="text-primary-gold text-2xl" /> {/* Primary accent color for icons, larger */}
            <a href="mailto:rdscreation@gmail.com" className="hover:text-primary-gold transition-colors duration-200">
              rdscreation@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-primary-gold text-2xl" />
            <a href="tel:+919428001031" className="hover:text-primary-gold transition-colors duration-200">
              +91 9428001031
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-[#25D366] text-2xl" /> {/* Standard WhatsApp green for recognition */}
            <a href="https://wa.me/919428001031" target="_blank" rel="noreferrer" className="hover:text-primary-gold transition-colors duration-200">
              Chat on WhatsApp
            </a>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-primary-gold text-2xl mt-1" /> {/* Primary accent color for icon */}
            <address className="not-italic">
              R D'S Creation, 2nd Floor, Punit Plaza,<br />
              Ashram Road, Ahmedabad, India 380014
            </address>
          </div>
          <div className="flex items-center gap-4">
            <FaInstagram className="text-primary-gold text-2xl" /> {/* Primary accent color for icon */}
            <a
              href="https://www.instagram.com/rdscreation_by_richashah/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-gold transition-colors duration-200"
            >
              DM us on Instagram
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-xl rounded-2xl border border-gray-100"> {/* Enhanced shadow, rounded corners, subtle border, increased padding */}
          <h3 className="text-3xl font-heading font-semibold text-text-dark mb-6">Send Us a Message</h3> {/* Form heading */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendToWhatsApp();
            }}
            className="space-y-6" // Increased space between form fields
          >
            <div>
              <label htmlFor="name" className="text-base font-semibold text-text-medium mb-1 block font-sans">Your Name</label> {/* Label styling */}
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent font-sans text-text-dark" // Refined input styling, focus ring
              />
            </div>

            <div>
              <label htmlFor="email" className="text-base font-semibold text-text-medium mb-1 block font-sans">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent font-sans text-text-dark"
              />
            </div>

            <div>
              <label htmlFor="inquiry" className="text-base font-semibold text-text-medium mb-1 block font-sans">Type of Masterpiece You’re Looking For</label>
              <input
                type="text"
                id="inquiry"
                name="inquiry"
                value={form.inquiry}
                onChange={handleChange}
                placeholder="e.g., Bridal Lehenga, Indo-Western, Saree"
                required
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent font-sans text-text-dark"
              />
            </div>

            <div>
              <label htmlFor="details" className="text-base font-semibold text-text-medium mb-1 block font-sans">Additional Details</label>
              <textarea
                id="details"
                name="details"
                value={form.details}
                onChange={handleChange}
                rows="4"
                placeholder="Mention colors, inspiration, budget, or any specific requirements."
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent font-sans text-text-dark"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary-green hover:bg-[#2F5236] transition-colors duration-300 text-white py-4 rounded-xl font-bold shadow-lg text-xl font-heading" // Secondary accent button, larger, bolder, heading font
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
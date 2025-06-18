// Founder.jsx
import React from 'react';
import { motion } from 'framer-motion';
import founderVideo from "../assets/founder.mp4"; // Renamed for clarity

const Founder = () => {
  return (
    <div className="bg-bg-lightest py-20 px-4 md:px-12"> {/* Using new background color */}
      <motion.h2
        className="text-5xl font-heading font-bold text-text-dark text-center mb-14 tracking-wide" // Using new heading font and color
        initial={{ opacity: 0, y: -30 }} // Reduced animation distance for speed
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} // Faster animation duration
      >
        A Message from Our Founder
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Video container with subtle shadow */}
        <motion.div
          className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }} // Reduced animation distance
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} // Faster animation duration
        >
          <video
            className="w-full max-h-[480px] object-cover rounded-2xl" // Slightly increased height, rounded corners for consistency
            controls
            autoPlay
            muted
            loop
            playsInline // Recommended for mobile autoplay
            preload="metadata" // Load enough data to show first frame
          >
            <source src={founderVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Message Text with updated content and styling */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }} // Reduced animation distance
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} // Faster animation duration
        >
          <p className="text-xl text-text-medium leading-relaxed mb-6 font-sans"> {/* Using new body font and color */}
            "Welcome to **RDS BY RICHA SHAH**, where every creation tells a story of passion and heritage. As **Richa Shah**, I founded this brand with a vision to blend timeless elegance with modern comfort, offering pieces that empower you to express your unique style. Our commitment is to exceptional quality, ethical craftsmanship, and designs that truly resonate with you."
          </p>
          <p className="text-lg text-primary-gold font-semibold italic font-heading"> {/* Accent color for signature, heading font for distinction */}
            – Richa Shah, Founder of RDS BY RICHA SHAH
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Founder;
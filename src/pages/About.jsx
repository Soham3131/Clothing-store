// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ownerImage from '../assets/owner.jpg'; // Ensure this path is correct

export default function About() {
  return (
    // Consistent light background color
    <div className="bg-bg-lightest min-h-screen py-20 px-5 md:px-12">
      {/* Meet the Founder Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} // Faster animation
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-dark mb-6 tracking-wide"> {/* Heading font, darker text, consistent size */}
          Meet Our Visionary Founder
        </h2>
        <p className="font-sans text-text-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"> {/* Body font, medium text color, improved line height */}
          Passionate about design, tradition, and empowering self-expression through fashion,
          <strong className="text-primary-gold font-semibold"> Richa Shah</strong> brings soulful vision to every thread. Her journey isn't just about
          creating clothes, but celebrating stories, culture, and individuality stitched with care, embodying the spirit of RDS BY RICHA SHAH.
        </p>
      </motion.div>

      {/* Owner Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }} // Faster animation, slight delay for sequential feel
        className="flex justify-center mb-16"
      >
        <img
          src={ownerImage}
          alt="Founder - Richa Shah"
          className="rounded-2xl shadow-xl max-w-sm w-full object-cover h-[400px] border-4 border-secondary-green" // More rounded, stronger shadow, secondary green border
        />
      </motion.div>

      {/* About the Brand Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }} // Faster animation
        viewport={{ once: true, amount: 0.2 }} // Animate once when 20% in view
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-gold mb-6 tracking-wide"> {/* Heading font, primary gold accent, consistent size */}
          The Story of RDS BY RICHA SHAH
        </h2>
        <p className="font-sans text-text-medium text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"> {/* Body font, medium text color, improved line height */}
          We’re not just a clothing brand — <strong className="text-secondary-green font-semibold">RDS BY RICHA SHAH</strong> is a canvas for timeless elegance, cultural heritage,
          and empowered femininity. Every outfit we craft is a fusion of traditional Indian charm with modern grace,
          meticulously designed to make you feel proud, radiant, and deeply connected. Our creations are thoughtfully curated to elevate your special moments,
          turning memories into masterpieces that tell your unique story.
        </p>
      </motion.div>
    </div>
  );
}
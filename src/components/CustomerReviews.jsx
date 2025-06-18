// CustomerReviews.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: "Riya Mehta",
    location: "Mumbai",
    message: "Absolutely loved the design and quality! Got so many compliments at the wedding.",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    location: "Delhi",
    message: "Fast delivery and perfect fitting. The embroidery is just beautiful.",
    rating: 4,
  },
  {
    name: "Sneha Patel",
    location: "Ahmedabad",
    message: "Very comfortable and elegant outfit. Worth every rupee!",
    rating: 5,
  },
  {
    name: "Nikita Sharma",
    location: "Jaipur",
    message: "Color was even better in real than in photos. Amazing service.",
    rating: 4,
  },
  {
    name: "Pooja Iyer",
    location: "Chennai",
    message: "Loved the customer support and fast WhatsApp replies. Outfit fits perfectly.",
    rating: 5,
  },
  {
    name: "Neha Raut",
    location: "Nagpur",
    message: "Great stitching, super soft fabric and vibrant color. Will order again.",
    rating: 5,
  },
  {
    name: "Swati Joshi",
    location: "Pune",
    message: "Elegant and classy designs. Delivery was earlier than expected.",
    rating: 4,
  },
  {
    name: "Ishita Nair",
    location: "Kochi",
    message: "The blouse fit perfectly! Thank you for customizing it for me.",
    rating: 5,
  },
  {
    name: "Payal Dubey",
    location: "Lucknow",
    message: "Quality was amazing for the price. Fabric was very premium.",
    rating: 4,
  },
  {
    name: "Vidya Menon",
    location: "Bangalore",
    message: "I wore it to my cousin's engagement and everyone loved it!",
    rating: 5,
  },
  {
    name: "Rashmi Desai",
    location: "Surat",
    message: "Perfect festive wear. Customer service was very helpful on WhatsApp.",
    rating: 4,
  },
  {
    name: "Tanya Kapoor",
    location: "Ludhiana",
    message: "I got what I saw! Very genuine and professional service.",
    rating: 5,
  },
];

const CustomerReviews = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-bg-lightest py-20 px-4 md:px-12"> {/* Using a light background color */}
      <motion.h2
        className="text-5xl font-heading font-bold text-text-dark text-center mb-14 tracking-wide" 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} 
      >
        Hear From Our Valued Customers
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"> {/* Increased max-width */}
        {reviews.slice(0, visibleCount).map((review, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 transform transition-all duration-300 hover:shadow-xl" // Enhanced shadow, subtle border, smooth hover
            initial={{ opacity: 0, y: 40 }} // Adjusted animation for speed
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }} // Faster duration, slightly larger stagger delay
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary-gold text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold font-heading shadow-md"> {/* Primary gold accent for initial, larger, heading font */}
                {review.name[0]}
              </div>
              <div>
                <h4 className="font-heading font-semibold text-xl text-text-dark">{review.name}</h4> {/* Heading font for name, larger */}
                <p className="text-sm text-text-subtle font-sans">{review.location}</p> {/* Subtle text for location, body font */}
              </div>
            </div>
            <p className="text-text-medium mb-4 leading-relaxed font-sans">{review.message}</p> {/* Body text color and font, better line-height */}
            <div className="flex text-yellow-500"> {/* Standard yellow for stars, generally recognized */}
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} className="text-xl" /> 
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCount < reviews.length && (
        <div className="flex justify-center mt-16"> {/* Increased margin-top */}
          <button
            onClick={handleShowMore}
            className="px-8 py-4 bg-secondary-green hover:bg-[#2F5236] text-white text-xl rounded-full shadow-lg transition-colors duration-300 font-bold font-heading tracking-wide" 
          >
            Show More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default CustomerReviews;
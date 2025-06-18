// FeaturedProducts.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Import product images
import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jpg";
import d4 from "../assets/d4.jpg";
import d5 from "../assets/d5.jpg";
import d6 from "../assets/d6.jpg";

const products = [
  { id: 1, name: "Bridal Choli - Pink Mirror Work", image: d1 },
  { id: 2, name: "Royal Blue Anarkali Gown", image: d2 },
  { id: 3, name: "Maroon Dupatta Polka Lehenga", image: d3 },
  { id: 4, name: "Yellow Co-Ord Set with Blazer", image: d4 },
  { id: 5, name: "Sky Blue Lounge Set with Shrug", image: d5 },
  { id: 6, name: "Aqua Kurti with White Embroidery", image: d6 },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-bg-soft py-20 px-4 md:px-12"> {/* Using new background color */}
      <motion.h2
        className="text-5xl font-heading font-bold text-text-dark text-center mb-14 tracking-wide" // Consistent heading style
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Signature Collection
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-bg-lightest shadow-xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]" // Consistent card styling
            initial={{ opacity: 0, y: 40 }} // Reduced animation distance
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: product.id * 0.08 }} // Faster duration, slightly smaller stagger delay
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-top object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-text-dark mb-3 font-heading">{product.name}</h3> {/* Using new heading font for product names */}
              <a
                href={`https://wa.me/9428001031?text=${encodeURIComponent(
                  `Hello, I'm interested in the "${product.name}" from RDS BY RICHA SHAH. Could you please provide more details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-secondary-green hover:bg-[#2F5236] text-white rounded-full text-lg font-semibold transition-colors duration-300 shadow-md font-sans" // Secondary accent color, body font for button text
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <a
          href="/products"
          className="px-8 py-4 bg-primary-gold hover:bg-[#97734C] text-white text-xl rounded-full shadow-lg transition-colors duration-300 font-bold tracking-wide font-heading" // Primary accent color, heading font for button text
        >
          Explore All Designs
        </a>
      </div>
    </div>
  );
};

export default FeaturedProducts;
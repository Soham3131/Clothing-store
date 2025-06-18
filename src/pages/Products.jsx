// ProductsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// Import all 42 images (assuming paths are correct)
import d1 from '../assets/d1.jpg';
import d2 from '../assets/d2.jpg';
import d3 from '../assets/d3.jpg';
import d4 from '../assets/d4.jpg';
import d5 from '../assets/d5.jpg';
import d6 from '../assets/d6.jpg';
import d7 from '../assets/d7.jpg';
import d8 from '../assets/d8.jpg';
import d9 from '../assets/d9.jpg';
import d10 from '../assets/d10.jpg';
import d11 from '../assets/d11.jpg';
import d12 from '../assets/d12.jpg';
import d13 from '../assets/d13.jpg';
import d14 from '../assets/d14.jpg';
import d15 from '../assets/d15.jpg';
import d16 from '../assets/d16.jpg';
import d17 from '../assets/d17.jpg';
import d18 from '../assets/d18.jpg';
import d19 from '../assets/d19.jpg';
import d20 from '../assets/d20.jpg';
import d21 from '../assets/d21.jpg';
import d22 from '../assets/d22.jpg';
import d23 from '../assets/d23.jpg';
import d24 from '../assets/d24.jpg';
import d25 from '../assets/d25.jpg';
import d26 from '../assets/d26.jpg';
import d27 from '../assets/d27.jpg';
import d28 from '../assets/d28.jpg';
import d29 from '../assets/d29.jpg';
import d30 from '../assets/d30.jpg';
import d31 from '../assets/d31.jpg';
import d32 from '../assets/d32.jpg';
import d33 from '../assets/d33.jpg';
import d34 from '../assets/d34.jpg';
import d35 from '../assets/d35.jpg';
import d36 from '../assets/d36.jpg';
import d37 from '../assets/d37.jpg';
import d38 from '../assets/d38.jpg';
import d39 from '../assets/d39.jpg';
import d40 from '../assets/d40.jpg';
import d41 from '../assets/d41.jpg';
import d42 from '../assets/d42.jpg';
// Navbar is imported in App.js and conditionally rendered, so no need here.

const products = [
  { id: "d1", img: d1, desc: "Bridal Choli - Pink Mirror Work" },
  { id: "d2", img: d2, desc: "Royal Blue Anarkali Gown" },
  { id: "d3", img: d3, desc: "Maroon Dupatta Polka Lehenga" },
  { id: "d4", img: d4, desc: "Yellow Co-Ord Set with Blazer" },
  { id: "d5", img: d5, desc: "Sky Blue Lounge Set with Shrug" },

  { id: 'd6', img: d6, desc: 'Sky blue casual kurti perfect for summer outings.' },
  { id: 'd7', img: d7, desc: 'Vibrant red festive wear with elegant patterns.' },
  { id: 'd8', img: d8, desc: 'Chic pink Anarkali suited for modern celebrations.' },
  { id: 'd9', img: d9, desc: 'Graceful mustard ensemble radiating tradition.' },
  { id: 'd10', img: d10, desc: 'Classic violet saree ideal for formal functions.' },
  { id: 'd11', img: d11, desc: 'Traditional green drape for timeless elegance.' },
  { id: 'd12', img: d12, desc: 'Hot pink festive saree full of flair.' },
  { id: 'd13', img: d13, desc: 'Royal maroon blouse with rich embroidery.' },
  { id: 'd14', img: d14, desc: 'Wedding lehenga in red with gold accents.' },
  { id: 'd15', img: d15, desc: 'Elegant white engagement outfit with grace.' },
  { id: 'd16', img: d16, desc: 'Magenta saree with a modern drape twist.' },
  { id: 'd17', img: d17, desc: 'Shimmering purple party wear with panache.' },
  { id: 'd18', img: d18, desc: 'Sage green indo-western pick for events.' },
  { id: 'd19', img: d19, desc: 'Vibrant yellow kurti for a sunny day.' },
  { id: 'd20', img: d20, desc: 'Elegant white anarkali for serene moments.' },
  { id: 'd21', img: d21, desc: 'Tribal themed black cotton saree with spirit.' },
  { id: 'd22', img: d22, desc: 'Rustic red-green blend for earthy charm.' },
  { id: 'd23', img: d23, desc: 'Heavy red bridal lehenga with finesse.' },
  { id: 'd24', img: d24, desc: 'Twirl-ready white-purple lehenga of dreams.' },
  { id: 'd25', img: d25, desc: 'Flared green outfit made for spinning joy.' },
  { id: 'd26', img: d26, desc: 'Sleek layered skirt with charming flair.' },
  { id: 'd27', img: d27, desc: 'Fusion tricolor lehenga for special occasions.' },
  { id: 'd28', img: d28, desc: 'Red blouse with heavy neck detailing.' },
  { id: 'd29', img: d29, desc: 'Cool blue indo-western with calm vibes.' },
  { id: 'd30', img: d30, desc: 'Twin pastel gowns perfect for weddings.' },
  { id: 'd31', img: d31, desc: 'Peppy green saree with floral drape.' },
  { id: 'd32', img: d32, desc: 'Elegant pink classic style for all ages.' },
  { id: 'd33', img: d33, desc: 'Monochrome black-white mix for bold moods.' },
  { id: 'd34', img: d34, desc: 'Sky blue short top with pink skirt.' },
  { id: 'd35', img: d35, desc: 'Bright yellow lehenga radiating joy.' },
  { id: 'd36', img: d36, desc: 'Evening-ready purple-white festive wear.' },
  { id: 'd37', img: d37, desc: 'Golden-lit duo in navy and beige glory.' },
  { id: 'd38', img: d38, desc: 'Green saree shot in golden hour.' },
  { id: 'd39', img: d39, desc: 'Stage-ready look with dramatic backdrop.' },
  { id: 'd40', img: d40, desc: 'Gothic black fusion look for bold taste.' },
  { id: 'd41', img: d41, desc: 'Palmy elegance in red traditional attire.' },
  { id: 'd42', img: d42, desc: 'Bright yellow cotton outfit with freshness.' },
];

const ProductsPage = () => {
  return (
    // Updated background to a soft, consistent off-white
    <div className="bg-bg-lightest min-h-screen px-4 py-16 md:py-20">
      <motion.h2
        className="text-5xl font-heading font-bold text-text-dark text-center mb-14 tracking-wide" // Consistent heading style
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} // Faster animation
      >
        Explore Our Exquisite Collections
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"> {/* Added xl column, increased gap, max-width */}
        {products.map(({ id, img, desc }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }} // Adjusted animation for speed
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% in view
            transition={{ duration: 0.5 }} // Faster animation duration
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl border border-gray-100" // Enhanced shadow, subtle border, smoother hover
          >
            <img
              src={img}
              alt={desc || `Product ${id}`} // Use desc for alt text for better accessibility
              loading="lazy"
              className="h-96 w-full object-cover p-2 rounded-t-2xl" // Changed object-contain to object-cover for better fit, added top rounding
            />
            <div className="p-6"> {/* Increased padding */}
              <p className="text-text-medium text-lg mb-4 font-sans leading-relaxed">{desc}</p> {/* Body text color and font, larger, better line-height */}
              <a
                href={`https://wa.me/919428001031?text=${encodeURIComponent(
                  `Hello, I'm interested in the "${desc}" (Product ID: ${id}) from RDS BY RICHA SHAH. Could you please provide more details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-white bg-primary-gold rounded-full hover:bg-[#97734C] transition-colors duration-300 shadow-md font-bold text-lg font-sans" // Primary gold accent, consistent button style, larger
              >
                <FaWhatsapp className="text-xl" /> {/* Larger WhatsApp icon */}
                Enquire Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
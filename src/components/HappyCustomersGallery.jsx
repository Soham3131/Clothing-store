// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// import c1 from '../assets/c1.webp';
// import c2 from '../assets/c2.webp';
// import c3 from '../assets/c3.webp';
// import c4 from '../assets/c4.webp';
// import c5 from '../assets/c5.webp';
// import c6 from '../assets/c6.webp';
// import c7 from '../assets/c7.mp4';
// import c8 from '../assets/c8.webp';
// import c9 from '../assets/c9.mp4';
// import c10 from '../assets/c10.mp4';
// import c11 from '../assets/c11.webp';
// import c12 from '../assets/c12.mp4';
// import c13 from '../assets/c13.mp4';
// import c14 from '../assets/c14.webp';
// import c15 from '../assets/c15.mp4';

// const media = [
//   { type: 'image', src: c1 },
//   { type: 'image', src: c2 },
//   { type: 'image', src: c3 },
//   { type: 'image', src: c4 },
//   { type: 'image', src: c5 },
//   { type: 'image', src: c6 },
//   { type: 'video', src: c7 },
//   { type: 'image', src: c8 },
//   { type: 'video', src: c9 },
//   { type: 'video', src: c10 },
//   { type: 'image', src: c11 },
//   { type: 'video', src: c12 },
//   { type: 'video', src: c13 },
//   { type: 'image', src: c14 },
//   { type: 'video', src: c15 },
// ];

// const HappyCustomersGallery = () => {
//   const [visibleCount, setVisibleCount] = useState(6);

//   const handleViewMore = () => {
//     setVisibleCount(media.length);
//   };

//   return (
//     <section className="bg-white py-16 px-4 md:px-12">
//       <motion.h2
//         className="text-4xl font-bold text-center text-gray-800 mb-6"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Proud to Be a Part of So Many Happy Families
//       </motion.h2>

//       <motion.p
//         className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         We are thrilled to see our lovely customers and their families looking stunning in our creations! Thank you for making us part of your special moments. We’re excited to welcome you to our growing family.
//       </motion.p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {media.slice(0, visibleCount).map((item, index) => (
//           <motion.div
//             key={index}
//             className="overflow-hidden rounded-xl shadow-md"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//           >
//             {item.type === 'image' ? (
//               <img src={item.src} alt="Happy Customer" className="w-full h-72 object-cover" />
//             ) : (
//               <video
//                 src={item.src}
//                 className="w-full h-72 object-cover"
//                 muted
//                 autoPlay
//                 loop
//               />
//             )}
//           </motion.div>
//         ))}
//       </div>

//       {visibleCount < media.length && (
//         <div className="flex justify-center mt-10">
//           <button
//             onClick={handleViewMore}
//             className="px-6 py-3 bg-orange-500 text-white text-lg rounded-full hover:bg-orange-600 transition"
//           >
//             View More
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default HappyCustomersGallery;

// HappyCustomersGallery.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import c1 from '../assets/c1.webp';
import c2 from '../assets/c2.webp';
import c3 from '../assets/c3.webp';
import c4 from '../assets/c4.webp';
import c5 from '../assets/c5.webp';
import c6 from '../assets/c6.webp';
import c7 from '../assets/c7.mp4';
import c8 from '../assets/c8.webp';
import c9 from '../assets/c9.mp4';
import c10 from '../assets/c10.mp4';
import c11 from '../assets/c11.webp';
import c12 from '../assets/c12.mp4';
import c13 from '../assets/c13.mp4';
import c14 from '../assets/c14.webp';
import c15 from '../assets/c15.mp4';

const media = [
  { type: 'image', src: c1 },
  { type: 'image', src: c2 },
  { type: 'image', src: c3 },
  { type: 'image', src: c4 },
  { type: 'image', src: c5 },
  { type: 'image', src: c6 },
  { type: 'video', src: c7 },
  { type: 'image', src: c8 },
  { type: 'video', src: c9 },
  { type: 'video', src: c10 },
  { type: 'image', src: c11 },
  { type: 'video', src: c12 },
  { type: 'video', src: c13 },
  { type: 'image', src: c14 },
  { type: 'video', src: c15 },
];

const HappyCustomersGallery = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Start with 6, show 3 more if desired, or all

  const handleViewMore = () => {
    setVisibleCount(media.length); // Shows all remaining media
  };

  return (
    <section className="bg-bg-soft py-20 px-4 md:px-12"> {/* Using a slightly darker warm background */}
      <motion.h2
        className="text-5xl font-heading font-bold text-text-dark text-center mb-6 tracking-wide" 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Family of Happy Customers
      </motion.h2>

      <motion.p
        className="text-center text-xl text-text-medium max-w-4xl mx-auto mb-14 font-sans leading-relaxed" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We are immensely proud to see our beautiful designs come to life on our cherished customers and their families. Each photo and video fills us with joy, reinforcing our commitment to crafting moments of elegance and celebration.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto"> {/* Increased gap and max-width */}
        {media.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl" // More rounded, stronger shadow on hover, subtle border
            initial={{ opacity: 0, scale: 0.95 }} // Reduced scale animation for speed
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08 }} // Faster duration, slightly larger stagger delay
          >
            {item.type === 'image' ? (
              <img src={item.src} alt="Happy Customer of RDS BY RICHA SHAH" className="w-full h-80 object-cover" />
            ) : (
              <video
                src={item.src}
                className="w-full h-80 object-cover" // Increased height
                muted
                autoPlay
                loop
                playsInline // Crucial for mobile autoplay
                preload="metadata" // Load enough data to show first frame
              />
            )}
          </motion.div>
        ))}
      </div>

      {visibleCount < media.length && (
        <div className="flex justify-center mt-16"> {/* Increased margin-top */}
          <button
            onClick={handleViewMore}
            className="px-8 py-4 bg-primary-gold hover:bg-[#97734C] text-white text-xl rounded-full shadow-lg transition-colors duration-300 font-bold font-heading tracking-wide" 
          >
            Discover More Joy
          </button>
        </div>
      )}
    </section>
  );
};

export default HappyCustomersGallery;
// // // hero.jsx
// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

// // // Import your hero images
// // import home1 from '../assets/home1.png';
// // import home2 from '../assets/home2.png';
// // import home3 from '../assets/home3.png';
// // import home4 from '../assets/home4.png';
// // import logo from '../assets/logo.jpg';

// // const slides = [
// //   {
// //     image: home1,
// //     heading: "Embrace Traditional Allure",
// //     subheading: "Discover handcrafted pieces that narrate tales of heritage and elegance.",
// //     buttonText: "View Collections",
// //     buttonLink: "/products",
// //   },
// //   {
// //     image: home2,
// //     heading: "Cozy Comfort, Timeless Style",
// //     subheading: "Experience the warmth of meticulously crafted designs for every season.",
// //     buttonText: "Explore Comfort",
// //     buttonLink: "/products",
// //   },
// //   {
// //     image: home3,
// //     heading: "Curated Elegance, Just For You",
// //     subheading: "Step into a world where every garment is a treasure, handpicked for its unique charm.",
// //     buttonText: "Find Your Style",
// //     buttonLink: "/products",
// //   },
// //   {
// //     image: home4,
// //     heading: "Unveiling Our Latest Creations",
// //     subheading: "Be the first to explore fresh designs that blend modern trends with classic beauty.",
// //     buttonText: "New Arrivals",
// //     buttonLink: "/products",
// //   },
// // ];

// // export default function Hero() {
// //   const [showIntro, setShowIntro] = useState(true);
// //   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "Collections", path: "/products" },
// //     { name: "Our Story", path: "/about" },
// //     { name: "Connect", path: "/contact" },
// //   ];

// //   // Auto-slide effect
// //   useEffect(() => {
// //     if (!showIntro) {
// //       const slideInterval = setInterval(() => {
// //         setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
// //       }, 5000); // Auto-slide interval remains at 5 seconds
// //       return () => clearInterval(slideInterval);
// //     }
// //   }, [showIntro, slides.length]);

// //   // Hide intro animation after a shorter delay
// //   useEffect(() => {
// //     const introTimer = setTimeout(() => {
// //       setShowIntro(false);
// //     }, 2000); // FASTER: Show intro for 2 seconds (was 2.5s)
// //     return () => clearTimeout(introTimer);
// //   }, []);

// //   const currentSlide = slides[currentSlideIndex];

// //   return (
// //     <div className="h-screen relative overflow-hidden bg-black">

// //       {/* Intro Animation for "RDS BY RICHA SHAH" */}
// //       <AnimatePresence>
// //         {showIntro && (
// //           <motion.div
// //             className="absolute inset-0 flex flex-col items-center justify-center bg-text-dark z-[100] text-bg-lightest"
// //             initial={{ opacity: 1 }}
// //             exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.2 } }} // FASTER: Exit duration and delay reduced
// //           >
// //             {/* Logo added here for the intro screen */}
// //             <motion.img
// //               src={logo}
// //               alt="RDS BY RICHA SHAH Logo"
// //               className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover border-4 border-primary-gold shadow-2xl mb-6"
// //               initial={{ opacity: 0, scale: 0.5 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               transition={{ duration: 0.6, ease: "easeOut" }} // FASTER: Logo animation duration reduced
// //             />
// //             <motion.h1
// //               className="font-heading text-6xl md:text-8xl font-bold tracking-wide text-primary-gold mb-2"
// //               initial={{ opacity: 0, y: -50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // FASTER: Heading duration and delay reduced
// //             >
// //               RDS BY RICHA SHAH
// //             </motion.h1>
// //             <motion.p
// //               className="font-sans text-xl md:text-2xl text-bg-lightest mt-4"
// //               initial={{ opacity: 0, y: 30 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }} // FASTER: Tagline duration and delay reduced
// //             >
// //               Where every thread weaves a story.
// //             </motion.p>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Main Hero Content (Slider and Navbar) */}
// //       {!showIntro && (
// //         <div className="absolute inset-0">
// //           {/* Image Slider */}
// //           <AnimatePresence initial={false}>
// //             <motion.div
// //               key={currentSlide.heading}
// //               className="absolute inset-0 bg-cover bg-center"
// //               style={{ backgroundImage: `url(${currentSlide.image})` }}
// //               initial={{ opacity: 0, scale: 1.05 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               exit={{ opacity: 0, scale: 0.95 }}
// //               transition={{ duration: 0.8, ease: "easeInOut" }} // FASTER: Image transition duration reduced (was 1.0s)
// //             >
// //               {/* Dark Overlay for Text Readability */}
// //               <div className="absolute inset-0 bg-black bg-opacity-60"></div>
// //             </motion.div>
// //           </AnimatePresence>

// //           {/* Navigation within Hero (speeds unchanged for consistent UI feel) */}
// //           <nav className="absolute top-0 left-0 w-full px-6 md:px-12 py-5 z-40">
// //             <div className="max-w-7xl mx-auto flex justify-between items-center">
// //               <Link to="/" className="flex items-center gap-3">
// //                 <img
// //                   src={logo}
// //                   alt="RDS BY RICHA SHAH Logo"
// //                   className="h-12 w-12 rounded-full object-cover border-2 border-primary-gold shadow-md"
// //                 />
// //                 <span className="text-3xl font-heading font-bold text-bg-lightest tracking-wide">
// //                   RDS BY RICHA SHAH
// //                 </span>
// //               </Link>

// //               <ul className="hidden md:flex space-x-10 font-sans text-lg text-bg-lightest">
// //                 {navLinks.map((link, index) => (
// //                   <motion.li
// //                     key={index}
// //                     whileHover={{ scale: 1.05, y: -2 }}
// //                     transition={{ type: "spring", stiffness: 300, damping: 10 }}
// //                   >
// //                     <Link
// //                       to={link.path}
// //                       className="relative group block py-1"
// //                     >
// //                       <span className="relative z-10 hover:text-primary-gold transition-colors duration-200">
// //                         {link.name}
// //                       </span>
// //                       <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></span>
// //                     </Link>
// //                   </motion.li>
// //                 ))}
// //               </ul>

// //               <div className="md:hidden text-3xl text-bg-lightest cursor-pointer">
// //                 {menuOpen ? (
// //                   <HiX onClick={() => setMenuOpen(false)} />
// //                 ) : (
// //                   <HiOutlineMenuAlt3 onClick={() => setMenuOpen(true)} />
// //                 )}
// //               </div>
// //             </div>
// //           </nav>
// //           <AnimatePresence>
// //             {menuOpen && (
// //               <motion.div
// //                 initial={{ opacity: 0, y: -20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -20 }}
// //                 transition={{ duration: 0.3, ease: "easeOut" }}
// //                 className="md:hidden bg-bg-lightest shadow-inner px-6 pt-2 pb-6 absolute w-full top-full left-0 z-40"
// //               >
// //                 <ul className="flex flex-col space-y-5 font-sans text-xl text-text-dark">
// //                   {navLinks.map((link, index) => (
// //                     <motion.li
// //                       key={index}
// //                       initial={{ opacity: 0, x: -20 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       transition={{ duration: 0.2, delay: index * 0.05 }}
// //                     >
// //                       <Link
// //                         to={link.path}
// //                         onClick={() => setMenuOpen(false)}
// //                         className="block py-2 hover:bg-bg-soft rounded-lg transition-colors duration-200 px-4"
// //                       >
// //                         {link.name}
// //                       </Link>
// //                     </motion.li>
// //                   ))}
// //                 </ul>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>

// //           {/* Hero Content (Text & Button) */}
// //           <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-bg-lightest px-4 space-y-6">
// //             <AnimatePresence mode="wait">
// //               <motion.h1
// //                 key={currentSlide.heading}
// //                 className="text-4xl md:text-6xl font-heading font-bold drop-shadow-lg leading-tight"
// //                 initial={{ opacity: 0, y: -30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: 30 }}
// //                 transition={{ duration: 0.5, ease: "easeOut" }} // FASTER: Heading duration reduced
// //               >
// //                 {currentSlide.heading}
// //               </motion.h1>
// //             </AnimatePresence>

// //             <AnimatePresence mode="wait">
// //               <motion.p
// //                 key={currentSlide.subheading}
// //                 className="text-lg md:text-xl max-w-2xl text-gray-300 italic drop-shadow-md font-sans leading-relaxed"
// //                 initial={{ opacity: 0, y: -20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: 20 }}
// //                 transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }} // FASTER: Subheading duration and delay reduced
// //               >
// //                 {currentSlide.subheading}
// //               </motion.p>
// //             </AnimatePresence>

// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={currentSlide.buttonText}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: -20 }}
// //                 transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} // FASTER: Button duration and delay reduced
// //               >
// //                 <Link
// //                   to={currentSlide.buttonLink}
// //                   className="inline-block bg-primary-gold hover:bg-[#97734C] px-10 py-4 rounded-full text-bg-lightest font-bold shadow-lg transition duration-300 transform hover:scale-105 text-lg font-heading"
// //                 >
// //                   {currentSlide.buttonText}
// //                 </Link>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

// import home1 from '../assets/home1.png';
// import home2 from '../assets/home2.png';
// import home3 from '../assets/home3.png';
// import home4 from '../assets/home4.png';
// import logo from '../assets/logo.jpg';

// const slides = [
//   {
//     image: home1,
//     heading: "Embrace Traditional Allure",
//     subheading: "Discover handcrafted pieces that narrate tales of heritage and elegance.",
//     buttonText: "View Collections",
//     buttonLink: "/products",
//   },
//   {
//     image: home2,
//     heading: "Cozy Comfort, Timeless Style",
//     subheading: "Experience the warmth of meticulously crafted designs for every season.",
//     buttonText: "Explore Comfort",
//     buttonLink: "/products",
//   },
//   {
//     image: home3,
//     heading: "Curated Elegance, Just For You",
//     subheading: "Step into a world where every garment is a treasure, handpicked for its unique charm.",
//     buttonText: "Find Your Style",
//     buttonLink: "/products",
//   },
//   {
//     image: home4,
//     heading: "Unveiling Our Latest Creations",
//     subheading: "Be the first to explore fresh designs that blend modern trends with classic beauty.",
//     buttonText: "New Arrivals",
//     buttonLink: "/products",
//   },
// ];

// export default function Hero() {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Collections", path: "/products" },
//     { name: "Our Story", path: "/about" },
//     { name: "Connect", path: "/contact" },
//   ];

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(slideInterval);
//   }, [slides.length]);

//   const currentSlide = slides[currentSlideIndex];

//   return (
//     <div className="h-screen relative overflow-hidden bg-black">

//       <div className="absolute inset-0">
//         <AnimatePresence initial={false}>
//           {/* <motion.div
//             key={currentSlide.heading}
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${currentSlide.image})` }}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 2, ease: "easeInOut" }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//           </motion.div> */}
//           <AnimatePresence mode="wait">
//   <motion.div
//     key={`slide-${currentSlideIndex}`}  // Forces animation every time, even on first load
//     className="absolute inset-0 bg-cover bg-center"
//     style={{ backgroundImage: `url(${currentSlide.image})` }}
//     initial={{ opacity: 0, scale: 1.05 }}
//     animate={{ opacity: 1, scale: 1 }}
//     exit={{ opacity: 0, scale: 0.95 }}
//     transition={{ duration: 2, ease: "easeInOut" }}
//   >
//     <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//   </motion.div>
// </AnimatePresence>

//         </AnimatePresence>

//         <nav className="absolute top-0 left-0 w-full px-6 md:px-12 py-5 z-40">
//           <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <Link to="/" className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="RDS BY RICHA SHAH Logo"
//                 className="h-12 w-12 rounded-full object-cover border-2 border-primary-gold shadow-md"
//               />
//               <span className="text-3xl font-heading font-bold text-bg-lightest tracking-wide">
//                 RDS BY RICHA SHAH
//               </span>
//             </Link>

//             <ul className="hidden md:flex space-x-10 font-sans text-lg text-bg-lightest">
//               {navLinks.map((link, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ scale: 1.05, y: -2 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 10 }}
//                 >
//                   <Link
//                     to={link.path}
//                     className="relative group block py-1"
//                   >
//                     <span className="relative z-10 hover:text-primary-gold transition-colors duration-200">
//                       {link.name}
//                     </span>
//                     <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></span>
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>

//             <div className="md:hidden text-3xl text-bg-lightest cursor-pointer">
//               {menuOpen ? (
//                 <HiX onClick={() => setMenuOpen(false)} />
//               ) : (
//                 <HiOutlineMenuAlt3 onClick={() => setMenuOpen(true)} />
//               )}
//             </div>
//           </div>
//         </nav>

//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               className="md:hidden bg-bg-lightest shadow-inner px-6 pt-2 pb-6 absolute w-full top-full left-0 z-40"
//             >
//               <ul className="flex flex-col space-y-5 font-sans text-xl text-text-dark">
//                 {navLinks.map((link, index) => (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.2, delay: index * 0.05 }}
//                   >
//                     <Link
//                       to={link.path}
//                       onClick={() => setMenuOpen(false)}
//                       className="block py-2 hover:bg-bg-soft rounded-lg transition-colors duration-200 px-4"
//                     >
//                       {link.name}
//                     </Link>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-bg-lightest px-4 space-y-6">
//           <AnimatePresence mode="wait">
//             <motion.h1
//               key={currentSlide.heading}
//               className="text-4xl md:text-6xl font-heading font-bold drop-shadow-lg leading-tight"
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 30 }}
//               transition={{ duration: 2, ease: "easeOut" }}
//             >
//               {currentSlide.heading}
//             </motion.h1>
//           </AnimatePresence>

//           <AnimatePresence mode="wait">
//             <motion.p
//               key={currentSlide.subheading}
//               className="text-lg md:text-xl max-w-2xl text-gray-300 italic drop-shadow-md font-sans leading-relaxed"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
//             >
//               {currentSlide.subheading}
//             </motion.p>
//           </AnimatePresence>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide.buttonText}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
//             >
//               <Link
//                 to={currentSlide.buttonLink}
//                 className="inline-block bg-primary-gold hover:bg-[#97734C] px-10 py-4 rounded-full text-bg-lightest font-bold shadow-lg transition duration-300 transform hover:scale-105 text-lg font-heading"
//               >
//                 {currentSlide.buttonText}
//               </Link>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

// hero.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

// Import your hero images
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import logo from '../assets/logo.jpg';

const slides = [
  {
    image: home1,
    heading: "Embrace Traditional Allure",
    subheading: "Discover handcrafted pieces that narrate tales of heritage and elegance.",
    buttonText: "View Collections",
    buttonLink: "/products",
  },
  {
    image: home2,
    heading: "Cozy Comfort, Timeless Style",
    subheading: "Experience the warmth of meticulously crafted designs for every season.",
    buttonText: "Explore Comfort",
    buttonLink: "/products",
  },
  {
    image: home3,
    heading: "Curated Elegance, Just For You",
    subheading: "Step into a world where every garment is a treasure, handpicked for its unique charm.",
    buttonText: "Find Your Style",
    buttonLink: "/products",
  },
  {
    image: home4,
    heading: "Unveiling Our Latest Creations",
    subheading: "Be the first to explore fresh designs that blend modern trends with classic beauty.",
    buttonText: "New Arrivals",
    buttonLink: "/products",
  },
];

export default function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/products" },
    { name: "Our Story", path: "/about" },
    { name: "Connect", path: "/contact" },
  ];

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Slide changes every 5 seconds
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="h-screen relative overflow-hidden bg-black overflow-x-hidden">

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-${currentSlideIndex}`}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation within Hero */}
        <nav className="absolute top-0 left-0 w-full px-4 md:px-12 py-5 z-40">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img
                src={logo}
                alt="RDS BY RICHA SHAH Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-primary-gold shadow-md"
              />
              <span className="text-xl sm:text-3xl font-heading font-bold text-bg-lightest tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
                RDS BY RICHA SHAH
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-10 font-sans text-lg text-bg-lightest">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Link
                    to={link.path}
                    className="relative group block py-1"
                  >
                    <span className="relative z-10 hover:text-primary-gold transition-colors duration-200">
                      {link.name}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-3xl text-bg-lightest cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden bg-bg-lightest shadow-inner px-6 pt-2 pb-6 absolute w-full left-0 z-40"
              style={{ top: 'auto', bottom: 'auto' }}
            >
              <ul className="flex flex-col space-y-5 font-sans text-xl text-text-dark">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 hover:bg-bg-soft rounded-lg transition-colors duration-200 px-4"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content (Text & Button) */}
        <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-bg-lightest px-4 space-y-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide.heading}
              className="text-4xl md:text-6xl font-heading font-bold drop-shadow-lg leading-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {currentSlide.heading}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide.subheading}
              className="text-lg md:text-xl max-w-2xl text-gray-300 italic drop-shadow-md font-sans leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              {currentSlide.subheading}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.buttonText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Link
                to={currentSlide.buttonLink}
                className="inline-block bg-primary-gold hover:bg-[#97734C] px-10 py-4 rounded-full text-bg-lightest font-bold shadow-lg transition duration-300 transform hover:scale-105 text-lg font-heading"
              >
                {currentSlide.buttonText}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from '../assets/logo.jpg'; // Correct import for your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/products" },
    { name: "Our Story", path: "/about" },
    { name: "Connect", path: "/contact" },
  ];

  return (
    <nav className="bg-bg-lightest shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3"> {/* Increased gap slightly for logo */}
          {/* Logo added here */}
          <img
            src={logo}
            alt="RDS BY RICHA SHAH Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-primary-gold shadow-md" // Size adjusted, rounded-full to hide background, subtle border and shadow
          />
          <span className="text-3xl font-heading font-bold text-text-dark tracking-wide">
            RDS BY RICHA SHAH
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 font-sans text-lg text-text-medium">
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-3xl text-text-dark cursor-pointer">
          {menuOpen ? (
            <HiX onClick={() => setMenuOpen(false)} />
          ) : (
            <HiOutlineMenuAlt3 onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-bg-lightest shadow-inner px-6 pt-2 pb-6 absolute w-full top-full left-0 z-40"
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
    </nav>
  );
};

export default Navbar;
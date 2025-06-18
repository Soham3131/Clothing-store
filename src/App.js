import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Founder from './components/Founder';
import FeaturedProducts from './components/FeaturedProducts';
import CustomerReviews from './components/CustomerReviews';
import HappyCustomersGallery from './components/HappyCustomersGallery';
import Products from "./pages/Products"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  // ✅ Only show Navbar on non-home pages
  const showNavbar = location.pathname !== '/';

  return (
    <div className="bg-[#f5f7fa] text-gray-800">
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Founder />
              <FeaturedProducts />
              <CustomerReviews />
              <HappyCustomersGallery />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div className="text-center p-10 text-red-500">Page Not Found</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

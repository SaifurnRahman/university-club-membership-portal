import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
           
            className="flex items-center space-x-3 group cursor-pointer bg-transparent border-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <FaGraduationCap className="text-xl" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              Uni<span className="text-indigo-600">Circle</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
             
              className='text-sm font-medium transition-colors bg-transparent border-none cursor-pointer text-indigo-600' 
            
            >
              Home
            </button>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              About
            </a>
            <a href="#clubs" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              Clubs & Events
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              FAQ
            </a>
            <button 
              
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all cursor-pointer"
            >
              Join Portal
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-xl focus:outline-none transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl px-6 py-6 space-y-4 overflow-hidden"
          >
            <button  
              className="block text-base font-medium text-gray-700 hover:text-indigo-600 bg-transparent border-none cursor-pointer"
            >
              Home
            </button>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)} 
              className="block text-base font-medium text-gray-700 hover:text-indigo-600"
            >
              About
            </a>
            <a 
              href="#clubs" 
              onClick={() => setIsOpen(false)} 
              className="block text-base font-medium text-gray-700 hover:text-indigo-600"
            >
              Clubs & Events
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsOpen(false)} 
              className="block text-base font-medium text-gray-700 hover:text-indigo-600"
            >
              FAQ
            </a>
            <div className="pt-2">
              <button 
                className="w-full text-center py-3 text-white bg-indigo-600 rounded-xl shadow-md font-medium cursor-pointer"
              >
                Join Portal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
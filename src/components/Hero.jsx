import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-24 lg:py-32">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-100/50 to-violet-100/50 blur-3xl -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6 shadow-sm"
        >
          <HiSparkles className="text-indigo-500" />
          <span>Fall 2026 Membership Open Now</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight max-w-4xl mx-auto leading-[1.15]"
        >
          Discover, Connect & Lead in University <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Student Clubs</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          The centralized platform to explore campus organizations, track your engagement history, and collaborate on high-impact projects.
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Primary Action Button */}
          <button 
            
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all group cursor-pointer"
          >
            <span>Register Now</span>
            <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Secondary Action Anchor (smooth scroll to section) */}
          <a 
            href="#clubs" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 active:scale-95 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default  Hero
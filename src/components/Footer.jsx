import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <span className="font-bold text-xl text-white tracking-tight">
              Uni<span className="text-indigo-500">Circle</span>
            </span>
            <p className="mt-4 text-slate-400 text-sm max-w-sm leading-relaxed">
              The centralized platform for university student organizations, empowering collaboration, tracking engagement, and managing memberships seamlessly.
            </p>
            <p className="mt-4 text-slate-500 text-xs">
              Contact: support@campus-sync.edu | Phone: +880 1234-567890
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#clubs" className="hover:text-indigo-400 transition-colors">Clubs & Events</a>
              </li>
              <li>
                <a href="#register" className="hover:text-indigo-400 transition-colors">Join Portal</a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Support & Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} CampusSync. All rights reserved. Built for Information System Design Lab.
          </p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors"><FaFacebookF size={14} /></a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors"><FaTwitter size={14} /></a>
            <a href="#" aria-label="Linkedin" className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors"><FaLinkedinIn size={14} /></a>
            <a href="#" aria-label="Github" className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors"><FaGithub size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
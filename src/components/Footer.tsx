import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="w-full py-6 sm:py-8 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-lg font-bold">xcuxion</div>
          <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm text-gray-600">
            <button onClick={() => scrollToSection('home')} className="hover:text-gray-800 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-gray-800 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-800 transition-colors">
              Contact
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-gray-800 transition-colors">
              FAQ
            </button>
          </nav>
          <div className="text-xs text-gray-600 font-bold text-center">© 2024 xcuxion, ALL RIGHTS RESERVED</div>
          <div className="flex space-x-4 text-gray-600 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-gray-800 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-800 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-800 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-800 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

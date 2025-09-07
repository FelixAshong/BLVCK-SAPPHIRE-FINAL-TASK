import React from "react";

interface HeaderProps {
  isLoaded: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isLoaded,
  isMobileMenuOpen,
  toggleMobileMenu,
  scrollToSection
}) => {
  return (
    <header className={`relative w-full ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {/* Desktop Header - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="font-mono font-extralight text-sm absolute top-8 hover-scale transition-all duration-300" style={{left: '117px', zIndex: 20}}>xcuxion</div>
        <nav 
          className="absolute flex space-x-6 text-xs text-gray-600"
          style={{
            width: '423px',
            height: '20px',
            top: '31.89px',
            left: '300px',
            zIndex: 20
          }}
        >
          <button onClick={() => scrollToSection('home')} className="font-semibold hover:text-gray-800 transition-all duration-300 hover:scale-110">Home</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-gray-800 transition-all duration-300 hover:scale-110">Services</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-800 transition-all duration-300 hover:scale-110">Contact</button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-gray-800 transition-all duration-300 hover:scale-110">FAQ</button>
        </nav>
      </div>

      {/* Mobile Header - visible only on mobile */}
      <div className="lg:hidden relative py-4 px-4 bg-white shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-mono font-extralight text-lg font-bold text-gray-900 animate-fade-in-left">
            xcuxion
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 hover:scale-110 animate-fade-in-right"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 border-t border-gray-200 animate-fade-in-up">
            <nav className="flex flex-col space-y-3 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 px-4 text-sm font-semibold text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-300 hover:translate-x-2">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-300 hover:translate-x-2">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-300 hover:translate-x-2">Contact</button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-all duration-300 hover:translate-x-2">FAQ</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;



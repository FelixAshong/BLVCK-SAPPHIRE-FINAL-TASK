import React from "react";
import { FaChevronRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

interface HeroProps {
  isLoaded: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ isLoaded, scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden min-h-[443px] lg:mt-2"
    >
      {/* Desktop Hero Layout - hidden on mobile */}
      <div className="hidden lg:block">
        {/* Top chip image */}
        <img
          src="/images/top chip.png"
          alt="Top chip"
          className={`absolute top-32 left-4 sm:left-8 lg:left-16 xl:left-28 w-48 h-auto z-4 ${isLoaded ? 'animate-fade-in-left' : 'opacity-0'}`}
        />
        
        <div 
          className={`absolute top-36 left-4 sm:left-8 lg:left-16 xl:left-28 z-10 max-w-2xl ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
            From Idea to Impact! <br /> Your Technology Partner
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            From initial concept to market launch, we provide the expertise to
            bring your tech vision to life.<br />
            We navigate the complexities of technology and business, so you can focus on achieving your goals.
          </p>
        </div>
        
        {/* Button and Social Icons Container */}
        <div 
          className={`absolute top-80 left-4 sm:left-8 lg:left-16 xl:left-28 z-10 flex items-center flex-wrap gap-4 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 min-w-max whitespace-nowrap hover-lift hover-glow"
          >
            <span>Learn more ➤</span>
          </button>
          
          {/* Vertical separator line */}
          <div className="mx-4 h-8 border-l-2 border-gray-600"></div>
          
          <div className="flex space-x-3 text-gray-600 text-lg">
            <a href="#" aria-label="YouTube" className="hover:text-lime-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
              <FaYoutube />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-lime-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-lime-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-lime-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        {/* Mask group - background layer */}
        <img
          src="/images/Mask group.png"
          alt="Mask group background"
          className={`absolute top-2 left-0 w-full h-full object-cover z-1 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
        />
        
        {/* Main hero image - Image1 */}
        <img
          src="/images/Final_Task_Image1.png"
          alt="Technology concept illustration"
          className={`absolute top-12 right-4 sm:right-8 lg:right-16 xl:right-20 w-56 sm:w-64 lg:w-72 xl:w-80 h-auto z-2 animate-float ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        />
        
        {/* Incuts overlay - top layer */}
        <img
          src="/images/incuts.png"
          alt="Incuts overlay"
          className={`absolute top-40 right-2 sm:right-4 lg:right-6 xl:right-8 w-80 sm:w-96 lg:w-[28rem] xl:w-[32rem] h-auto z-3 animate-pulse-slow ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        />
      </div>

      {/* Mobile Hero Layout - visible only on mobile */}
      <div className="lg:hidden px-4 py-8 min-h-[500px] bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="flex flex-col items-start">
          {/* Top chip image */}
          <img
            src="/images/top chip.png"
            alt="Top chip"
            className="w-32 h-auto mb-4 animate-fade-in-left"
          />
          
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-4 text-gray-900 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From Idea to Impact! <br /> Your Technology Partner
          </h1>
          
          <p className="text-sm text-gray-600 mb-6 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            From initial concept to market launch, we provide the expertise to
            bring your tech vision to life. We navigate the complexities of
            technology and business, so you can focus on achieving your goals.
          </p>
          
          {/* Button and Social Icons Container */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-gray-900 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover-lift hover-glow"
            >
              <span>Learn more</span>
              <FaChevronRight size={12} />
            </button>
            
            {/* Vertical separator line - hidden on mobile */}
            <div className="hidden sm:block mx-4 h-8 border-l-2 border-gray-600"></div>
            
            <div className="flex space-x-4 text-gray-600 text-xl">
              <a href="#" aria-label="YouTube" className="hover:text-lime-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <FaYoutube />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-lime-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-lime-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-lime-500 transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          {/* Hero images for mobile */}
          <div className="relative w-full flex justify-center animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
            <img
              src="/images/Final_Task_Image1.png"
              alt="Technology concept illustration"
              className="w-64 h-auto relative z-2 animate-float"
            />
            <img
              src="/images/incuts.png"
              alt="Incuts overlay"
              className="absolute top-4 -right-4 w-72 h-auto z-3 opacity-80 animate-pulse-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



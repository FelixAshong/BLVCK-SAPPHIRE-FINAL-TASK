import React from "react";
import { FaServicestack, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="max-w-xl">
        <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
          <div className="w-8 h-0.5 bg-gray-400"></div>
          <FaServicestack />
          <span>welcome to xcuxion</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
          From Idea to Impact! <br /> Your Technology Partner
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          From initial concept to market launch, we provide the expertise to
          bring your tech vision to life. We navigate the complexities of
          technology and business, so you can focus on achieving your goals.
        </p>
        <button 
          onClick={() => scrollToSection('services')}
          className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Learn more &gt;
        </button>
        <div className="flex space-x-3 mt-4 text-gray-600 text-lg">
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
      <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="https://picsum.photos/500/350"
          alt="Technology concept illustration"
          className="rounded-lg shadow-lg"
        />
        {/* Overlay speech bubbles */}
        <div className="absolute top-10 left-10 bg-white p-2 rounded shadow text-xs max-w-xs">
          <strong>Stakeholder</strong>
          <p>
            Ready to take your tech startup to the next level? Apply to our
            incubation!
          </p>
        </div>
        <div className="absolute top-28 right-10 bg-white p-2 rounded shadow text-xs max-w-xs">
          <strong>Stakeholder</strong>
          <p>
            Ready to take your tech startup to the next level? Apply to our
            incubation!
          </p>
        </div>
        <div className="absolute bottom-10 left-20 bg-white p-2 rounded shadow text-xs max-w-xs">
          <strong>Stakeholder</strong>
          <p>
            Ready to take your tech startup to the next level? Apply to our
            incubation!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

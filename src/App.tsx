import React, { useState } from "react";
import {
  FaHome,
  FaServicestack,
  FaEnvelope,
  FaQuestionCircle,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaBuilding,
  FaClipboardCheck,
  FaTasks,
  FaCogs,
  FaTools,
  FaCheckCircle,
  FaNetworkWired,
  FaLeaf,
  FaUserTie,
  FaChevronRight
} from "react-icons/fa";

function App() {
  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto relative">
      {/* Header */}
      <header className="relative w-full">
        <div className="font-mono font-extralight text-sm absolute top-8" style={{left: '117px', zIndex: 20}}>xcuxion</div>
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
          <button onClick={() => scrollToSection('home')} className="font-semibold hover:text-gray-800 transition-colors">Home</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-gray-800 transition-colors">Services</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-800 transition-colors">Contact</button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-gray-800 transition-colors">FAQ</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full overflow-hidden"
        style={{
          width: '1440px',
          height: '443px',
          top: '8px'
        }}
      >
        {/* Top chip image */}
        <img
          src="/src/assets/images/top chip.png"
          alt="Top chip"
          className="absolute"
          style={{
            width: '234px',
            height: '23px',
            top: '131px',
            left: '118px',
            zIndex: 4
          }}
        />
        
        <div 
          className="absolute"
          style={{
            width: '665px',
            height: '237px',
            top: '160px',
            left: '117px',
            zIndex: 10
          }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
            From Idea to Impact! <br /> Your Technology Partner
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            From initial concept to market launch, we provide the expertise to
            bring your tech vision to life. We navigate the complexities of
            technology and business, so you can focus on achieving your goals.
          </p>
        </div>
        
        {/* Button and Social Icons Container */}
        <div 
          className="absolute flex items-center"
          style={{
            width: '252.072265625px',
            height: '53px',
            top: '315px',
            left: '118px',
            zIndex: 10
          }}
        >
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 min-w-max whitespace-nowrap"
          >
            <span>Learn more</span>
            <FaChevronRight size={12} />
          </button>
          
          {/* Vertical separator line */}
          <div className="mx-4 h-8 border-l-2 border-gray-600"></div>
          
          <div className="flex space-x-3 text-gray-600 text-lg">
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
        
        {/* Mask group - background layer */}
        <img
          src="/src/assets/images/Mask group.png"
          alt="Mask group background"
          className="absolute"
          style={{
            width: '1440px',
            height: '443px',
            top: '8px',
            left: '0px',
            zIndex: 1
          }}
        />
        
        {/* Main hero image - Image1 */}
        <img
          src="/src/assets/images/Final_Task_Image1.png"
          alt="Technology concept illustration"
          className="absolute"
          style={{
            width: '327.870361328125px',
            height: '361.4719543457031px',
            top: '52px',
            left: '866px',
            zIndex: 2
          }}
        />
        
        {/* Incuts overlay - top layer */}
        <img
          src="/src/assets/images/incuts.png"
          alt="Incuts overlay"
          className="absolute"
          style={{
            width: '509.85772705078125px',
            height: '199.44664001464844px',
            top: '170px',
            left: '778.01px',
            zIndex: 3
          }}
        />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-12 bg-white rounded-lg shadow-sm"
      >
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-6">
          <div className="w-8 h-0.5 bg-gray-400"></div>
          <FaServicestack />
          <h2 className="font-semibold text-lg">What we do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
          <div className="flex space-x-4">
            <div className="text-purple-600 mt-1">
              <FaBuilding size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Lorem ipsum dolor</h3>
              <p>
                Sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum quisquam eius sed
                odit fugiat iusto fuga praesentium.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 border border-lime-200 rounded p-4 bg-lime-50">
            <div className="text-lime-700 mt-1">
              <FaBuilding size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Lorem ipsum dolor</h3>
              <p>
                Sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum quisquam eius sed
                odit fugiat iusto fuga praesentium.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-purple-600 mt-1">
              <FaBuilding size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Lorem ipsum dolor</h3>
              <p>
                Sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum quisquam eius sed
                odit fugiat iusto fuga praesentium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-6">
          <div className="w-8 h-0.5 bg-gray-400"></div>
          <FaTasks />
          <h2 className="font-semibold text-lg">Our working process</h2>
        </div>
        <div className="flex justify-center space-x-12">
          {/* Each step */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-white">
              <FaClipboardCheck />
            </div>
            <span className="text-xs">Planning</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 rounded-full border-2 border-lime-500 flex items-center justify-center text-lime-500">
              <FaClipboardCheck />
            </div>
            <span className="text-xs text-lime-500">Analysis</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-white">
              <FaClipboardCheck />
            </div>
            <span className="text-xs">Design</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 rounded-full border-2 border-lime-500 flex items-center justify-center text-lime-500">
              <FaClipboardCheck />
            </div>
            <span className="text-xs text-lime-500">Development</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-white">
              <FaClipboardCheck />
            </div>
            <span className="text-xs">Maintenance</span>
          </div>
        </div>
      </section>

      {/* Incubation Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-white rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg">
          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
            <div className="w-8 h-0.5 bg-gray-400"></div>
            <FaTasks />
            <span>Workflow</span>
          </div>
          <h2 className="text-2xl font-extrabold mb-2">
            Tech startups incubation and acceleration
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Ready to take your tech startup to the next level? Apply to our
            incubation and acceleration programs today!
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
          >
            <span>Learn more</span>
            <FaChevronRight size={12} />
          </button>
        </div>
        <div className="relative mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="https://picsum.photos/450/300"
            alt="Incubation program illustration"
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

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="relative md:w-1/2">
          <img
            src="https://picsum.photos/500/350"
            alt="Tech journey concept"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-lime-100 opacity-30 rounded-lg -z-10 transform rotate-3"></div>
        </div>
        <div className="max-w-lg md:ml-12 mt-8 md:mt-0">
          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
            <div className="w-8 h-0.5 bg-gray-400"></div>
            <FaBuilding />
            <span>Why choose us</span>
          </div>
          <h2 className="text-2xl font-extrabold mb-2">
            Launch Your Tech Journey with Confidence
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Turn Your Tech Vision Into Reality. Choose XCUXION for Measurable
            Success.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6 text-xs text-lime-700">
            <div className="flex items-center space-x-2 bg-lime-100 rounded px-3 py-1">
              <FaCheckCircle />
              <span>Proven track record</span>
            </div>
            <div className="flex items-center space-x-2 bg-lime-100 rounded px-3 py-1">
              <FaNetworkWired />
              <span>Network and resources</span>
            </div>
            <div className="flex items-center space-x-2 bg-lime-100 rounded px-3 py-1">
              <FaLeaf />
              <span>Scalability and Sustainability</span>
            </div>
            <div className="flex items-center space-x-2 bg-lime-100 rounded px-3 py-1">
              <FaUserTie />
              <span>Experienced Mentorship</span>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
          >
            <span>Learn more</span>
            <FaChevronRight size={12} />
          </button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-6">
          <div className="w-8 h-0.5 bg-gray-400"></div>
          <FaTasks />
          <h2 className="font-semibold text-lg">Check out recent reviews</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 max-w-xs flex flex-col"
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={`https://picsum.photos/seed/review${i}/40/40`}
                  alt="Reviewer avatar"
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-sm">Prince Nodjon</p>
                  <p className="text-xs text-gray-500">Software Developer</p>
                </div>
              </div>
              <p className="text-xs text-gray-700 mb-3">
                Sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
              </p>
              <div className="flex space-x-1 text-yellow-400">
                {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={idx < 4 ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2 text-gray-400">
          <span className="w-2 h-2 rounded-full bg-lime-500"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row"
      >
        <div className="md:w-1/3 pr-6">
          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
            <div className="w-8 h-0.5 bg-gray-400"></div>
            <FaQuestionCircle />
            <h2 className="text-2xl font-extrabold">Frequently asked question</h2>
          </div>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-2">
            <li>Get Answers to Your Tech Startup Questions</li>
            <li>Explore Our FAQ to Learn More</li>
          </ul>
        </div>
        <div className="md:w-2/3">
          {[
            {
              question: "Lorem ipsum dolor",
              answer:
                "Sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium."
            },
            {
              question: "Lorem ipsum dolor Lorem ipsum dolor",
              answer: "Lorem ipsum dolor"
            },
            {
              question: "Lorem ipsum dolor",
              answer: "Lorem ipsum dolor"
            },
            {
              question: "Lorem ipsum Lorem ipsum dolor",
              answer: "Lorem ipsum dolor"
            },
            {
              question: "Lorem ipsum dolor",
              answer: "Lorem ipsum dolor"
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-gray-300 py-3 cursor-pointer"
              onClick={() => toggleFaq(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-gray-500">{activeFaq === idx ? "-" : "+"}</span>
              </div>
              {activeFaq === idx && (
                <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row"
      >
        <form className="md:w-1/2 space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email eg. princendjoh5@gmail.com"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="tel"
            placeholder="Phone eg. 0205358892"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <textarea
            placeholder="Type message"
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-lime-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
          >
            <span>Send</span>
            <FaChevronRight size={12} />
          </button>
        </form>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
            <div className="w-8 h-0.5 bg-gray-400"></div>
            <FaEnvelope />
            <h2 className="text-2xl font-extrabold">
              Connect with xcuxion, Let's Discuss Your Tech Startup Needs
            </h2>
          </div>
          <p className="text-sm text-gray-600">
            We're here to answer your questions and explore how we can help you
            achieve your goals.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-600">
        <div className="mb-2">xcuxion</div>
        <nav className="flex justify-center space-x-4 mb-2">
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
        <div className="mb-2">© 2024 xcuxion, ALL RIGHTS RESERVED</div>
        <div className="flex justify-center space-x-4 text-gray-600 text-lg">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;

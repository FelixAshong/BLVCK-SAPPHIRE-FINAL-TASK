import React, { useState, useEffect } from "react";
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
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

function App() {
  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Reviews carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Animation state
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Scroll reveal effect
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Review data
  const reviews = [
    { name: "Prince Nodjon", role: "Software Developer", text: "Sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur" },
    { name: "Sarah Johnson", role: "Product Manager", text: "Outstanding service and support! The team helped us scale our startup from idea to market leader in just 18 months." },
    { name: "Mike Chen", role: "Tech Founder", text: "The mentorship and resources provided were invaluable. They truly understand the startup ecosystem and challenges." },
    { name: "Emily Davis", role: "CTO", text: "Professional, knowledgeable, and results-driven. Highly recommend for any tech startup looking to accelerate growth." },
    { name: "Alex Rodriguez", role: "CEO", text: "Game-changing experience! Their network and expertise opened doors we never thought possible for our company." },
    { name: "Lisa Wang", role: "Lead Developer", text: "Incredible support throughout our journey. The team's dedication to our success was evident from day one." },
    { name: "David Thompson", role: "Startup Founder", text: "The acceleration program exceeded all expectations. From concept to launch, their guidance was instrumental to our success." },
    { name: "Maria Garcia", role: "Data Scientist", text: "Exceptional mentorship and resources. The network connections alone were worth the entire program experience." },
    { name: "James Wilson", role: "VP Engineering", text: "World-class incubation services. They helped us avoid common pitfalls and accelerated our growth beyond imagination." }
  ];

  const totalSlides = Math.ceil(reviews.length / 3);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="w-full max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
      <Header 
        isLoaded={isLoaded}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
      />

      <Hero 
        isLoaded={isLoaded}
        scrollToSection={scrollToSection}
      />

      <Services />

      {/* Working Process Section */}
       <section className="w-full py-12 sm:py-16 bg-gray-50 px-4 sm:px-6 lg:px-8 reveal">
         <div className="max-w-7xl mx-auto">
           <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 mb-4">
             <img
               src="/images/top chip WORKFLOW.png"
               alt="Workflow"
               className="w-32 sm:w-40 h-auto"
             />
        </div>
           <h2 className="text-center text-xl sm:text-2xl font-bold mb-8 sm:mb-12">Our working process</h2>
           
           {/* Desktop Process Flow - hidden on mobile */}
           <div className="hidden lg:flex justify-center items-center space-x-8">
          {/* Each step */}
             <div className="flex flex-col items-center space-y-3 hover-scale transition-all duration-300 cursor-pointer">
               <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-lime-500 transition-all duration-300 hover-glow">
                 <svg className="w-8 h-8 text-gray-600 hover:text-lime-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                   <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <span className="text-sm font-medium text-gray-600">Planning</span>
             </div>
             <div className="w-8 h-0.5 border-dashed border-t-2 border-gray-400 animate-pulse"></div>
             <div className="flex flex-col items-center space-y-3 hover-scale transition-all duration-300 cursor-pointer">
               <div className="w-16 h-16 rounded-full border-2 border-lime-500 flex items-center justify-center animate-pulse-slow hover-glow">
                 <svg className="w-8 h-8 text-lime-500" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                   <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <span className="text-sm font-medium text-lime-500">Analysis</span>
             </div>
             <div className="w-8 h-0.5 border-dashed border-t-2 border-gray-400 animate-pulse"></div>
             <div className="flex flex-col items-center space-y-3 hover-scale transition-all duration-300 cursor-pointer">
               <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-lime-500 transition-all duration-300 hover-glow">
                 <svg className="w-8 h-8 text-gray-600 hover:text-lime-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                   <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <span className="text-sm font-medium text-gray-600">Design</span>
            </div>
             <div className="w-8 h-0.5 border-dashed border-t-2 border-gray-400 animate-pulse"></div>
             <div className="flex flex-col items-center space-y-3 hover-scale transition-all duration-300 cursor-pointer">
               <div className="w-16 h-16 rounded-full border-2 border-lime-500 flex items-center justify-center animate-pulse-slow hover-glow">
                 <svg className="w-8 h-8 text-lime-500" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                   <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
          </div>
               <span className="text-sm font-medium text-lime-500">Development</span>
            </div>
             <div className="w-8 h-0.5 border-dashed border-t-2 border-gray-400 animate-pulse"></div>
             <div className="flex flex-col items-center space-y-3 hover-scale transition-all duration-300 cursor-pointer">
               <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-lime-500 transition-all duration-300 hover-glow">
                 <svg className="w-8 h-8 text-gray-600 hover:text-lime-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                   <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
          </div>
               <span className="text-sm font-medium text-gray-600">Maintenance</span>
            </div>
          </div>
           
           {/* Mobile Process Flow - visible only on mobile */}
           <div className="lg:hidden space-y-6">
             {[
               { name: "Planning", active: false },
               { name: "Analysis", active: true },
               { name: "Design", active: false },
               { name: "Development", active: true },
               { name: "Maintenance", active: false }
             ].map((step, index) => (
               <div key={step.name} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                 <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                   step.active ? 'border-lime-500 bg-lime-50' : 'border-gray-300 bg-gray-50'
                 }`}>
                   <svg className={`w-6 h-6 ${step.active ? 'text-lime-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 24 24">
                     <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                     <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
            </div>
                 <div>
                   <h3 className={`font-semibold ${step.active ? 'text-lime-600' : 'text-gray-700'}`}>{step.name}</h3>
                   <p className="text-sm text-gray-500">Step {index + 1} of our process</p>
          </div>
            </div>
             ))}
          </div>
        </div>
      </section>

      {/* Incubation Section */}
       <section className="w-full py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8 reveal">
         {/* Desktop Layout - hidden on mobile */}
         <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
           <div className="w-full lg:w-1/2 lg:max-w-lg">
             <div className="flex items-center space-x-2 text-xs text-gray-500">
               <img
                 src="/images/top chip WORKFLOW.png"
                 alt="Workflow"
                 className="w-40 h-auto"
               />
          </div>
             <h2 className="text-3xl font-extrabold mb-4">
            Tech startups incubation and acceleration
          </h2>
             <p className="text-sm text-gray-600 mb-6">
            Ready to take your tech startup to the next level? Apply to our
            incubation and acceleration programs today!
          </p>
             <button 
               onClick={() => scrollToSection('contact')}
               className="bg-gray-900 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 hover-lift hover-glow animate-bounce-slow"
             >
               <span>Learn more ➤</span>
          </button>
        </div>
           <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <img
               src="/images/right.png"
               alt="Tech startup incubation illustration"
               className="w-full max-w-lg h-auto animate-float hover-scale transition-transform duration-300"
             />
           </div>
         </div>

         {/* Mobile Layout - visible only on mobile */}
         <div className="lg:hidden max-w-7xl mx-auto">
           <div className="text-center mb-8">
             <div className="flex items-center justify-center mb-4">
               <img
                 src="/images/top chip WORKFLOW.png"
                 alt="Workflow"
                 className="w-32 h-auto"
               />
             </div>
             <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
               Tech startups incubation and acceleration
             </h2>
             <p className="text-sm text-gray-600 mb-6 max-w-lg mx-auto">
              Ready to take your tech startup to the next level? Apply to our
               incubation and acceleration programs today!
            </p>
          </div>
           
           <div className="flex justify-center mb-8">
             <img
               src="/images/right.png"
               alt="Tech startup incubation illustration"
               className="w-full max-w-md h-auto"
             />
          </div>
           
           <div className="text-center">
             <button 
               onClick={() => scrollToSection('contact')}
               className="bg-gray-900 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-gray-800 transition-colors"
             >
               Learn more ➤
             </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
       <section className="w-full py-12 sm:py-16 bg-gray-50 px-4 sm:px-6 lg:px-8 reveal">
         <div className="max-w-7xl mx-auto">
           {/* Desktop Layout - hidden on mobile */}
           <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between gap-2">
             <div className="relative w-full lg:w-1/2">
               <img
                 src="/images/image.png"
            alt="Tech journey concept"
                 className="w-full h-96 object-contain object-center relative z-10"
                 style={{
                   transform: 'rotate(0deg)',
                   opacity: 1
                 }}
               />
             </div>
             <div className="w-full lg:max-w-lg lg:ml-2">
               <div className="flex items-center justify-start">
                 <img
                   src="/images/top chip choose.png"
                   alt="Why choose us"
                   className="w-40 h-auto"
                 />
               </div>
               <h2 className="text-3xl font-extrabold mb-4">
                 Launch Your Tech Journey with Confidence
               </h2>
               <p className="text-sm text-gray-600 mb-6">
                 Turn Your Tech Vision Into Reality. Choose XCUXION for Measurable
                 Success.
               </p>
               <div className="grid grid-cols-2 gap-3 mb-8">
                 <div className="bg-lime-50 px-3 py-2 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)'}}>
                   <span className="text-sm text-lime-800 font-medium">⦿ Proven track record</span>
                 </div>
                 <div className="bg-lime-50 px-3 py-2 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)'}}>
                   <span className="text-sm text-lime-800 font-medium">⦿ Network and resources</span>
                 </div>
                 <div className="bg-lime-50 px-3 py-2 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)'}}>
                   <span className="text-sm text-lime-800 font-medium">⦿ Scalability and Sustainability</span>
                 </div>
                 <div className="bg-lime-50 px-3 py-2 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)'}}>
                   <span className="text-sm text-lime-800 font-medium">⦿ Experienced Mentorship</span>
                 </div>
               </div>
               <button 
                 onClick={() => scrollToSection('contact')}
                 className="bg-gray-900 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
               >
                 <span>Learn more ➤</span>
               </button>
             </div>
        </div>

           {/* Mobile Layout - visible only on mobile */}
           <div className="lg:hidden">
             <div className="text-center mb-8">
               <div className="flex items-center justify-center mb-4">
                 <img
                   src="/images/top chip choose.png"
                   alt="Why choose us"
                   className="w-32 h-auto"
                 />
          </div>
               <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Launch Your Tech Journey with Confidence
          </h2>
               <p className="text-sm text-gray-600 mb-6 max-w-lg mx-auto">
            Turn Your Tech Vision Into Reality. Choose XCUXION for Measurable
            Success.
          </p>
             </div>

             <div className="flex justify-center mb-8">
               <img
                 src="/images/image.png"
                 alt="Tech journey concept"
                 className="w-full max-w-sm h-auto"
               />
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
               <div className="bg-lime-50 px-3 py-2 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)'}}>
                 <span className="text-sm text-lime-800 font-medium">⦿ Proven track record</span>
            </div>
               <div className="bg-lime-50 px-3 py-2 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)'}}>
                 <span className="text-sm text-lime-800 font-medium">⦿ Network and resources</span>
            </div>
               <div className="bg-lime-50 px-3 py-2 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)'}}>
                 <span className="text-sm text-lime-800 font-medium">⦿ Scalability and Sustainability</span>
            </div>
               <div className="bg-lime-50 px-3 py-2 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)'}}>
                 <span className="text-sm text-lime-800 font-medium">⦿ Experienced Mentorship</span>
            </div>
          </div>

             <div className="text-center">
               <button 
                 onClick={() => scrollToSection('contact')}
                 className="bg-gray-900 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-gray-800 transition-colors"
               >
                 Learn more ➤
          </button>
             </div>
           </div>
        </div>
      </section>

      {/* Reviews Section */}
       <section className="w-full py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8 reveal">
           <div className="flex items-center justify-center">
             <img
               src="/images/top chip WORKFLOW.png"
               alt="Workflow"
               className="w-32 sm:w-40 h-auto"
             />
        </div>
           <h2 className="text-center text-xl sm:text-2xl font-bold mb-8 sm:mb-12">Check out recent reviews</h2>
           <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
                  {reviews.slice(slideIndex * 3, slideIndex * 3 + 3).map((review, reviewIndex) => (
                    <div
                      key={slideIndex * 3 + reviewIndex}
                      className="bg-white rounded-lg shadow-lg p-6 max-w-xs flex flex-col border border-gray-100"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src="/images/Final Task_image3.jpeg"
                  alt="Reviewer avatar"
                          className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                          <p className="font-semibold text-sm">{review.name}</p>
                          <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
                      <p className="text-sm text-gray-700 mb-4 flex-grow">
                        {review.text}
              </p>
                      <div className="flex space-x-1">
                        {[...Array(4)].map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                    viewBox="0 0 24 24"
                            className="w-4 h-4 text-yellow-400"
                  >
                    <path
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"
                    />
                  </svg>
                ))}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 text-gray-300"
                        >
                          <path
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"
                          />
                        </svg>
              </div>
            </div>
          ))}
        </div>
              </div>
           ))}
           </div>
            </div>
           <div className="flex justify-center mt-8 space-x-2">
             {Array.from({ length: totalSlides }).map((_, index) => (
               <button
                 key={index}
                 onClick={() => setCurrentSlide(index)}
                 className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                   index === currentSlide ? 'bg-lime-500' : 'bg-gray-300'
                 }`}
               />
          ))}
        </div>
      </section>

      <FAQ activeFaq={activeFaq} toggleFaq={toggleFaq} />

      <Contact />

      <Footer scrollToSection={scrollToSection} />
        </div>
    </div>
  );
}

export default App;

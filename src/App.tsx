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

function App() {
  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Reviews carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        className="relative w-full overflow-hidden min-h-[443px] mt-2"
      >
        {/* Top chip image */}
        <img
          src="/src/assets/images/top chip.png"
          alt="Top chip"
          className="absolute top-32 left-4 sm:left-8 lg:left-14 xl:left-20 w-40 h-auto z-4"
        />
        
        <div 
          className="absolute top-36 left-4 sm:left-8 lg:left-16 xl:left-28 z-10 max-w-2xl"
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
          className="absolute top-80 left-4 sm:left-8 lg:left-16 xl:left-28 z-10 flex items-center flex-wrap gap-4"
        >
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-gray-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 min-w-max whitespace-nowrap"
          >
            <span>Learn more ➤</span>
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
          className="absolute top-2 left-0 w-full h-full object-cover z-1"
        />
        
        {/* Main hero image - Image1 */}
        <img
          src="/src/assets/images/Final_Task_Image1.png"
            alt="Technology concept illustration"
          className="absolute top-12 right-4 sm:right-8 lg:right-16 xl:right-20 w-56 sm:w-64 lg:w-72 xl:w-80 h-auto z-2"
        />
        
        {/* Incuts overlay - top layer */}
        <img
          src="/src/assets/images/incuts.png"
          alt="Incuts overlay"
          className="absolute top-40 right-2 sm:right-4 lg:right-6 xl:right-8 w-80 sm:w-96 lg:w-[28rem] xl:w-[32rem] h-auto z-3"
        />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="w-full py-16 bg-white px-4 sm:px-6 lg:px-8"
      >
         <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
           <img
             src="/src/assets/images/top chip service.png"
             alt="Services"
             className="w-40 h-auto"
           />
        </div>
         <h2 className="text-center text-2xl font-bold mb-12">What we do</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-gray-700">
          <div className="flex space-x-4">
             <div className="mt-1">
               <img
                 src="/src/assets/images/group 1.png"
                 alt="Service icon"
                 className="object-contain flex-shrink-0"
                 style={{
                   width: '199px',
                   height: '143px',
                   marginTop: '-50px'
                 }}
               />
            </div>
            <div>
               <h3 className="font-semibold mb-2">Lorem ipsum dolor</h3>
              <p>
                Sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum quisquam eius sed
                odit fugiat iusto fuga praesentium.
              </p>
            </div>
          </div>
           <div className="flex space-x-4 p-6 bg-lime-50 rounded-lg" style={{border: '1px solid rgba(148, 180, 0, 0.3)', marginTop: '-20px'}}>
             <div className="mt-1">
               <img
                 src="/src/assets/images/group 2.png"
                 alt="Service icon"
                 className="object-contain flex-shrink-0"
                 style={{
                   width: '250px',
                   height: '180px',
                   marginTop: '-70px'
                 }}
               />
            </div>
            <div>
               <h3 className="font-semibold mb-2">Lorem ipsum dolor</h3>
              <p>
                Sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur
                voluptatum laborum numquam blanditiis harum quisquam eius sed
                odit fugiat iusto fuga praesentium.
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
             <div className="mt-1">
               <img
                 src="/src/assets/images/group 1.png"
                 alt="Service icon"
                 className="object-contain flex-shrink-0"
                 style={{
                   width: '199px',
                   height: '143px',
                   marginTop: '-50px'
                 }}
               />
            </div>
            <div>
               <h3 className="font-semibold mb-2">Lorem ipsum dolor</h3>
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
      <section className="w-full py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
          <img
            src="/src/assets/images/top chip workflow.png"
            alt="Workflow"
            className="w-40 h-auto"
          />
        </div>
        <h2 className="text-center text-2xl font-bold mb-12">Our working process</h2>
        <div className="flex justify-center items-center space-x-8">
          {/* Each step */}
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600">Planning</span>
          </div>
          <div className="w-8 h-0.5 border-dashed border-t-2 border-gray-400"></div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full border-2 border-lime-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-lime-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-lime-500">Analysis</span>
          </div>
          <div className="w-8 h-0.5 border-dashed border-t-2 border-gray-400"></div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600">Design</span>
          </div>
          <div className="w-8 h-0.5 border-dashed border-t-2 border-gray-400"></div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full border-2 border-lime-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-lime-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-lime-500">Development</span>
          </div>
          <div className="w-8 h-0.5 border-dashed border-t-2 border-gray-400"></div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600">Maintenance</span>
          </div>
        </div>
      </section>

      {/* Incubation Section */}
      <section className="w-full py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:max-w-lg">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <img
              src="/src/assets/images/top chip workflow.png"
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
            className="bg-gray-900 text-white px-6 py-3 rounded text-sm font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
          >
            <span>Learn more ➤</span>
          </button>
        </div>
         <img
           src="/src/assets/images/right.png"
           alt="Tech startup incubation illustration"
           className="absolute"
           style={{
             width: '566px',
             height: '355px',
             top: '1175px',
             left: '591px',
             zIndex: 10
           }}
         />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
          <div className="relative w-full lg:w-1/2">
            {/* Background shapes */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full -z-10" style={{backgroundColor: 'rgba(224, 232, 188, 1)'}}></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-20 rounded-full -z-10" style={{backgroundColor: 'rgba(224, 232, 188, 1)'}}></div>
            <img
              src="/src/assets/images/image.png"
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
              src="/src/assets/images/top chip choose.png"
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
      </section>

      {/* Reviews Section */}
      <section className="w-full py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <img
            src="/src/assets/images/top chip workflow.png"
            alt="Workflow"
            className="w-40 h-auto"
          />
        </div>
        <h2 className="text-center text-2xl font-bold mb-12">Check out recent reviews</h2>
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
                          src="src/assets/images/Final Task_image3.jpeg"
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

      {/* FAQ Section */}
      <section
        id="faq"
        className="w-full py-16 bg-gray-50 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        <div className="w-full lg:w-1/3 lg:pr-8">
          <div className="flex items-center justify-start">
            <img
              src="/src/assets/images/top chip faq.png"
              alt="FAQ"
              className="w-40 h-auto"
            />
          </div>
          <h2 className="text-3xl font-extrabold mb-4">Frequently asked question</h2>
          <ul className="text-sm text-gray-700 space-y-3">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Get Answers to Your Tech Startup Questions
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Explore Our FAQ to Learn More
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/3">
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
              className="border-b border-gray-300 py-4 cursor-pointer hover:bg-gray-100 transition-colors rounded px-2"
              onClick={() => toggleFaq(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 text-sm">{faq.question}</h3>
                <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">{activeFaq === idx ? "-" : "+"}</span>
                </div>
              </div>
              {activeFaq === idx && (
                <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full py-16 bg-white px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        <form className="w-full lg:w-2/5 space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="flex-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="flex-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email eg. princendjoh5@gmail.com"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <input
            type="tel"
            placeholder="Phone eg. 0205358892"
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          <textarea
            placeholder="Type message"
            rows={5}
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-lime-500"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 text-white px-12 py-4 rounded text-sm font-semibold hover:bg-gray-800 transition-colors w-full flex items-center justify-center space-x-2"
          >
            <span>Send ➤</span>
          </button>
        </form>
        <div className="w-full lg:w-1/2 lg:pl-6">
          <div className="flex items-center justify-start">
            <img
              src="/src/assets/images/top chip contact.png"
              alt="Contact"
              className="w-40 h-auto"
            />
          </div>
          <h2 className="text-3xl font-extrabold mb-4">
            Connect with xcuxion, Let's Discuss Your Tech Startup Needs
          </h2>
          <p className="text-sm text-gray-600">
            We're here to answer your questions and explore how we can help you
            achieve your goals.
          </p>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-lg font-bold">xcuxion</div>
          <nav className="flex space-x-8 text-sm text-gray-600">
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
          <div className="text-xs text-gray-600 font-bold">© 2024 xcuxion, ALL RIGHTS RESERVED</div>
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
      </footer>
      </div>
    </div>
  );
}

export default App;

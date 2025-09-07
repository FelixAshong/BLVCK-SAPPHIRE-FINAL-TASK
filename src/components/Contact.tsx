import React from "react";

interface ContactProps {
  // No props needed for now since this section is self-contained
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8 reveal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <form className="w-full lg:w-2/5 space-y-4">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300 hover:border-lime-300"
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300 hover:border-lime-300"
              />
            </div>
            <input
              type="email"
              placeholder="Email eg. princendjoh5@gmail.com"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300 hover:border-lime-300"
            />
            <input
              type="tel"
              placeholder="Phone eg. 0205358892"
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300 hover:border-lime-300"
            />
            <textarea
              placeholder="Type message"
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300 hover:border-lime-300"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-900 text-white px-12 py-4 rounded text-sm font-semibold hover:bg-gray-800 transition-all duration-300 w-full flex items-center justify-center space-x-2 hover-lift hover-glow"
            >
              <span>Send ➤</span>
            </button>
          </form>
          <div className="w-full lg:w-1/2 lg:pl-6">
            <div className="flex items-center justify-start lg:justify-start justify-center">
              <img
                src="/images/top chip contact.png"
                alt="Contact"
                className="w-32 sm:w-40 h-auto"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center lg:text-left">
              Connect with xcuxion, Let's Discuss Your Tech Startup Needs
            </h2>
            <p className="text-sm text-gray-600 text-center lg:text-left">
              We're here to answer your questions and explore how we can help you
              achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

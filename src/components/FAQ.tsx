import React from "react";

interface FAQProps {
  activeFaq: number | null;
  toggleFaq: (index: number) => void;
}

const FAQ: React.FC<FAQProps> = ({ activeFaq, toggleFaq }) => {
  const faqData = [
    {
      question: "Lorem ipsum dolor",
      answer: "Sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium."
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
  ];

  return (
    <section
      id="faq"
      className="w-full py-12 sm:py-16 bg-gray-50 px-4 sm:px-6 lg:px-8 reveal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <div className="w-full lg:w-1/3 lg:pr-8">
            <div className="flex items-center justify-start lg:justify-start justify-center">
              <img
                src="/images/top chip faq.png"
                alt="FAQ"
                className="w-32 sm:w-40 h-auto"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center lg:text-left">Frequently asked question</h2>
            <ul className="text-sm text-gray-700 space-y-3 text-center lg:text-left">
              <li className="flex items-start justify-center lg:justify-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Get Answers to Your Tech Startup Questions
              </li>
              <li className="flex items-start justify-center lg:justify-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Explore Our FAQ to Learn More
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-2/3">
            {faqData.map((faq, idx) => (
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
      </div>
    </section>
  );
};

export default FAQ;

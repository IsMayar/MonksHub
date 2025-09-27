import { faqsData } from "../../constants/index";
import React, { useState } from "react";
export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-12">
      {/* Header */}
      <div className="text-center mb-8 max-w-xl mx-auto ">
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm text-center max-w-sm md:max-w-md mx-auto sm:text-base md:text-sm">
          Frequently Asked Questions offers quick answers to common queries,
          guiding users through features and functionalities effortlessly.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqsData.map((faq, idx) => (
          <div
            key={idx}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleIndex(idx)}
              className={`w-full text-left px-4 sm:px-6 py-4 flex justify-between items-center transition-colors duration-500
                ${
                  activeIndex === idx
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              <span
                className={`font-medium text-sm sm:text-base md:text-lg transition-colors duration-500 ${
                  activeIndex === idx ? "text-green-700" : ""
                }`}
              >
                {faq.question}
              </span>
              <span className="text-xl sm:text-2xl">
                {activeIndex === idx ? "-" : "+"}
              </span>
            </button>
            <div
              className={`px-4 sm:px-6 text-gray-700 overflow-hidden transition-all duration-700 ease-in-out ${
                activeIndex === idx ? "max-h-96 py-4" : "max-h-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

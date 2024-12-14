import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do I get started with GolfSpace?",
    answer: "Simply create a free account to start connecting with other golfers, tracking your progress, and discovering new courses. You can sign up using your email or social media accounts."
  },
  {
    question: "Is GolfSpace available worldwide?",
    answer: "Yes! GolfSpace is available in over 25 countries, with new regions being added regularly. Our community spans across North America, Europe, Asia, and Australia."
  },
  {
    question: "How do you verify golf course information?",
    answer: "We work directly with golf courses and rely on verified user reviews to ensure all course information is accurate and up-to-date. Our team regularly validates course details and amenities."
  },
  {
    question: "Can I book tee times through GolfSpace?",
    answer: "Yes, you can book tee times at participating courses directly through our platform. We integrate with various booking systems to provide real-time availability."
  },
  {
    question: "How do you calculate handicaps?",
    answer: "We follow the World Handicap System (WHS) guidelines to calculate handicaps. Simply input your scores, and our system will automatically update your handicap index."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, GolfSpace is available on both iOS and Android devices. Download our mobile app to access all features on the go, including score tracking and course navigation."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900 text-left">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
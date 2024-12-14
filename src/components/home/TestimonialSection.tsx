import React from 'react';

const testimonials = [
  {
    content: "GolfSpace has completely transformed how I connect with other golfers. I've found amazing playing partners and improved my game!",
    author: "Sarah Johnson",
    role: "Amateur Golfer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100"
  },
  {
    content: "The course discovery feature is fantastic. I've found some hidden gems I never knew existed in my area.",
    author: "Michael Chen",
    role: "Golf Enthusiast",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100"
  },
  {
    content: "As a golf club owner, GolfSpace has helped us reach more players and grow our community.",
    author: "David Williams",
    role: "Club Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100"
  }
];

export function TestimonialSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What Our Members Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute -top-4 left-6">
                <span className="text-6xl text-green-600">"</span>
              </div>
              <blockquote className="mt-4">
                <p className="text-lg text-gray-600 italic">
                  {testimonial.content}
                </p>
                <footer className="mt-4 flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
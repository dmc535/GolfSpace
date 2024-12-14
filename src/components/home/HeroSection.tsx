import React from 'react';
import { Link } from 'react-router-dom';
import { Golf, Users, Map } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-green-700">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=2000"
          alt="Golf Course"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Welcome to GolfSpace
        </h1>
        <p className="mt-6 text-xl text-green-100 max-w-3xl">
          Connect with fellow golfers, track your progress, and discover amazing courses.
          Join the fastest-growing golf community today.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/courses"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 transition"
          >
            <Map className="w-5 h-5 mr-2" />
            Explore Courses
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-green-600 transition"
          >
            <Users className="w-5 h-5 mr-2" />
            Join Community
          </Link>
        </div>
      </div>
    </div>
  );
}
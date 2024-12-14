import React from 'react';
import { Users, Trophy, Map, Calendar, Star, Compass } from 'lucide-react';

const features = [
  {
    name: 'Connect with Golfers',
    description: 'Find and connect with golf enthusiasts in your area.',
    icon: Users,
  },
  {
    name: 'Track Progress',
    description: 'Monitor your handicap and celebrate achievements.',
    icon: Trophy,
  },
  {
    name: 'Discover Courses',
    description: 'Explore top-rated golf courses worldwide.',
    icon: Map,
  },
  {
    name: 'Book Tee Times',
    description: 'Easily schedule your next round of golf.',
    icon: Calendar,
  },
  {
    name: 'Course Reviews',
    description: 'Read and share authentic course reviews.',
    icon: Star,
  },
  {
    name: 'Local Events',
    description: 'Find tournaments and events near you.',
    icon: Compass,
  },
];

export function FeatureSection() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Everything You Need in One Place
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            GolfSpace brings together all the tools and features you need to enhance your golfing experience.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-white px-5 py-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
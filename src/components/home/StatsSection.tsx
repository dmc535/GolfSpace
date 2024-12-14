import React from 'react';
import { Users, Flag, MapPin } from 'lucide-react';

const stats = [
  { name: 'Active Members', value: '10,000+', icon: Users },
  { name: 'Golf Courses', value: '2,500+', icon: Flag },
  { name: 'Countries', value: '25+', icon: MapPin },
];

export function StatsSection() {
  return (
    <div className="bg-green-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-green-600/50 rounded-lg p-6 text-center transform hover:scale-105 transition"
            >
              <stat.icon className="h-8 w-8 text-white mx-auto" />
              <p className="mt-4 text-5xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-lg font-medium text-green-100">
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
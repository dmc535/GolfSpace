import React from 'react';
import { MapPin, DollarSign, Star, Users, Calendar } from 'lucide-react';
import type { GolfCourse } from '../../types';

interface CourseDetailsProps {
  course: GolfCourse;
}

export function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={course.imageUrl}
        alt={course.name}
        className="w-full h-64 object-cover"
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{course.name}</h2>
            <p className="flex items-center text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {course.location}
            </p>
          </div>
          <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="font-medium text-green-700">{course.rating}</span>
          </div>
        </div>

        <p className="mt-4 text-gray-600">{course.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-gray-700">
              <DollarSign className="w-5 h-5 mr-2" />
              <span className="font-medium">Membership Fee</span>
            </div>
            <p className="mt-1 text-2xl font-bold text-green-600">
              ${course.membershipFee.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center text-gray-700">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-medium">Current Members</span>
            </div>
            <p className="mt-1 text-2xl font-bold text-green-600">250+</p>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center">
            <Calendar className="w-5 h-5 mr-2" />
            Book Tee Time
          </button>
          <button className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition">
            Request Membership Info
          </button>
        </div>
      </div>
    </div>
  );
}
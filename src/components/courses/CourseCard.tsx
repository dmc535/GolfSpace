import React from 'react';
import type { GolfCourse } from '../../types';

interface CourseCardProps {
  course: GolfCourse;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={course.imageUrl} 
        alt={course.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
        <p className="text-gray-600 mt-1">{course.location}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-green-600 font-medium">
            ${course.membershipFee}/year
          </span>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-gray-600">{course.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
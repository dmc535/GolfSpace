import React, { useState } from 'react';
import { CourseSearch } from './CourseSearch';
import { CourseDetails } from './CourseDetails';
import { CourseMap } from './CourseMap';
import type { GolfCourse } from '../../types';

export function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<GolfCourse | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Golf Courses</h1>
        <CourseSearch onCourseSelect={setSelectedCourse} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {selectedCourse ? (
            <CourseDetails course={selectedCourse} />
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">
                Search for a course or select one from the list to view details.
              </p>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-1">
          <CourseMap />
        </div>
      </div>
    </div>
  );
}
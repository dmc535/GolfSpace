import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { loadGolfCourses } from '../../services/golfCourseService';
import type { GolfCourse } from '../../types';

export function CourseMap() {
  const [courses, setCourses] = useState<GolfCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await loadGolfCourses();
        setCourses(data);
      } catch (error) {
        console.error('Error loading courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <MapPin className="w-5 h-5 mr-2 text-green-600" />
        Maryland Golf Courses
      </h2>
      
      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
          >
            <h3 className="font-medium text-lg">{course.name}</h3>
            <p className="text-gray-600">{course.address}</p>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-green-600">{course.type}</span>
              <a
                href={course.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
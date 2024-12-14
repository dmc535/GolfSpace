import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { searchCourses } from '../../services/golfCourseService';
import type { GolfCourse } from '../../types';

interface CourseSearchProps {
  onCourseSelect: (course: GolfCourse) => void;
}

export function CourseSearch({ onCourseSelect }: CourseSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GolfCourse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.length > 2) {
        setLoading(true);
        try {
          const courses = await searchCourses(query);
          setResults(courses);
        } catch (error) {
          console.error('Error searching courses:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search golf courses by name, location, or type..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      {loading && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg p-4 text-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto" />
        </div>
      )}

      {results.length > 0 && !loading && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-10">
          {results.map((course) => (
            <button
              key={course.id}
              onClick={() => {
                onCourseSelect(course);
                setQuery('');
                setResults([]);
              }}
              className="w-full p-3 text-left hover:bg-gray-50 flex items-center space-x-3 border-b last:border-b-0"
            >
              <img
                src={course.imageUrl}
                alt={course.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <h4 className="font-medium text-gray-900">{course.name}</h4>
                <p className="text-sm text-gray-500">{course.location}</p>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                  {course.type}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {query.length > 2 && results.length === 0 && !loading && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg p-4 text-center text-gray-500">
          No courses found matching "{query}"
        </div>
      )}
    </div>
  );
}
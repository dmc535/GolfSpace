import React from 'react';
import { CourseCard } from '../courses/CourseCard';
import type { GolfCourse } from '../../types';

const FEATURED_COURSES: GolfCourse[] = [
  {
    id: '1',
    name: 'Pine Valley Golf Club',
    location: 'Pine Valley, NJ',
    membershipFee: 25000,
    description: 'Consistently ranked as one of the top golf courses in the world.',
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=1000',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Augusta National',
    location: 'Augusta, GA',
    membershipFee: 40000,
    description: 'Home of the Masters Tournament.',
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1000',
    rating: 5.0
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_COURSES.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
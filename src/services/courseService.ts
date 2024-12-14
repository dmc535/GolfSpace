import type { GolfCourse } from '../types';

// In a real app, this would be an API call
export async function searchCourses(query: string): Promise<GolfCourse[]> {
  return MOCK_COURSES.filter(course => 
    course.name.toLowerCase().includes(query.toLowerCase()) ||
    course.location.toLowerCase().includes(query.toLowerCase())
  );
}

export const MOCK_COURSES: GolfCourse[] = [
  {
    id: '1',
    name: 'Pine Valley Golf Club',
    location: 'Pine Valley, NJ',
    membershipFee: 25000,
    description: 'Consistently ranked as one of the top golf courses in the world, Pine Valley presents an unparalleled golfing experience with its challenging layout and pristine conditions.',
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=1000',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Augusta National',
    location: 'Augusta, GA',
    membershipFee: 40000,
    description: 'Home of the Masters Tournament, Augusta National is one of the most prestigious and beautiful golf courses in existence.',
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=1000',
    rating: 5.0
  },
  {
    id: '3',
    name: 'Pebble Beach Golf Links',
    location: 'Pebble Beach, CA',
    membershipFee: 30000,
    description: 'Featuring some of the most beautiful oceanside holes in golf, Pebble Beach is a bucket-list destination for golfers worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1600783486189-746f3f5e1c2c?auto=format&fit=crop&q=80&w=1000',
    rating: 4.8
  }
];
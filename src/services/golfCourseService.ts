import type { GolfCourse } from '../types';

export interface GolfCourseGeoJSON {
  type: 'Feature';
  properties: {
    city: string;
    zipcode: string;
    name: string;
    latitude: string;
    url: string;
    info: 'Public' | 'Private';
    longitude: string;
    address: string;
    category: string;
    phone: string;
  };
  geometry: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };
}

export interface GolfCourseCollection {
  type: 'FeatureCollection';
  features: GolfCourseGeoJSON[];
}

// Convert GeoJSON feature to our GolfCourse type
function convertGeoJSONToGolfCourse(feature: GolfCourseGeoJSON): GolfCourse {
  const { properties, geometry } = feature;
  
  return {
    id: properties.name.toLowerCase().replace(/\s+/g, '-'),
    name: properties.name,
    location: `${properties.city}, MD ${properties.zipcode}`,
    address: properties.address,
    membershipFee: properties.info === 'Private' ? 25000 : 0, // Example fee
    description: `${properties.info} golf course located in ${properties.city}. Contact ${properties.phone} for tee times.`,
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=1000',
    rating: 4.5, // Default rating
    coordinates: {
      lat: parseFloat(properties.latitude),
      lng: parseFloat(properties.longitude)
    },
    contact: {
      phone: properties.phone,
      website: properties.url
    },
    type: properties.info.toLowerCase() as 'public' | 'private'
  };
}

export async function loadGolfCourses(): Promise<GolfCourse[]> {
  try {
    // In a real app, this would be an API call
    // For now, we'll use the imported JSON directly
    const response = await import('../data/maryland-golf-courses.json');
    const geoJSON = response.default as GolfCourseCollection;
    
    return geoJSON.features.map(convertGeoJSONToGolfCourse);
  } catch (error) {
    console.error('Error loading golf courses:', error);
    return [];
  }
}

export function findNearestCourses(
  lat: number,
  lng: number,
  radius: number = 25 // radius in kilometers
): Promise<GolfCourse[]> {
  return loadGolfCourses().then(courses => {
    return courses
      .map(course => ({
        ...course,
        distance: calculateDistance(
          lat,
          lng,
          course.coordinates.lat,
          course.coordinates.lng
        )
      }))
      .filter(course => course.distance <= radius)
      .sort((a, b) => a.distance - b.distance);
  });
}

// Haversine formula to calculate distance between two points
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function searchCourses(query: string): Promise<GolfCourse[]> {
  return loadGolfCourses().then(courses => {
    const searchTerm = query.toLowerCase();
    return courses.filter(course => 
      course.name.toLowerCase().includes(searchTerm) ||
      course.location.toLowerCase().includes(searchTerm) ||
      course.type.toLowerCase().includes(searchTerm)
    );
  });
}

export function getCourseDetails(courseId: string): Promise<GolfCourse | null> {
  return loadGolfCourses().then(courses => 
    courses.find(course => course.id === courseId) || null
  );
}
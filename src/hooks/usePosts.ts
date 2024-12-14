import { useState, useEffect } from 'react';
import type { Post } from '../types';

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100',
    },
    content: 'Just shot my personal best at Pine Valley! 🏌️‍♂️ 72 on a perfect day.',
    imageUrl: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?fit=crop&w=800&h=500',
    location: 'Pine Valley Golf Club',
    timestamp: '2 hours ago',
    likes: 45,
    comments: 12,
  },
  {
    id: '2',
    author: {
      id: '2',
      name: 'Sarah Johnson',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100',
    },
    content: 'Beautiful morning for a round at Augusta National! Who else is playing today?',
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?fit=crop&w=800&h=500',
    location: 'Augusta National',
    timestamp: '5 hours ago',
    likes: 89,
    comments: 24,
  },
];

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPosts(MOCK_POSTS);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return { posts, loading };
}
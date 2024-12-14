import { v4 as uuidv4 } from 'uuid';
import type { Post, Comment } from '../types';

let MOCK_POSTS: Post[] = [
  {
    id: uuidv4(),
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
    comments: 1,
    commentList: [
      {
        id: uuidv4(),
        authorId: '2',
        authorName: 'Sarah Johnson',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=50&h=50',
        content: 'Amazing score! Keep it up! 🏌️‍♂️',
        timestamp: '1 hour ago'
      }
    ]
  }
];

export async function getPosts(filter: string = 'latest'): Promise<Post[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  let filteredPosts = [...MOCK_POSTS];
  
  switch (filter) {
    case 'popular':
      filteredPosts.sort((a, b) => b.likes - a.likes);
      break;
    case 'latest':
    default:
      // Latest posts are already in correct order
      break;
  }
  
  return filteredPosts;
}

export async function createPost(
  content: string,
  imageUrl?: string,
  location?: string
): Promise<Post> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const newPost: Post = {
    id: uuidv4(),
    author: {
      id: 'current-user',
      name: 'Current User',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100',
    },
    content,
    imageUrl,
    location,
    timestamp: 'Just now',
    likes: 0,
    comments: 0,
    commentList: []
  };
  
  MOCK_POSTS = [newPost, ...MOCK_POSTS];
  return newPost;
}

export async function likePost(postId: string): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  MOCK_POSTS = MOCK_POSTS.map(post => 
    post.id === postId 
      ? { ...post, likes: post.likes + 1 }
      : post
  );
}

export async function addComment(postId: string, content: string): Promise<Comment> {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const newComment: Comment = {
    id: uuidv4(),
    authorId: 'current-user',
    authorName: 'Current User',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=50&h=50',
    content,
    timestamp: 'Just now'
  };

  const postIndex = MOCK_POSTS.findIndex(p => p.id === postId);
  if (postIndex === -1) {
    throw new Error('Post not found');
  }

  MOCK_POSTS = MOCK_POSTS.map((post, index) => {
    if (index === postIndex) {
      return {
        ...post,
        comments: post.comments + 1,
        commentList: [...post.commentList, newComment]
      };
    }
    return post;
  });

  return newComment;
}
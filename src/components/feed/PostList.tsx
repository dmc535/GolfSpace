import React from 'react';
import { FeedPost } from './FeedPost';
import type { Post } from '../../types';

interface PostListProps {
  posts: Post[];
  loading: boolean;
  onLike: (postId: string) => void;
  onAddComment: (postId: string, content: string) => Promise<void>;
}

export function PostList({ posts, loading, onLike, onAddComment }: PostListProps) {
  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600" />
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No posts to display
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <FeedPost
          key={post.id}
          post={post}
          onLike={onLike}
          onAddComment={onAddComment}
        />
      ))}
    </div>
  );
}
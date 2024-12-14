import React, { useState } from 'react';
import type { Comment } from '../../types';

interface PostCommentsProps {
  postId: string;
  comments: Comment[];
  onAddComment: (postId: string, content: string) => Promise<void>;
}

export function PostComments({ postId, comments, onAddComment }: PostCommentsProps) {
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onAddComment(postId, newComment.trim());
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-4 pt-4 border-t">
      <div className="space-y-4 mb-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <img
              src={comment.authorAvatar}
              alt={comment.authorName}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="font-medium text-sm">{comment.authorName}</p>
                <p className="text-gray-700">{comment.content}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">{comment.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={!newComment.trim() || isSubmitting}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubmitting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </form>
    </div>
  );
}
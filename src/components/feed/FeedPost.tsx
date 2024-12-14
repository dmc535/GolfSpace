import React, { useState } from 'react';
import { ThumbsUp, MessageCircle, Share2, Flag } from 'lucide-react';
import type { Post } from '../../types';
import { PostComments } from './PostComments';
import { ShareModal } from './ShareModal';

interface FeedPostProps {
  post: Post;
  onLike: (postId: string) => void;
  onAddComment: (postId: string, content: string) => Promise<void>;
}

export function FeedPost({ post, onLike, onAddComment }: FeedPostProps) {
  const [showComments, setShowComments] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleLike = () => {
    onLike(post.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt=""
          className="w-full h-64 object-cover"
        />
      )}
      
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img
            src={post.author.avatarUrl}
            alt={post.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        
        <p className="text-gray-800 mb-4">{post.content}</p>
        
        {post.location && (
          <p className="text-sm text-gray-500 mb-4">
            📍 {post.location}
          </p>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t">
          <button 
            onClick={handleLike}
            className="flex items-center text-gray-500 hover:text-green-600 transition"
          >
            <ThumbsUp className="w-5 h-5 mr-1" />
            {post.likes}
          </button>
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center text-gray-500 hover:text-green-600 transition"
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            {post.comments}
          </button>
          <button 
            onClick={() => setShowShareModal(true)}
            className="flex items-center text-gray-500 hover:text-green-600 transition"
          >
            <Share2 className="w-5 h-5 mr-1" />
            Share
          </button>
          <button className="flex items-center text-gray-500 hover:text-green-600 transition">
            <Flag className="w-5 h-5" />
          </button>
        </div>

        {showComments && (
          <PostComments
            postId={post.id}
            comments={post.commentList}
            onAddComment={onAddComment}
          />
        )}
      </div>

      {showShareModal && (
        <ShareModal
          postId={post.id}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
}
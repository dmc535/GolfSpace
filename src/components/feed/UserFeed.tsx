import React from 'react';
import { CreatePost } from './CreatePost';
import { FeedFilters } from './FeedFilters';
import { PostList } from './PostList';
import { TrendingTopics } from './TrendingTopics';
import { useFeed } from '../../hooks/useFeed';

export function UserFeed() {
  const {
    posts,
    loading,
    filter,
    setFilter,
    addPost,
    handleLike,
    handleAddComment
  } = useFeed();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-8">
          <CreatePost onPostCreate={addPost} />
          <FeedFilters activeFilter={filter} onFilterChange={setFilter} />
          <PostList
            posts={posts}
            loading={loading}
            onLike={handleLike}
            onAddComment={handleAddComment}
          />
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-4">
          <TrendingTopics />
        </div>
      </div>
    </div>
  );
}
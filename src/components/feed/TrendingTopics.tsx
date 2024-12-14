import React from 'react';
import { TrendingUp } from 'lucide-react';

const trendingTopics = [
  { tag: '#MastersTournament', posts: 1234 },
  { tag: '#HoleInOne', posts: 856 },
  { tag: '#GolfTips', posts: 743 },
  { tag: '#WeekendGolf', posts: 652 },
  { tag: '#GolfLife', posts: 531 },
];

export function TrendingTopics() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
        <h2 className="text-lg font-semibold">Trending Topics</h2>
      </div>
      
      <div className="space-y-3">
        {trendingTopics.map((topic) => (
          <div
            key={topic.tag}
            className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer"
          >
            <span className="text-green-600 font-medium">{topic.tag}</span>
            <span className="text-sm text-gray-500">{topic.posts} posts</span>
          </div>
        ))}
      </div>
    </div>
  );
}
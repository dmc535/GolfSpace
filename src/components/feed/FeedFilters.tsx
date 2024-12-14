import React from 'react';
import { Trophy, Clock, Star, ThumbsUp } from 'lucide-react';

const filters = [
  { name: 'Latest', icon: Clock },
  { name: 'Popular', icon: ThumbsUp },
  { name: 'Achievements', icon: Trophy },
  { name: 'Reviews', icon: Star },
];

interface FeedFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FeedFilters({ activeFilter, onFilterChange }: FeedFiltersProps) {
  return (
    <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
      {filters.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => onFilterChange(name.toLowerCase())}
          className={`flex items-center px-4 py-2 rounded-full ${
            activeFilter === name.toLowerCase()
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Icon className="w-4 h-4 mr-2" />
          {name}
        </button>
      ))}
    </div>
  );
}
import React from 'react';
import { Users } from 'lucide-react';
import type { GolferProfile } from '../../types';

interface TopFriendsProps {
  friends: GolferProfile[];
}

export function TopFriends({ friends }: TopFriendsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mb-2 flex items-center">
        <Users className="w-5 h-5 mr-2" />
        Top Golf Buddies
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {friends?.slice(0, 6).map((friend) => (
          <div key={friend.id} className="text-center">
            <img
              src={friend.avatarUrl}
              alt={friend.name}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <p className="mt-2 text-sm font-medium">{friend.name}</p>
            <p className="text-xs text-gray-600">HC: {friend.handicap}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
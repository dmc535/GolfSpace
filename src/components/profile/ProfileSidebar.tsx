import React from 'react';
import { MapPin, Music } from 'lucide-react';
import type { GolferProfile } from '../../types';

interface ProfileSidebarProps {
  profile: GolferProfile;
}

export function ProfileSidebar({ profile }: ProfileSidebarProps) {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-4">
        <img
          src={profile.avatarUrl || 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?fit=crop&w=300&h=300'}
          alt={profile.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-gray-600">Handicap: {profile.handicap}</p>
          <p className="flex items-center text-gray-600 mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            {profile.homeClub}
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-4 flex items-center space-x-2">
        <Music className="w-5 h-5 text-green-600" />
        <span className="text-sm">Now Playing: Golf Vibes</span>
      </div>
    </div>
  );
}
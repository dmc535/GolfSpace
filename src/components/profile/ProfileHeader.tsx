import React from 'react';
import { Edit } from 'lucide-react';
import type { GolferProfile } from '../../types';

interface ProfileHeaderProps {
  profile: GolferProfile;
  onEdit: () => void;
}

const getThemeGradient = (theme: string) => {
  switch (theme) {
    case 'ocean':
      return 'from-blue-600 to-blue-400';
    case 'sunset':
      return 'from-orange-500 to-pink-500';
    case 'forest':
      return 'from-emerald-600 to-teal-400';
    default:
      return 'from-green-600 to-green-400';
  }
};

export function ProfileHeader({ profile, onEdit }: ProfileHeaderProps) {
  const themeGradient = getThemeGradient(profile.backgroundTheme);

  return (
    <div className={`relative h-48 bg-gradient-to-r ${themeGradient}`}>
      <button
        onClick={onEdit}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
      >
        <Edit className="w-4 h-4" />
        <span>Edit Profile</span>
      </button>
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <h1 className="text-3xl font-bold">{profile.name}'s GolfSpace</h1>
        <p className="text-sm">"{profile.status}"</p>
      </div>
    </div>
  );
}
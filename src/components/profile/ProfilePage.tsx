import React, { useState } from 'react';
import { ProfileLayout } from './ProfileLayout';
import { ProfileEditor } from './ProfileEditor';
import { InteractiveScorecard } from '../scorecard/InteractiveScorecard';
import type { GolferProfile } from '../../types';

const MOCK_PROFILE: GolferProfile = {
  id: '1',
  name: 'John Doe',
  handicap: 12,
  homeClub: 'Pine Valley Golf Club',
  bio: 'Passionate golfer always looking to improve my game. Love meeting new golf buddies!',
  avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200',
  status: 'Just shot my best round ever!',
  backgroundTheme: 'classic',
  topFriends: [],
  favoriteClubs: ['Pine Valley', 'Augusta National'],
  recentRounds: [
    {
      id: '1',
      date: '2024-03-15',
      course: 'Pine Valley Golf Club',
      score: 82,
      highlights: 'Eagle on hole 7!'
    }
  ]
};

export function ProfilePage() {
  const [profile, setProfile] = useState(MOCK_PROFILE);
  const [isEditing, setIsEditing] = useState(false);
  const [showScorecard, setShowScorecard] = useState(false);

  const handleSave = (updatedProfile: Partial<GolferProfile>) => {
    setProfile({ ...profile, ...updatedProfile });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ProfileEditor
          profile={profile}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    );
  }

  return (
    <div>
      <ProfileLayout profile={profile} onEdit={() => setIsEditing(true)} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => setShowScorecard(!showScorecard)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          {showScorecard ? 'Hide Scorecard' : 'Add New Round'}
        </button>
        
        {showScorecard && <InteractiveScorecard />}
      </div>
    </div>
  );
}
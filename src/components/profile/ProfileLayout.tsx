import React from 'react';
import type { GolferProfile } from '../../types';
import { Music, MapPin, Users, Mail, Settings } from 'lucide-react';

interface ProfileLayoutProps {
  profile: GolferProfile;
  onEdit: () => void;
}

export function ProfileLayout({ profile, onEdit }: ProfileLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Profile Header */}
        <div className="h-48 bg-gradient-to-r from-green-600 to-green-400 relative">
          <div className="absolute inset-0 bg-black/30">
            <div className="h-full flex items-end p-6">
              <div className="flex items-end space-x-6">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-32 h-32 rounded-lg border-4 border-white shadow-xl"
                />
                <div className="mb-2 text-white">
                  <h1 className="text-3xl font-bold">{profile.name}</h1>
                  <p className="text-green-100">"{profile.status}"</p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onEdit}
            className="absolute top-4 right-4 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
          >
            <Settings className="w-4 h-4 inline-block mr-2" />
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-12 gap-6 p-6">
          {/* Left Sidebar - "About Me" Section */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div className="bg-green-50 rounded-lg p-4 border border-green-100">
              <h2 className="text-xl font-bold text-green-800 mb-4">About {profile.name}</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>{profile.homeClub}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-green-600" />
                  <span>Handicap: {profile.handicap}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  <a href="#" className="text-blue-600 hover:underline">
                    Send Message
                  </a>
                </div>
              </div>
            </div>

            {/* Music Player */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <Music className="w-5 h-5" />
                <h3 className="font-bold">My Golf Playlist</h3>
              </div>
              <div className="bg-white/10 rounded p-3">
                <p className="text-sm truncate">
                  {profile.musicUrl || "No song selected"}
                </p>
              </div>
            </div>

            {/* Interests Section */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-bold mb-3">Interests</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Favorite Courses:</p>
                <ul className="list-disc list-inside pl-2">
                  {profile.favoriteClubs.map((club) => (
                    <li key={club}>{club}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 md:col-span-8 space-y-6">
            {/* Bio Box */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Bio</h2>
              <div className="prose max-w-none">
                <p>{profile.bio}</p>
              </div>
            </div>

            {/* Recent Rounds */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Recent Rounds</h2>
              <div className="space-y-4">
                {profile.recentRounds.map((round) => (
                  <div
                    key={round.id}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h3 className="font-medium">{round.course}</h3>
                      <p className="text-sm text-gray-500">{round.date}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-600">
                        {round.score}
                      </span>
                      {round.highlights && (
                        <p className="text-sm text-gray-500">{round.highlights}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Comments</h2>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=50&h=50"
                    alt="Comment author"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      placeholder="Leave a comment..."
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      rows={3}
                    />
                    <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Music, Play, SkipForward, SkipBack, Pause } from 'lucide-react';

interface MusicPlayerProps {
  currentSong: string;
}

export function MusicPlayer({ currentSong }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-white">
      <div className="flex items-center space-x-2 mb-3">
        <Music className="w-5 h-5" />
        <h3 className="font-bold">My Golf Playlist</h3>
      </div>
      
      <div className="bg-white/10 rounded p-3 mb-3">
        <p className="text-sm truncate">{currentSong}</p>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button className="hover:text-blue-200 transition">
          <SkipBack className="w-6 h-6" />
        </button>
        <button 
          className="hover:text-blue-200 transition"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>
        <button className="hover:text-blue-200 transition">
          <SkipForward className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
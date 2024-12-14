import React from 'react';
import { Share2 } from 'lucide-react';

interface QRBusinessCardProps {
  profileId: string;
  name: string;
  handicap: number;
  homeClub: string;
}

export function QRBusinessCard({ profileId, name, handicap, homeClub }: QRBusinessCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-1">Handicap: {handicap}</p>
        <p className="text-gray-600">{homeClub}</p>
      </div>
      
      <div className="mt-4 border-2 border-gray-200 rounded-lg p-4">
        {/* QR Code placeholder - would be generated based on profile data */}
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">QR Code</span>
        </div>
      </div>
      
      <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition">
        <Share2 className="w-5 h-5" />
        <span>Share Business Card</span>
      </button>
    </div>
  );
}
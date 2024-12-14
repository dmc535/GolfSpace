import React from 'react';
import { Trophy } from 'lucide-react';

export function Achievements() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mb-2 flex items-center">
        <Trophy className="w-5 h-5 mr-2" />
        Achievements
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-medium">Best Round</p>
          <p className="text-green-600">72 at St. Andrews</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="font-medium">Holes in One</p>
          <p className="text-green-600">2</p>
        </div>
      </div>
    </div>
  );
}
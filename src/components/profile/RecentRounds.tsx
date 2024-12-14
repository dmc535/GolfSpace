import React from 'react';
import { Flag } from 'lucide-react';
import type { Round } from '../../types';

interface RecentRoundsProps {
  rounds: Round[];
}

export function RecentRounds({ rounds }: RecentRoundsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Flag className="w-5 h-5 mr-2 text-green-600" />
        Recent Rounds
      </h3>
      <div className="space-y-3">
        {rounds?.map((round) => (
          <div 
            key={round.id} 
            className="border-b border-gray-100 pb-3 hover:bg-gray-50 transition-colors rounded-lg p-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium text-gray-900">{round.course}</span>
                <p className="text-sm text-gray-500">{round.date}</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-green-600">{round.score}</span>
                {round.highlights && (
                  <p className="text-xs text-gray-500 italic mt-1">{round.highlights}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-2 px-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
        View All Rounds
      </button>
    </div>
  );
}
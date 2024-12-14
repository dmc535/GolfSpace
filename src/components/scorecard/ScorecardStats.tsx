import React from 'react';
import { Target, Circle, CircleDot } from 'lucide-react';
import type { ScorecardStats } from './types';

interface ScorecardStatsProps {
  stats: ScorecardStats;
}

export function ScorecardStats({ stats }: ScorecardStatsProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Total Score</span>
          <CircleDot className="w-5 h-5 text-green-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900 mt-2">{stats.totalScore}</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Putts</span>
          <Circle className="w-5 h-5 text-green-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900 mt-2">{stats.totalPutts}</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Fairways</span>
          <Target className="w-5 h-5 text-green-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900 mt-2">{stats.fairwaysHit}/14</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">GIR</span>
          <Target className="w-5 h-5 text-green-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900 mt-2">{stats.greensInRegulation}/18</p>
      </div>
    </div>
  );
}
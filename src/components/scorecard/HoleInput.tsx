import React from 'react';
import type { HoleScore } from './types';

interface HoleInputProps {
  hole: HoleScore;
  onChange: (updatedHole: HoleScore) => void;
}

export function HoleInput({ hole, onChange }: HoleInputProps) {
  const handleScoreChange = (value: number) => {
    onChange({ ...hole, score: value });
  };

  const handlePuttsChange = (value: number) => {
    onChange({ ...hole, putts: value });
  };

  const toggleFairway = () => {
    onChange({ ...hole, fairwayHit: !hole.fairwayHit });
  };

  const toggleGIR = () => {
    onChange({ ...hole, greenInRegulation: !hole.greenInRegulation });
  };

  return (
    <div className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg">
      <div className="w-8 text-center font-medium text-gray-700">
        {hole.number}
      </div>
      <div className="w-8 text-center text-sm text-gray-500">
        Par {hole.par}
      </div>
      <input
        type="number"
        value={hole.score || ''}
        onChange={(e) => handleScoreChange(parseInt(e.target.value) || 0)}
        className="w-16 px-2 py-1 border rounded text-center"
        min="1"
        max="15"
      />
      <input
        type="number"
        value={hole.putts || ''}
        onChange={(e) => handlePuttsChange(parseInt(e.target.value) || 0)}
        className="w-16 px-2 py-1 border rounded text-center"
        min="0"
        max="5"
        placeholder="Putts"
      />
      <button
        onClick={toggleFairway}
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          hole.fairwayHit ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
        }`}
      >
        F
      </button>
      <button
        onClick={toggleGIR}
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          hole.greenInRegulation ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
        }`}
      >
        G
      </button>
    </div>
  );
}
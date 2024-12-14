import React, { useState } from 'react';
import { Save } from 'lucide-react';
import type { Scorecard, HoleScore } from './types';
import { ScorecardHeader } from './ScorecardHeader';
import { ScorecardStats } from './ScorecardStats';
import { HoleInput } from './HoleInput';

const DEFAULT_HOLES: HoleScore[] = Array.from({ length: 18 }, (_, i) => ({
  number: i + 1,
  par: 4,
  score: 0,
  putts: 0,
  fairwayHit: false,
  greenInRegulation: false,
}));

export function InteractiveScorecard() {
  const [scorecard, setScorecard] = useState<Scorecard>({
    id: Date.now().toString(),
    date: new Date().toISOString(),
    courseName: 'Pine Valley Golf Club',
    scores: DEFAULT_HOLES,
    totalScore: 0,
    totalPutts: 0,
    fairwaysHit: 0,
    greensInRegulation: 0,
  });

  const handleHoleChange = (index: number, updatedHole: HoleScore) => {
    const newScores = [...scorecard.scores];
    newScores[index] = updatedHole;

    const stats = calculateStats(newScores);
    setScorecard({
      ...scorecard,
      scores: newScores,
      ...stats,
    });
  };

  const calculateStats = (scores: HoleScore[]) => {
    return {
      totalScore: scores.reduce((sum, hole) => sum + (hole.score || 0), 0),
      totalPutts: scores.reduce((sum, hole) => sum + (hole.putts || 0), 0),
      fairwaysHit: scores.filter(hole => hole.fairwayHit).length,
      greensInRegulation: scores.filter(hole => hole.greenInRegulation).length,
    };
  };

  const handleSave = () => {
    // In a real app, this would save to a backend
    console.log('Saving scorecard:', scorecard);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <ScorecardHeader date={scorecard.date} courseName={scorecard.courseName} />
      
      <ScorecardStats stats={scorecard} />
      
      <div className="space-y-1">
        {scorecard.scores.map((hole, index) => (
          <HoleInput
            key={hole.number}
            hole={hole}
            onChange={(updatedHole) => handleHoleChange(index, updatedHole)}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Round
        </button>
      </div>
    </div>
  );
}
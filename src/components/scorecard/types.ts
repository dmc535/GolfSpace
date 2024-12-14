import { Round } from '../../types';

export interface HoleScore {
  number: number;
  par: number;
  score: number;
  putts: number;
  fairwayHit: boolean;
  greenInRegulation: boolean;
}

export interface Scorecard {
  id: string;
  date: string;
  courseName: string;
  scores: HoleScore[];
  totalScore: number;
  totalPutts: number;
  fairwaysHit: number;
  greensInRegulation: number;
}

export interface ScorecardStats {
  totalScore: number;
  totalPutts: number;
  fairwaysHit: number;
  greensInRegulation: number;
}
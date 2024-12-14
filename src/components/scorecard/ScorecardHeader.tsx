import React from 'react';
import { Calendar, Flag } from 'lucide-react';

interface ScorecardHeaderProps {
  date: string;
  courseName: string;
}

export function ScorecardHeader({ date, courseName }: ScorecardHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4 p-4 bg-green-50 rounded-lg">
      <div className="flex items-center space-x-2">
        <Flag className="w-5 h-5 text-green-600" />
        <h3 className="text-lg font-semibold text-gray-900">{courseName}</h3>
      </div>
      <div className="flex items-center text-gray-600">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}
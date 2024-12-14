import React from 'react';

interface AboutMeProps {
  bio: string;
}

export function AboutMe({ bio }: AboutMeProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-bold mb-2">About Me</h3>
      <p>{bio}</p>
    </div>
  );
}
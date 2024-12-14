import React from 'react';
import { Paintbrush } from 'lucide-react';

interface Theme {
  id: string;
  name: string;
  preview: string;
}

const AVAILABLE_THEMES: Theme[] = [
  { id: 'classic', name: 'Classic Green', preview: 'from-green-600 to-green-400' },
  { id: 'ocean', name: 'Ocean Blue', preview: 'from-blue-600 to-blue-400' },
  { id: 'sunset', name: 'Sunset', preview: 'from-orange-500 to-pink-500' },
  { id: 'forest', name: 'Forest', preview: 'from-emerald-600 to-teal-400' },
];

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (themeId: string) => void;
}

export function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Paintbrush className="w-5 h-5 text-gray-600" />
        <h3 className="font-medium text-gray-900">Profile Theme</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {AVAILABLE_THEMES.map((theme) => (
          <button
            key={theme.id}
            onClick={() => onThemeChange(theme.id)}
            className={`p-3 rounded-lg border-2 transition-all ${
              currentTheme === theme.id
                ? 'border-green-500 ring-2 ring-green-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`h-8 rounded bg-gradient-to-r ${theme.preview} mb-2`} />
            <p className="text-sm font-medium text-gray-700">{theme.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
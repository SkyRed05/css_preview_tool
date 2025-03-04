import React from 'react';
import { Theme } from '../types';
import { Palette } from 'lucide-react';

interface ThemeSelectorProps {
  themes: Theme[];
  currentTheme: string;
  onSelectTheme: (themeId: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  themes,
  currentTheme,
  onSelectTheme,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Palette size={18} className="text-gray-500 dark:text-gray-400" />
      <select
        value={currentTheme}
        onChange={(e) => onSelectTheme(e.target.value)}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;
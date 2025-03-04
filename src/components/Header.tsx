import React from 'react';
import { Sun, Moon, Code } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import TemplateSelector from './TemplateSelector';
import { Theme, HtmlTemplate } from '../types';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  themes: Theme[];
  currentTheme: string;
  onSelectTheme: (themeId: string) => void;
  templates: HtmlTemplate[];
  currentTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  toggleDarkMode,
  themes,
  currentTheme,
  onSelectTheme,
  templates,
  currentTemplate,
  onSelectTemplate,
}) => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Code size={24} className="text-blue-500" />
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">CSS Preview</h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <ThemeSelector 
          themes={themes} 
          currentTheme={currentTheme} 
          onSelectTheme={onSelectTheme} 
        />
        
        <TemplateSelector 
          templates={templates} 
          currentTemplate={currentTemplate} 
          onSelectTemplate={onSelectTemplate} 
        />
        
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-gray-500" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import CodeEditor from './components/CodeEditor';
import Preview from './components/Preview';
import Header from './components/Header';
import { themes } from './data/themes';
import { templates } from './data/templates';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  
  const [currentThemeId, setCurrentThemeId] = useState('default');
  const [currentTemplateId, setCurrentTemplateId] = useState('basic');
  const [cssCode, setCssCode] = useState(themes.find(t => t.id === 'default')?.css || '');
  
  const currentTemplate = templates.find(t => t.id === currentTemplateId) || templates[0];
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const handleThemeChange = (themeId: string) => {
    setCurrentThemeId(themeId);
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCssCode(theme.css);
    }
  };
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      <Header 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        themes={themes}
        currentTheme={currentThemeId}
        onSelectTheme={handleThemeChange}
        templates={templates}
        currentTemplate={currentTemplateId}
        onSelectTemplate={setCurrentTemplateId}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">CSS Editor</h2>
          </div>
          <div className="flex-1 overflow-auto bg-white dark:bg-gray-800 transition-colors duration-300">
            <CodeEditor code={cssCode} onChange={setCssCode} />
          </div>
        </div>
        
        <div className="w-1/2 flex flex-col">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">Preview</h2>
          </div>
          <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Preview 
              html={currentTemplate.html} 
              css={cssCode} 
              isDarkMode={isDarkMode} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
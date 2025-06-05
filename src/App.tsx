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
  const [htmlCode, setHtmlCode] = useState(templates.find(t => t.id === 'basic')?.html || '');
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  
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

  const handleTemplateChange = (templateId: string) => {
    setCurrentTemplateId(templateId);
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setHtmlCode(template.html);
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
        onSelectTemplate={handleTemplateChange}
      />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex">
              <button
                onClick={() => setActiveTab('html')}
                className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'html'
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                HTML Editor
              </button>
              <button
                onClick={() => setActiveTab('css')}
                className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'css'
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
              >
                CSS Editor
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto bg-white dark:bg-gray-800 transition-colors duration-300">
            {activeTab === 'html' ? (
              <CodeEditor 
                code={htmlCode} 
                onChange={setHtmlCode} 
                language="html"
              />
            ) : (
              <CodeEditor 
                code={cssCode} 
                onChange={setCssCode}
                language="css" 
              />
            )}
          </div>
        </div>
        
        <div className="w-1/2 flex flex-col">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">Preview</h2>
          </div>
          <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Preview 
              html={htmlCode} 
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
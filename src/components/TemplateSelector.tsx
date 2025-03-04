import React from 'react';
import { HtmlTemplate } from '../types';
import { Layout } from 'lucide-react';

interface TemplateSelectorProps {
  templates: HtmlTemplate[];
  currentTemplate: string;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  currentTemplate,
  onSelectTemplate,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Layout size={18} className="text-gray-500 dark:text-gray-400" />
      <select
        value={currentTemplate}
        onChange={(e) => onSelectTemplate(e.target.value)}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
      >
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TemplateSelector;
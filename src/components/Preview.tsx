import React, { useRef, useEffect } from 'react';

interface PreviewProps {
  html: string;
  css: string;
  isDarkMode: boolean;
}

const Preview: React.FC<PreviewProps> = ({ html, css, isDarkMode }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  margin: 0;
                  padding: 20px;
                  transition: background-color 0.3s, color 0.3s;
                  background-color: ${isDarkMode ? '#1a1a1a' : '#ffffff'};
                  color: ${isDarkMode ? '#f0f0f0' : '#333333'};
                }
                ${css}
              </style>
            </head>
            <body>
              ${html}
            </body>
          </html>
        `);
        iframeDoc.close();
      }
    }
  }, [html, css, isDarkMode]);

  return (
    <iframe
      ref={iframeRef}
      title="CSS Preview"
      className="w-full h-full border-0 bg-white dark:bg-gray-900"
      sandbox="allow-same-origin"
    />
  );
};

export default Preview;
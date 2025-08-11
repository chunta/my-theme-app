'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export const ThemeChanger = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading theme...</div>;
  }

  return (
    <div className="theme-changer">
      <p>The current theme is: {resolvedTheme || 'loading...'}</p>
      <div className="button-group">
        <button
          onClick={() => setTheme('light')}
          className="theme-button light-button"
        >
          Light Mode
        </button>
        <button
          onClick={() => setTheme('dark')}
          className="theme-button dark-button"
        >
          Dark Mode
        </button>
      </div>

      <style jsx>{`
        .theme-changer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
        }

        .button-group {
          display: flex;
          gap: 1rem;
        }

        .theme-button {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .light-button {
          background-color: ${resolvedTheme === 'dark' ? '#ffffff' : '#f0f0f0'};
          color: ${resolvedTheme === 'dark' ? '#000000' : '#333333'};
        }

        .light-button:hover {
          background-color: ${resolvedTheme === 'dark' ? '#e0e0e0' : '#e0e0e0'};
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .dark-button {
          background-color: ${resolvedTheme === 'dark' ? '#333333' : '#4a4a4a'};
          color: #ffffff;
        }

        .dark-button:hover {
          background-color: ${resolvedTheme === 'dark' ? '#4a4a4a' : '#5a5a5a'};
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 600px) {
          .theme-button {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};
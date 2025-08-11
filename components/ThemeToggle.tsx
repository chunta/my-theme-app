'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
       <h1 className="text-4xl font-bold mb-26 dark:bg-purple-600">
        Next.js App Router Theme Toggle2
      </h1>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
    </button>
    </div>

  );
}
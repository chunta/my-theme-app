'use client';

import {ThemeChanger} from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main>
      <div className="text-primary" suppressHydrationWarning>
        Next.js App Router Theme Toggle2222
      </div>
      <ThemeChanger />
    </main>
  )
}

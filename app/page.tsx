import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center
                     bg-white text-gray-900
                     dark:bg-purple-700 dark:text-gray-100
                     transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-6">
        Next.js App Router Theme Toggle2
      </h1>

      <ThemeToggle />
    </main>
  )
}

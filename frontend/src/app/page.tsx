import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center text-center">
        <h1 className="text-3xl font-bold">👋 Welcome to UserModule</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A simple user management system with signup, login and profile info.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/signup">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Log In
            </button>
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-400">
        <span>Built by Kushal Desai</span>
      </footer>
    </div>
  );
}

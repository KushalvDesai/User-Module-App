'use client';

import { useRouter } from 'next/navigation';

export default function PageHeader() {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  };

  return (
    <header className="w-full bg-gray-800 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <button
        onClick={goHome}
        className="text-xl font-semibold hover:underline"
      >
        🏠 UserModule
      </button>
    </header>
  );
}

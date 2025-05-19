'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-6 w-full bg-red-600 hover:bg-red-700 transition text-white py-2 px-4 rounded"
    >
      Log Out
    </button>
  );
}

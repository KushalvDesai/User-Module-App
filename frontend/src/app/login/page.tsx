'use client';

import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PageHeader from '@/components/PageHeader';

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginUserInput!) {
    login(input: $input)
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  const [showPassword, setShowPassword] = useState(false); // 👈 state for password visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { input: form } });
      localStorage.setItem('token', data.login);
      router.push('/profile');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader />
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'} // 👈 dynamic type
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="p-2 border rounded w-full pr-16" // extra padding for button
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-400">
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          {error && <p className="text-red-500 text-sm">Error: {error.message}</p>}
        </form>
      </div>
    </div>
  );
}

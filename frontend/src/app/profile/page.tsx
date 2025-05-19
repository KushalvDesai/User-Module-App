'use client';

//import PageHeader from '@/components/PageHeader';
import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProfileCard from '@/components/ProfileCard';
import LogoutButton from '@/components/LogoutButton';

const GET_USER = gql`
  query GetUser {
    getUser {
      _id
      name
      email
    }
  }
`;

export default function ProfilePage() {
  const router = useRouter();
  const [tokenReady, setTokenReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      setTokenReady(true);
    }
  }, [router]);

  const { data, loading, error } = useQuery(GET_USER, {
    skip: !tokenReady,
  });

  if (!tokenReady) return null;
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error.message}</p>;
  if (!data?.getUser) return <p>User data not available.</p>;

  const user = data.getUser;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* <PageHeader />  */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <ProfileCard name={user.name} email={user.email} userId={user._id}>
          <LogoutButton />
        </ProfileCard>
      </div>
    </div>
  );
}

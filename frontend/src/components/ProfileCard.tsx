'use client';

type ProfileCardProps = {
  name: string;
  email: string;
  userId: string;
  children?: React.ReactNode;
};

export default function ProfileCard({ name, email, userId, children }: ProfileCardProps) {
  return (
    <div className="w-full max-w-md bg-gray-900 text-white rounded-lg p-6 shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <span>👤</span> Profile
      </h1>
      <div className="space-y-3 text-base leading-relaxed">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>User ID:</strong> {userId}</p>
      </div>
      {children}
    </div>
  );
}

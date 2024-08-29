'use client';
import { BrandIcon } from '@parkease/ui/src/components/atoms/BrandIcon';
import { Button } from '@parkease/ui/src/components/atoms/Button';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: sessionData, status } = useSession();
  return (
    <main className="text-primary-300 h-2 w-3">
      {sessionData?.user?.uid ? (
        <Button onClick={() => signOut()}>SignOut</Button>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
      <BrandIcon />
    </main>
  );
}

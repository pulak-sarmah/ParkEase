'use client';
import { BrandIcon } from '@parkease/ui/src/components/atoms/BrandIcon';
import { Button } from '@parkease/ui/src/components/atoms/Button';
import { signOut, useSession } from 'next-auth/react';

import { Sidebar } from '@parkease/ui/src/components/organisms/Sidebar';

export default function Home() {
  return (
    <main className="text-primary-300 h-2 w-3">
      <div className="p-12">
        <Sidebar open={false} setOpen={() => {}}>
          Children...
        </Sidebar>
      </div>
    </main>
  );
}

'use client';

import { Suspense } from 'react';
import LocationRedirect from '@/components/LocationRedirect';

export default function LayoutClient({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <LocationRedirect>
        {children}
      </LocationRedirect>
    </Suspense>
  );
}
import { SignUp } from '@clerk/nextjs';
import React from 'react';

export default function Page() {
  return (
    <div className="flex h-screen justify-center items-center">
      <SignUp />
    </div>
  );
}

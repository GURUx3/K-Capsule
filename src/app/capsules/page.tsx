import AppLayout from "@/layout/AppLayout";
import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <div>
      <SignedIn>
        <AppLayout>
          <h1 className="text-2xl font-bold">Capsules 💊</h1>
          <p>Welcome to your Capsule Page K-Capsule</p>
        </AppLayout>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default page;

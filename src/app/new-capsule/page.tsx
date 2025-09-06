import AppLayout from "@/layout/AppLayout";
import React from "react";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <div>
      <SignedIn>
        <AppLayout>
          <h1 className="text-2xl font-bold">New Capsule 📖</h1>
          <p>Welcome to your new Capsule Page K-Capsule</p>
        </AppLayout>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default page;

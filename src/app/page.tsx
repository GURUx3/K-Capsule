"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  // As soon as the user is signed in → push to /dashboard
  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      {/* <h1 className="text-6xl font-bold mb-6">Welcome to K Capsule</h1> */}

      <SignedOut>
        <SignInButton>
          <button className="px-6 py-2 w-[100px] bg-blue-600 text-white rounded  shadow-md hover:bg-green-700">
            Login
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="flex flex-col items-center gap-4">
          <h1>You are logged in 🎉 Redirecting...</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </main>
  );
}

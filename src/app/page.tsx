"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

// --- Components ---

/**
 * A reusable button with a consistent gradient style.
 */
const GradientButton = ({ children, ...props }) => (
  <button
    className="group relative inline-flex items-center justify-center cursor-pointer px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-out overflow-hidden"
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
  </button>
);

/**
 * The content to display when the user is signed out.
 */
const SignedOutContent = () => (
  <div className="text-center space-y-4">
    <p className="text-gray-500">Ready to get started?</p>
    <SignInButton mode="modal">
      <GradientButton>Get Started</GradientButton>
    </SignInButton>
  </div>
);

/**
 * The content to display when the user is signed in.
 */
const SignedInContent = () => (
  <div className="flex flex-col items-center gap-4">
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
      <p className="text-gray-700 mb-4 text-center">Welcome back!</p>
      <div className="flex items-center justify-center">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-12 h-12",
            },
          }}
        />
      </div>
    </div>
  </div>
);

// --- Main Page Component ---

export default function HomePage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  // Redirect only when the user status is loaded and they are signed in.
  // The 'isLoaded' check prevents the redirect from happening on the initial render
  // before Clerk has had a chance to determine the user's status.
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  // Show a loading spinner if the user's sign-in status isn't yet known.
  if (!isLoaded) {
    return (
      <main className="flex items-center justify-center h-screen bg-gray-50">
        <Loader2 className="h-10 w-10 animate-spin text-blue-500" />
      </main>
    );
  }

  return (
    <main className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-gray-800">
      {/* Background and Decorative Elements */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.5) 2px, transparent 2px),
            radial-gradient(circle at 75px 75px, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-indigo-200/30 rounded-full blur-lg" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12 p-4">
        {/* Welcome Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in-down">
            Welcome to K-Capsule
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed animate-fade-in-up">
            Your journey to productivity and organization starts here. Manage your tasks, goals, and ideas in one place.
          </p>
        </div>

        {/* Dynamic Authentication Section */}
        <div className="flex flex-col items-center space-y-6 animate-fade-in">
          <SignedOut>
            <SignedOutContent />
          </SignedOut>
          <SignedIn>
            <SignedInContent />
          </SignedIn>
        </div>
      </div>
    </main>
  );
}
// app/dashboard/page.tsx
import AppLayout from "@/layout/AppLayout";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="overflow-hidden">
      <SignedIn>
        <AppLayout>
          <h1 className="text-2xl font-bold">Dashboard 👤</h1>
          <p>Welcome to your K-Capsule dashboard!</p>
        </AppLayout>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}

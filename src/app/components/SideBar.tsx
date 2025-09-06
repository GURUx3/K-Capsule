// components/Sidebar.tsx
import Link from "next/link";
import { Home, User, PlusCircle } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-screen w-60 bg-white border-r border-gray-200 p-4 flex flex-col gap-4">
      <Link
        href="/dashboard"
        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <Home className="w-5 h-5 text-gray-600" />
        <span className="text-gray-700 font-medium">Dashboard</span>
      </Link>

      <Link
        href="/capsules"
        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <User className="w-5 h-5 text-gray-600" />
        <span className="text-gray-700 font-medium">My Capsules</span>
      </Link>

      <Link
        href="/new-capsule"
        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <PlusCircle className="w-5 h-5 text-gray-600" />
        <span className="text-gray-700 font-medium">New Capsule</span>
      </Link>
    </div>
  );
}

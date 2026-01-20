"use client";

import { useSession, signOut } from "next-auth/react";

export default function TopHeader() {
  const { data } = useSession();

  return (
    <header className="h-14.5 bg-white border-b flex items-center justify-between px-6">
      <input
        placeholder="Search"
        className="border rounded px-3 py-1 text-sm w-64"
      />

      <div className="flex items-center gap-3">
        <img
          src={data?.user?.image || ""}
          className="h-8 w-8 rounded-full"
        />
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="text-sm text-gray-500"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

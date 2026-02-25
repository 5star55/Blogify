"use client";

import { useEffect, useState } from "react";
import { Bell, UserCircle } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className="mx-10 mb-6 flex justify-between text-white">
      <Link href="/post">
        <h1 className="text-3xl font-bold">Explore</h1>
      </Link>

      <div className="flex gap-x-10">
        {isLoggedIn ? (
          <>
            <Link href="/create-blog" className="items-center rounded-lg bg-sky-800 px-3 py-0.5 text-2xl">
              +
            </Link>
            <div className="flex gap-10 pt-2">
              <Bell className="inline h-6 w-6" />
              <UserCircle className="inline h-6 w-6" />
            </div>
          </>
        ) : (
          <Link
            href="/Auth/user-auth?tab=Login"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900"
          >
            Log in
          </Link>
        )}
      </div>
    </header>
  );
}

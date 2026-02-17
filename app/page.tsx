"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/auth";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/Auth/sign-in");
    } else {
      router.push("/posts");
    }
  }, []);

  return <div>Loading...</div>;
};

export default Home;

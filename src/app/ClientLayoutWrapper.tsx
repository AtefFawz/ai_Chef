"use client";

import { useState, useEffect } from "react";
import Navbar from "./aiChef/components/ui/Navbar";
import Loading from "./loading";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSiteLoading, setIsSiteLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSiteLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isSiteLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

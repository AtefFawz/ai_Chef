"use client"; // ⬅️ الـ Client Component اهو

import { useState, useEffect } from "react";
import Navbar from "./aiChef/components/ui/Navbar";
import Loading from "./loading"; // (ملف الـ loading spinner بتاعك)

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. ⬇️ انقل منطق الـ loading هنا
  const [isSiteLoading, setIsSiteLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSiteLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // (متنساش الأقواس دي)

  // 2. ⬇️ اعرض الـ loading أو المحتوى
  if (isSiteLoading) {
    return <Loading />;
  }

  // 3. ⬇️ لو التحميل خلص، اعرض الموقع
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

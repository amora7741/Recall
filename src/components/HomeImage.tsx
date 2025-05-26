"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const HomeImage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && theme === "dark";

  if (!mounted) return null;

  return (
    <>
      <Image
        src="/aichat.webp"
        alt="AI Chat Demonstration Image"
        fill
        className={`object-cover object-top ${isDarkMode ? "hidden" : ""}`}
      />
      <Image
        src="/aichat-dark.webp"
        alt="AI Chat Demonstration Image"
        fill
        className={`object-cover object-top ${isDarkMode ? "" : "hidden"}`}
      />
    </>
  );
};

export default HomeImage;

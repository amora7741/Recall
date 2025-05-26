"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const HomeImage = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

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

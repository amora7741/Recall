import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recall",
  description: "Note-taking app with an integrated AI agent for quick recall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative grid min-h-dvh grid-rows-[auto_1fr]">
            <Navbar />
            <main>{children}</main>
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

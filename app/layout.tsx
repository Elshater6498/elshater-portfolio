import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohamed Elshater - Software Developer",
  description:
    "Front-end developer specializing in React, Next.js, and modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-2xl flex min-h-screen flex-col items-center">
            <div className="w-full">
              <div className="">
                <Navbar />
              </div>
            </div>
            <main className="flex-1 w-full">
              <div className="px-4 py-10">{children}</div>
            </main>
            <div className="w-full">
              <div className="">
                <Footer />
              </div>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

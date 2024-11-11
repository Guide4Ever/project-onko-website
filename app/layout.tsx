import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { PageFooter } from "./components/PageFooter/PageFooter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Projekt Onko",
  description: "Projekt DŠMS - Onko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} 
        ${geistMono.variable} 
        antialiased     
        text-black
        dark:bg-[#90908]
        dark:text-white
        h-full
        selection:bg-gray-50
        dark:selection:bg-gray-800`}
      > 
        <EdgeStoreProvider>
          <Provider>
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <PageFooter />
          </Provider>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
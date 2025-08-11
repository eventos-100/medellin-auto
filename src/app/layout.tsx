import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/devlink/global.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Med Auto - Premium Automotive Experience",
  description: "Discover premium vehicles with our advanced automotive platform",
  keywords: "automotive, cars, vehicles, premium, luxury",
  authors: [{ name: "Med Auto Team" }],
  openGraph: {
    title: "Med Auto - Premium Automotive Experience",
    description: "Discover premium vehicles with our advanced automotive platform",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ErrorBoundary>
          <DevLinkProvider>
            {/* Add here any Navbar or Header you want to be present on all pages */}
            {children}
            {/* Add here any Footer you want to be present on all pages */}
          </DevLinkProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}

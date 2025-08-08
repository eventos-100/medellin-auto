import type { Metadata } from "next";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";
import { MainFilterBlock1 } from "@/devlink/MainFilterBlock1";
import { Hero } from "@/devlink/Hero";
import { MainCardComponent } from "@/devlink/MainCardComponent";
import { Navbar } from "@/devlink/Navbar";
import { Footer2 } from "@/devlink/Footer2";
import "./globals.css";
import "@/devlink/global.css";

export const metadata: Metadata = {
  title: "Med Auto - Webflow Cloud",
  description: "Premium automotive marketplace powered by Webflow",
};

export default function Home() {
  return (
    <DevLinkProvider>
      <main className="min-h-screen">
        {/* Webflow Navbar Component */}
        <Navbar />
        
        {/* Hero Section - Use as-is from Webflow */}
        <Hero />
        
        {/* Main Filter Component */}
        <div className="container mx-auto px-4 py-8">
          <MainFilterBlock1 />
        </div>
        
        {/* Vehicle Cards Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MainCardComponent />
            <MainCardComponent />
            <MainCardComponent />
          </div>
        </div>
        
        {/* Footer */}
        <Footer2 />
      </main>
    </DevLinkProvider>
  );
}

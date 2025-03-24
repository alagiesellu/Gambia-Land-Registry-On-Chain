/**
 * Main Layout Component
 * Provides consistent structure for all pages with shared header, footer, and theme
 * Handles scroll restoration and page transitions
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      
      
      {/* Global UI components */}
      <TooltipProvider>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </div>
  );
};

export default Layout; 
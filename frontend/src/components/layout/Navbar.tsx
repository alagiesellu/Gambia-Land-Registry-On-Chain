/**
 * Main Navigation Component
 * Provides site-wide navigation, theme switching, and responsive menu
 * Includes smooth scroll behavior and active link highlighting
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User, Moon, Sun, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Handle scroll state for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Check if link is active
  const isActiveLink = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-background/90 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-primary font-bold text-xl group"
        >
          <span className="inline-block w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-110">
            <MapPin size={20} />
          </span>
          <span className="transition-colors group-hover:text-primary/80">
            GambiaLand
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { path: "/", label: "Home" },
            { path: "/search", label: "Search" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`relative py-2 text-foreground/80 hover:text-primary transition-colors ${
                isActiveLink(link.path) ? "text-primary font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          <Link
            to="/search"
            className="p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Search"
          >
            <Search size={18} />
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <User size={16} />
                <span>Account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/login" className="w-full cursor-pointer">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/register" className="w-full cursor-pointer">Register</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="w-full cursor-pointer">Dashboard</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="rounded-full"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 pt-20 pb-6">
          <nav className="flex flex-col gap-4">
            {[
              { path: "/", label: "Home" },
              { path: "/search", label: "Search" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
              { path: "/faq", label: "FAQ" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 text-lg font-medium border-b border-border ${
                  isActiveLink(link.path) ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/login" className="flex items-center gap-2">
                  <User size={18} />
                  Login
                </Link>
              </Button>
              
              <Button asChild className="w-full justify-start">
                <Link to="/register">Register</Link>
              </Button>
              
              <Button asChild variant="secondary" className="w-full justify-start mt-2">
                <Link to="/dashboard">My Dashboard</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data";
import Button from "./ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Trigger when the element crosses the middle 10% of the screen
      { rootMargin: "-45% 0px -45% 0px" } 
    );

    const sectionsToObserve = NAV_LINKS.map(link => link.href.replace("#", ""));
    sectionsToObserve.push("hero"); // Observe hero section to clear active state

    sectionsToObserve.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-accents-2 bg-background/80 backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight z-50 flex items-center gap-1" onClick={() => setIsMenuOpen(false)}>
          <span className="text-accents-5">&lt;</span>
          <motion.span 
            className="inline-block origin-bottom text-3xl"
            animate={{ 
              rotate: [0, -10, 10, -5, 5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 1,
              ease: "easeInOut" 
            }}
          >
            🧑‍💻
          </motion.span>
          <span className="text-accents-5">/&gt;</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-accents-5">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              className={`hover:text-foreground transition-colors ${activeSection === link.href.replace("#", "") ? "text-foreground" : ""}`}
              onClick={() => setActiveSection(link.href.replace("#", ""))}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button href="#contact" variant="primary">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="cursor-pointer" size={24} /> : <Menu className="cursor-pointer" size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 w-full bg-background border-b border-accents-2 shadow-2xl p-6 md:hidden flex flex-col gap-4"
            >
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  className={`text-lg font-medium py-2 border-b border-accents-2 hover:text-foreground ${activeSection === link.href.replace("#", "") ? "text-foreground" : "text-accents-5"}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(link.href.replace("#", ""));
                  }}
                >
                  {link.label}
                </Link>
              ))}
             <Button href="#contact" variant="primary">
              Get in Touch
            </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

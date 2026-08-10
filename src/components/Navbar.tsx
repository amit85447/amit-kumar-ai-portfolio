import React, { useState, useEffect } from "react";
import { MessageSquare, Download, Menu, X, Globe, User, Code2, BarChart2, FolderGit2, Compass, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  onOpenAiAssistant: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAiAssistant, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["home", "about", "skills", "projects", "analytics", "gis", "journey", "contact"];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Analytics", href: "#analytics" },
    { name: "GIS & Remote Sensing", href: "#gis" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d] py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-sky-400 transition-colors">
              Amit Kumar
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-sky-400 inline" /> Himachal Pradesh, IN
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#161b22]/80 p-1.5 rounded-full border border-[#30363d]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenAiAssistant}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30 hover:bg-purple-500/25 hover:border-purple-400 transition-all shadow-sm"
            title="Chat with Amit's AI Portfolio Assistant"
          >
            <MessageSquare className="w-4 h-4 text-purple-400 animate-pulse" />
            <span>Ask AI Assistant</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-sky-500/15 text-sky-300 border border-sky-500/30 hover:bg-sky-500/25 hover:border-sky-400 transition-all"
          >
            <Download className="w-4 h-4 text-sky-400" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAiAssistant}
            className="p-2 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30"
            aria-label="AI Assistant"
          >
            <MessageSquare className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#161b22] text-slate-300 border border-[#30363d] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1117]/95 backdrop-blur-xl border-b border-[#30363d] px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-xs font-medium text-slate-200 bg-[#161b22] border border-[#30363d] hover:border-sky-500 text-center"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-[#30363d]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAssistant();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-purple-600 text-white shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask Amit's AI Assistant</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[#161b22] border border-[#30363d] text-slate-200 hover:border-sky-500"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

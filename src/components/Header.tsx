import { useState, useEffect } from "react";
import { Menu, X, Mail, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface HeaderProps {
  onOpenChat?: () => void;
}

const Header = ({ onOpenChat }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAskAI = () => {
    setMobileMenuOpen(false);
    if (onOpenChat) {
      onOpenChat();
    } else {
      scrollToSection("experience");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-xl text-foreground hover:text-primary transition-colors"
        >
          William Hartono
        </Link>


        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          
          <a
            href="/William_Hartono_AI.pdf"
            download
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition shadow-md"
          >
            CV
          </a>

          
          
          
          
          {/* GitHub */}
          <a
            href="https://wholidi.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>        
          
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/whartono/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Email */}
          <a
            href="mailto:wholidipro@urielle-ai.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>

          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </button>

          <button
            onClick={() => scrollToSection("fit-assessment")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Fit Check
          </button>

          <button
            onClick={handleAskAI}
            className="text-sm px-4 py-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            Ask AI
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-slide-down">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>

            <button
              onClick={() => scrollToSection("fit-assessment")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Fit Check
            </button>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/whartono/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:wholidipro@urielle-ai.com"
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Email
            </a>

            <button
              onClick={handleAskAI}
              className="block w-full text-left text-accent hover:opacity-80 transition-opacity"
            >
              Ask AI About Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

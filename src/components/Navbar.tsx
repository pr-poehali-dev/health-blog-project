import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "gallery" | "articles";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "Acasă" },
  { id: "gallery", label: "Galerie" },
  { id: "articles", label: "Articole" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl animate-leaf inline-block">🌿</span>
          <span className="font-display text-xl font-semibold text-foreground tracking-wide">
            Trăiește în armonie
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-link font-body text-sm tracking-wider uppercase transition-colors ${
                currentPage === item.id
                  ? "text-primary active"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 animate-fade-in-up">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMenuOpen(false);
                }}
                className={`text-left font-body text-sm tracking-wider uppercase py-1 transition-colors ${
                  currentPage === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
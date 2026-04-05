import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NavLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-heading italic text-white text-xl md:text-2xl tracking-tight">
          Obsidian Creative
        </a>

        {/* Center Pill - Desktop */}
        <div className="hidden md:flex liquid-glass rounded-full px-6 py-2 gap-8 items-center border border-white/10">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-body font-medium text-white/90 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-white text-black font-body font-medium rounded-full px-5 py-2 text-sm hover:bg-white/90 transition-all active:scale-95"
          >
            Book a Free Call
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar/Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden">
            <button
                className="absolute top-8 right-8 text-white"
                onClick={() => setMobileMenuOpen(false)}
            >
                <X size={32} />
            </button>
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading italic text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 bg-white text-black font-body font-medium rounded-full px-8 py-4 text-lg mt-4"
          >
            Book a Free Call
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      )}
    </nav>
  );
};

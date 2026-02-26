import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Prodotti", href: "#prodotti" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const padding = useTransform(scrollY, [0, 100], [24, 12]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ paddingTop: padding, paddingBottom: padding }}
    >
      <motion.div
        className="absolute inset-0 glass-navbar border-b border-border/50"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative container mx-auto px-4 flex items-center justify-between">
        <button onClick={() => scrollTo("#home")} className="text-xl font-extrabold tracking-tight text-foreground">
          Anti<span className="text-primary">Maranz</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="nav-flip-link text-sm font-medium relative overflow-hidden"
              style={{ height: '1.5em' }}
            >
              <span className="nav-flip-top block text-muted-foreground transition-transform duration-300">{link.label}</span>
              <span className="nav-flip-bottom block text-foreground transition-transform duration-300 absolute left-0 w-full after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-primary">{link.label}</span>
            </button>
          ))}
          <Button variant="navCta" size="sm" onClick={() => scrollTo("#prodotti")}>
            Acquista Ora
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-navbar mt-2 mx-4 rounded-lg p-4 flex flex-col gap-4 border border-border/50"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <Button variant="navCta" size="sm" onClick={() => scrollTo("#prodotti")}>
            Acquista Ora
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

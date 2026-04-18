import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Experience", "Skills", "Projects", "Articles", "Education", "Languages", "Community", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      }`}
      style={scrolled ? { background: "hsla(230, 25%, 7%, 0.85)" } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-lg tracking-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "hsl(174, 80%, 50%)",
          }}
        >
          {"<SVN />"}
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="nav-link text-xs">
              {item}
            </button>
          ))}
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="social-icon" aria-label="Menu">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden backdrop-blur-xl border-b border-border/50 px-6 pb-4"
          style={{ background: "hsla(230, 25%, 7%, 0.95)" }}
        >
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left py-2.5 nav-link">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

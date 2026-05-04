import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/qe-logo.jpg";

const links = [
  { label: "Home", href: "https://www.quiltexplorer.com" },
  { label: "Design", href: "https://app.quiltexplorer.com" },
  { label: "FAQ", href: "#faq" },
  { label: "Tutorials", href: "#tutorials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-kona-chartreuse shadow-soft">
      <nav className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Quilt Explorer logo" className="h-10 w-auto rounded" />
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-md text-charcoal font-semibold hover:bg-charcoal hover:text-kona-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-charcoal"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden bg-kona-chartreuse border-t border-charcoal/10 px-4 pb-3 space-y-1">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="block px-3 py-2 rounded-md text-charcoal font-semibold hover:bg-charcoal hover:text-kona-white"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;

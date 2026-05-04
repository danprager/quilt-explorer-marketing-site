import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/qe-logo.jpg";

type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const links: NavLink[] = [
  { label: "Home", href: "https://www.quiltexplorer.com" },
  { label: "Design", href: "https://app.quiltexplorer.com" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Tutorials",
    children: [
      { label: "Half-Square Triangles (HSTs)", href: "/tutorials/hsts" },
      { label: "Quarter-Square Triangles (QSTs)", href: "/tutorials/qsts" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "The Quilt Explorer story", href: "/about/story" },
      { label: "Who are we?", href: "/about/team" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpenLabel, setMobileOpenLabel] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) =>
    setMobileOpenLabel((prev) => (prev === label ? null : label));

  return (
    <header className="sticky top-0 z-50 bg-kona-chartreuse shadow-soft">
      <nav className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Quilt Explorer logo" className="h-10 w-auto rounded" />
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) =>
            l.children ? (
              <li key={l.label} className="relative group">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md text-charcoal font-semibold hover:bg-charcoal hover:text-kona-white transition-colors inline-flex items-center gap-1"
                >
                  {l.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <ul className="absolute left-0 top-full min-w-56 bg-kona-chartreuse shadow-pop rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-opacity">
                  {l.children.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        className="block px-4 py-2 text-charcoal font-semibold hover:bg-charcoal hover:text-kona-white whitespace-nowrap"
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="px-4 py-2 rounded-md text-charcoal font-semibold hover:bg-charcoal hover:text-kona-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            )
          )}
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
          {links.map((l) =>
            l.children ? (
              <li key={l.label}>
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-charcoal font-semibold hover:bg-charcoal hover:text-kona-white"
                  onClick={() => toggleMobileDropdown(l.label)}
                >
                  {l.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileOpenLabel === l.label ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileOpenLabel === l.label && (
                  <ul className="pl-4 space-y-1">
                    {l.children.map((c) => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          className="block px-3 py-2 rounded-md text-charcoal font-semibold hover:bg-charcoal hover:text-kona-white"
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="block px-3 py-2 rounded-md text-charcoal font-semibold hover:bg-charcoal hover:text-kona-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </header>
  );
};

export default Navbar;

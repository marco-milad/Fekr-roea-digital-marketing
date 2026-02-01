import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { 
    href: "#", 
    label: "الدعاية و الاعلان", 
    hasDropdown: true,
    subLinks: [
      { href: "/#services", label: "خدماتنا" },
      { href: "/#works", label: "أعمالنا" },
    ]
  },
  { 
    href: "#", 
    label: "الصناعة", 
    hasDropdown: true,
    subLinks: [
      { href: "/#about", label: "من نحن" },
    ]
  },
  { href: "/store", label: "متجرنا" },
  { href: "/events", label: "تنظيم الحفلات و المهرجانات" },
  { href: "/decor", label: "الديكور" },
  { href: "/contact", label: "تواصل معنا" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.replace("/", "");
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://res.cloudinary.com/dcui0elwh/image/upload/v1769788840/%D9%81%D9%83%D8%B1_%D9%88%D8%B1%D9%88%D9%94%D9%8A%D8%A9_cjkpq7.png" 
              alt="Fekr & Ro'ia Logo"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className={cn(
                        "flex items-center gap-1 text-muted-foreground font-medium transition-colors hover:text-primary",
                        openDropdown === link.label && "text-primary"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === link.label && link.subLinks && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            to={subLink.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "text-muted-foreground font-medium transition-colors hover:text-primary",
                      isActive(link.href) && "text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground"
            aria-label="قائمة التنقل"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(link.label)}
                        className={cn(
                          "flex items-center justify-between w-full text-muted-foreground font-medium transition-colors hover:text-primary py-2",
                          openDropdown === link.label && "text-primary"
                        )}
                      >
                        {link.label}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", openDropdown === link.label && "rotate-180")} />
                      </button>
                      {openDropdown === link.label && link.subLinks && (
                        <div className="pr-4 border-r-2 border-primary mr-2">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              to={subLink.href}
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsMenuOpen(false);
                              }}
                              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "block text-muted-foreground font-medium transition-colors hover:text-primary py-2",
                        isActive(link.href) && "text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

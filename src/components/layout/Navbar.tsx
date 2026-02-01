import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  // إغلاق الـ dropdown لما تضغط بره
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  // إغلاق الـ mobile menu لما تغير الـ route
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.replace("/", "");
    }
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-8 lg:gap-12">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-opacity hover:opacity-80 flex-shrink-0"
            aria-label="العودة للصفحة الرئيسية"
          >
            <img 
              src="https://res.cloudinary.com/dcui0elwh/image/upload/v1769788840/%D9%81%D9%83%D8%B1_%D9%88%D8%B1%D9%88%D9%94%D9%8A%D8%A9_cjkpq7.png" 
              alt="شعار فكر ورؤية"
              className="h-18 lg:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-1" aria-label="القائمة الرئيسية">
            {navLinks.map((link) => (
              <div key={link.label} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className={cn(
                        "flex items-center gap-1 text-sm lg:text-base font-medium transition-colors hover:text-primary py-2",
                        openDropdown === link.label ? "text-primary" : "text-muted-foreground"
                      )}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openDropdown === link.label && "rotate-180"
                        )} 
                      />
                    </button>
                    {openDropdown === link.label && link.subLinks && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            to={subLink.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors rounded-md mx-1"
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
                      "text-sm lg:text-base font-medium transition-colors hover:text-primary py-2 relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                      isActive(link.href) ? "text-primary after:w-full" : "text-muted-foreground"
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
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors flex-shrink-0"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-1" aria-label="القائمة الرئيسية المحمول">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(link.label)}
                        className={cn(
                          "flex items-center justify-between w-full font-medium transition-colors hover:text-primary py-3 px-2 rounded-md hover:bg-muted/50",
                          openDropdown === link.label ? "text-primary bg-muted/30" : "text-muted-foreground"
                        )}
                        aria-expanded={openDropdown === link.label}
                      >
                        {link.label}
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200", 
                            openDropdown === link.label && "rotate-180"
                          )} 
                        />
                      </button>
                      {openDropdown === link.label && link.subLinks && (
                        <div className="pr-4 border-r-2 border-primary mr-2 mt-1 animate-in slide-in-from-top-2 duration-200">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              to={subLink.href}
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsMenuOpen(false);
                              }}
                              className="block py-2.5 px-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/30"
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
                        "block font-medium transition-colors hover:text-primary py-3 px-2 rounded-md hover:bg-muted/50",
                        isActive(link.href) ? "text-primary bg-muted/30" : "text-muted-foreground"
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
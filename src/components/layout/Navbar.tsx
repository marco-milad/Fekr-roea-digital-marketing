import { useState, useEffect, useRef, useMemo } from "react";
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
      { href: "/branding", label: "الهوية الموحدة" },
      { href: "/professional-design", label: "التصميم الاحترافي" },
      { href: "/brand-building", label: "بناء و تصميم العلامة التجارية" },
      { href: "/digital-design", label: "التصميم الرقمي و الجرافيكي" },
    ]
  },
  { href: "/manufacturing", label: "الصناعة" },
  { href: "/store", label: "متجرنا" },
  { href: "/events", label: "تنظيم الحفلات و المهرجانات" },
  { href: "/decor", label: "الديكور" },
  { href: "/contact", label: "تواصل معنا" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // إغلاق الـ dropdown لما تضغط بره
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = !Object.values(dropdownRefs.current).some(
        ref => ref?.contains(event.target as Node)
      );
      
      if (clickedOutside && openDropdown) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openDropdown]);

  // إغلاق الـ mobile menu لما تغير الـ route
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  // منع الـ scroll لما الـ mobile menu يكون مفتوح
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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

  // حساب الـ active states مرة واحدة بس
  const activeStates = useMemo(() => 
    navLinks.reduce((acc, link) => ({
      ...acc,
      [link.href]: isActive(link.href)
    }), {} as Record<string, boolean>), 
  [location.pathname, location.hash]);

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
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-1" role="navigation" aria-label="القائمة الرئيسية">
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                className="relative" 
                ref={(el) => {
                  if (link.hasDropdown) {
                    dropdownRefs.current[link.label] = el;
                  }
                }}
              >
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
                      aria-controls={`dropdown-${link.label}`}
                    >
                      {link.label}
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openDropdown === link.label && "rotate-180"
                        )} 
                        aria-hidden="true"
                      />
                    </button>
                    {openDropdown === link.label && link.subLinks && (
                      <div 
                        id={`dropdown-${link.label}`}
                        role="menu"
                        className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            to={subLink.href}
                            role="menuitem"
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
                      activeStates[link.href] ? "text-primary after:w-full" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Social Media & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a 
                href="https://snapchat.com/add/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Snapchat"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .719-.149.9-.219.18-.074.384-.16.69-.16.396 0 .77.142 1.065.401.329.285.51.66.51 1.058 0 .314-.097.614-.287.88-.394.533-1.084.758-1.744.988l-.061.021c-.378.132-.702.246-.99.573-.184.215-.375.601-.61 1.076-.076.154-.155.313-.24.478-.22.427-.577 1.072-1.028 1.072-.098 0-.198-.022-.299-.067-.344-.149-.648-.188-.936-.186-.42.002-.816.135-1.187.267-.377.135-.749.27-1.141.27-.32 0-.655-.113-.992-.227-.366-.124-.73-.246-1.098-.246-.3 0-.605.094-.913.188-.393.121-.778.237-1.17.237-.36 0-.624-.117-.824-.349-.203-.236-.359-.598-.566-1.098-.16-.385-.313-.764-.468-1.148-.236-.59-.48-1.2-.877-1.657-.345-.397-.787-.612-1.272-.612-.134 0-.268.014-.4.041-.515.106-1.038.298-1.553.487-.484.179-1.053.402-1.477-.107-.181-.218-.302-.455-.358-.695-.063-.27-.038-.553.072-.814.13-.31.35-.579.645-.802.465-.355 1.015-.503 1.552-.637l.086-.022c.408-.102.682-.182.785-.329.06-.084.104-.189.141-.301.07-.212.133-.434.197-.65.177-.602.467-1.614-.128-2.43-.44-.604-1.1-.948-1.918-.998-.18-.011-.35-.017-.512-.017C9.574 1.921 7.2.793 12.206.793zm.132 5.047c.502 0 .91.407.91.91s-.408.91-.91.91-.91-.407-.91-.91.408-.91.91-.91z"/>
                </svg>
              </a>
              
              <a 
                href="https://wa.me/201234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-border"></div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all hover:shadow-md active:scale-95"
            >
              احصل على عرض
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors flex-shrink-0"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top duration-200"
          >
            <nav className="flex flex-col gap-1" role="navigation" aria-label="القائمة الرئيسية المحمول">
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
                        aria-controls={`mobile-dropdown-${link.label}`}
                      >
                        {link.label}
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200", 
                            openDropdown === link.label && "rotate-180"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {openDropdown === link.label && link.subLinks && (
                        <div 
                          id={`mobile-dropdown-${link.label}`}
                          role="menu"
                          className="pr-4 border-r-2 border-primary mr-2 mt-1 animate-in slide-in-from-top-2 duration-200"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              to={subLink.href}
                              role="menuitem"
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
                        activeStates[link.href] ? "text-primary bg-muted/30" : "text-muted-foreground"
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
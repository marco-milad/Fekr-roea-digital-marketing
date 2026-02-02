import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-background rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-background rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            نحن هنا لندعمك في رحلتك نحو النجاح
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            تواصل معنا اليوم واحصل على استشارة مجانية لتطوير علامتك التجارية
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-8 py-4 font-bold text-background transition-all hover:bg-foreground/90 hover:shadow-2xl hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
          >
            تواصل معنا الآن
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div className="space-y-6">
              <Link to="/" className="inline-block group">
                <img 
                  src="https://res.cloudinary.com/dcui0elwh/image/upload/v1759586832/logo2_cjf7mn.jpg" 
                  alt="شعار فكر ورؤية"
                  className="h-16 w-auto object-contain transition-opacity group-hover:opacity-80"
                />
              </Link>
              <p className="text-background/80 leading-relaxed text-sm">
                وكالة رائدة في الدعاية والإعلان والتصنيع نقدم حلولاً إبداعية متكاملة لتطوير علامتك التجارية وتحقيق أهدافك
              </p>
              <div className="flex items-center gap-3 text-background/70 text-sm">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-background">ساعات العمل:</p>
                  <p>السبت - الخميس: 9 صباحاً - 6 مساءً</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-background border-b-2 border-primary pb-2 inline-block">روابط سريعة</h3>
              <ul className="space-y-3 text-background/80">
                <li>
                  <Link to="/" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link to="/manufacturing" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    الصناعة
                  </Link>
                </li>
                <li>
                  <Link to="/store" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    متجرنا
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    تنظيم الحفلات و المهرجانات
                  </Link>
                </li>
                <li>
                  <Link to="/decor" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    الديكور
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-background border-b-2 border-primary pb-2 inline-block">خدماتنا</h3>
              <ul className="space-y-3 text-background/80">
                <li>
                  <Link to="/branding" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    الهوية الموحدة
                  </Link>
                </li>
                <li>
                  <Link to="/professional-design" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    التصميم الاحترافي
                  </Link>
                </li>
                <li>
                  <Link to="/brand-building" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    بناء العلامة التجارية
                  </Link>
                </li>
                <li>
                  <Link to="/digital-design" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                    التصميم الرقمي و الجرافيكي
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-background border-b-2 border-primary pb-2 inline-block">تواصل معنا</h3>
              <ul className="space-y-4 text-background/80 mb-6">
                <li className="flex items-start gap-3 group">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">الوجه - أملج - ينبع، المملكة العربية السعودية</span>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div className="text-sm" dir="ltr">
                    <a href="tel:+966536422477" className="hover:text-primary transition-colors block">0536422477</a>
                    <a href="tel:+966553767865" className="hover:text-primary transition-colors block">0553767865</a>
                  </div>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@fekr-w-ro2ia.com" className="hover:text-primary transition-colors text-sm">
                    info@fekr-w-ro2ia.com
                  </a>
                </li>
              </ul>

              {/* Social Media */}
              <div>
                <h4 className="mb-4 text-sm font-bold text-background/90">تابعنا على:</h4>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-6 active:scale-95"
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-6 active:scale-95"
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-6 active:scale-95"
                    aria-label="Snapchat"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .719-.149.9-.219.18-.074.384-.16.69-.16.396 0 .77.142 1.065.401.329.285.51.66.51 1.058 0 .314-.097.614-.287.88-.394.533-1.084.758-1.744.988l-.061.021c-.378.132-.702.246-.99.573-.184.215-.375.601-.61 1.076-.076.154-.155.313-.24.478-.22.427-.577 1.072-1.028 1.072-.098 0-.198-.022-.299-.067-.344-.149-.648-.188-.936-.186-.42.002-.816.135-1.187.267-.377.135-.749.27-1.141.27-.32 0-.655-.113-.992-.227-.366-.124-.73-.246-1.098-.246-.3 0-.605.094-.913.188-.393.121-.778.237-1.17.237-.36 0-.624-.117-.824-.349-.203-.236-.359-.598-.566-1.098-.16-.385-.313-.764-.468-1.148-.236-.59-.48-1.2-.877-1.657-.345-.397-.787-.612-1.272-.612-.134 0-.268.014-.4.041-.515.106-1.038.298-1.553.487-.484.179-1.053.402-1.477-.107-.181-.218-.302-.455-.358-.695-.063-.27-.038-.553.072-.814.13-.31.35-.579.645-.802.465-.355 1.015-.503 1.552-.637l.086-.022c.408-.102.682-.182.785-.329.06-.084.104-.189.141-.301.07-.212.133-.434.197-.65.177-.602.467-1.614-.128-2.43-.44-.604-1.1-.948-1.918-.998-.18-.011-.35-.017-.512-.017C9.574 1.921 7.2.793 12.206.793zm.132 5.047c.502 0 .91.407.91.91s-.408.91-.91.91-.91-.407-.91-.91.408-.91.91-.91z"/>
                    </svg>
                  </a>
                  
                  <a
                    href="https://wa.me/966536422477"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-6 active:scale-95"
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:rotate-6 active:scale-95"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Links */}
      <div className="border-t border-background/10 py-6 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-background/60 text-sm">
            <p className="text-center md:text-right">
              © {currentYear} وكالة فكر ورؤية. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-xs">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
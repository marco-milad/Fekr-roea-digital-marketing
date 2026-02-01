import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
            نحن هنا لندعمك في رحلتك نحو النجاح
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            تواصل معنا اليوم واحصل على استشارة مجانية
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-8 py-3 font-medium text-background transition-all hover:bg-foreground/90"
          >
            تواصل معنا
          </Link>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <span className="text-xl font-bold text-primary-foreground">ف</span>
                </div>
                <span className="text-lg font-bold">فكر ورؤية</span>
              </div>
              <p className="text-background/70 leading-relaxed">
                وكالة رائدة في الدعاية والإعلان نقدم حلولاً إبداعية متكاملة لتطوير علامتك التجارية
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-bold">روابط سريعة</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                </li>
                <li>
                  <Link to="/#about" className="hover:text-primary transition-colors">من نحن</Link>
                </li>
                <li>
                  <Link to="/#services" className="hover:text-primary transition-colors">خدماتنا</Link>
                </li>
                <li>
                  <Link to="/#works" className="hover:text-primary transition-colors">أعمالنا</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-primary transition-colors">تواصل معنا</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-bold">تواصل معنا</h3>
              <ul className="space-y-3 text-background/70">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>الوجه - املج - ينبع</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span dir="ltr">0536422477 - 0553767865</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@fekr-w-ro2ia.com</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="mb-4 text-lg font-bold">تابعنا</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background transition-all hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10 py-6">
        <div className="container mx-auto px-4 text-center text-background/50">
          <p>© {new Date().getFullYear()} وكالة فكر ورؤية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

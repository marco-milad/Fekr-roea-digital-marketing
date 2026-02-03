import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 lg:pt-0 m-0 p-0">
      {/* Background Image with Ken Burns Effect - Full Screen */}
      <div className="absolute inset-0 z-0 w-full h-full m-0 p-0">
        <div 
          className="w-full h-full bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&q=80')`,
          }}
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-foreground/85 via-foreground/75 to-foreground/90" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse-slow" />
      </div>

      {/* Animated Background Particles/Shapes - Responsive sizes */}
      <div className="absolute inset-0 z-[1] w-full h-full overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div 
          className="absolute top-1/4 right-[5%] sm:right-[10%] w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-[5%] sm:left-[15%] w-64 h-64 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Decorative grid pattern - Responsive */}
        <div 
          className="absolute inset-0 w-full h-full opacity-5 sm:bg-[length:40px_40px] lg:bg-[length:50px_50px]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Content - Full Width with Internal Padding Only */}
      <div className="relative z-10 w-full max-w-full text-center text-background px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <AnimatedSection animation="fade-up">
          {/* Company Logo with Animation - Responsive */}
          <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-top duration-1000">
            <img 
              src="https://res.cloudinary.com/dcui0elwh/image/upload/v1769788840/%D9%81%D9%83%D8%B1_%D9%88%D8%B1%D9%88%D9%94%D9%8A%D8%A9_cjkpq7.png" 
              alt="شعار فكر ورؤية"
              className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Decorative Subtitle - Responsive */}
          <div className="mb-6 sm:mb-8 flex items-center justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-top duration-1000 delay-150">
            <span className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse" />
              <span className="text-primary font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider">
                فكر و رؤية
              </span>
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary animate-pulse delay-300" />
            </div>
            <span className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main Heading with Gradient Text - Fully responsive */}
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <span className="block mb-1 sm:mb-2">وكالة رائدة في</span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent drop-shadow-lg">
              الدعاية والإعلان
            </span>
          </h1>

          {/* Description - Responsive text and max-width */}
          <p className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-500 font-light">
            نقدم حلولاً إبداعية متكاملة لتطوير علامتك التجارية وتعزيز حضورك في السوق
            بأساليب مبتكرة وفريق محترف
          </p>

          {/* Stats/Features Quick Highlights - Fully responsive */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            <div className="flex items-center gap-1.5 sm:gap-2 bg-background/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-background/20 hover:bg-background/20 hover:scale-105 transition-all duration-300">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">خبرة احترافية</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-background/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-background/20 hover:bg-background/20 hover:scale-105 transition-all duration-300">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">فريق متخصص</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-background/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-background/20 hover:bg-background/20 hover:scale-105 transition-all duration-300">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">نتائج مضمونة</span>
            </div>
          </div>

          {/* CTA Buttons with Enhanced Design - Fully responsive */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000 max-w-2xl mx-auto">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg md:text-xl px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 lg:px-12 lg:py-8 rounded-xl font-bold shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300 active:scale-95 group relative overflow-hidden w-full sm:w-auto"
            >
              <Link to="/contact">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  تواصل معنا الآن
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-background/80 bg-background/10 backdrop-blur-md text-background hover:bg-background hover:text-foreground text-base sm:text-lg md:text-xl px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 lg:px-12 lg:py-8 rounded-xl font-bold hover:scale-105 transition-all duration-300 active:scale-95 w-full sm:w-auto"
            >
              <a href="#about">
                اكتشف خدماتنا
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>

      {/* Enhanced Scroll Indicator - Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1500">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 sm:gap-3 text-background/70 transition-all hover:text-background group"
        >
          <span className="text-xs sm:text-sm font-medium">اكتشف المزيد</span>
          <div className="h-10 w-6 sm:h-12 sm:w-7 rounded-full border-2 border-background/40 p-1 sm:p-1.5 group-hover:border-background/60 transition-colors">
            <div className="h-2.5 w-1.5 sm:h-3 sm:w-2 mx-auto rounded-full bg-background/60 animate-bounce group-hover:bg-background" />
          </div>
        </a>
      </div>

      {/* Decorative corner accents - Responsive - Full Width */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-t-2 border-r-2 border-primary/20 z-[1] pointer-events-none m-0" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-b-2 border-l-2 border-primary/20 z-[1] pointer-events-none m-0" />
    </section>
  );
}
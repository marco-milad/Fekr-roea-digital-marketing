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
    <section className="relative w-full min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden py-8 pt-20 sm:py-20 md:py-24 lg:py-0 m-0 p-0">
      {/* Background Image with Ken Burns Effect - Full Screen */}
      <div className="absolute inset-0 z-0 w-full h-full m-0 p-0">
        <div 
          className="w-full h-full bg-cover bg-center md:bg-center animate-ken-burns"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=80')`,
            backgroundPosition: 'center center',
          }}
        />
        {/* Multi-layer gradient overlay for depth - stronger on mobile for better text contrast */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground/95 md:from-foreground/85 md:via-foreground/75 md:to-foreground/90" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/15 via-transparent to-primary/15 md:from-primary/20 md:to-primary/20 animate-pulse-slow" />
      </div>

      {/* Animated Background Particles/Shapes - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 z-[1] w-full h-full overflow-hidden pointer-events-none hidden sm:block">
        {/* Floating geometric shapes */}
        <div 
          className="absolute top-1/4 right-[10%] w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-[15%] w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Decorative grid pattern */}
        <div 
          className="absolute inset-0 w-full h-full opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Content - Full Width with Internal Padding Only */}
      <div className="relative z-10 w-full max-w-full text-center text-background px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <AnimatedSection animation="fade-up">
          {/* Decorative Subtitle - Compact on mobile */}
          <div className="mb-3 sm:mb-5 md:mb-8 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 animate-in fade-in slide-in-from-top duration-1000 delay-150">
            <span className="h-px w-5 sm:w-10 md:w-16 lg:w-20 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary animate-pulse" />
              <span className="text-primary font-bold text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl tracking-wider">
                فكر و رؤية
              </span>
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-primary animate-pulse delay-300" />
            </div>
            <span className="h-px w-5 sm:w-10 md:w-16 lg:w-20 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main Heading with Gradient Text - Compact on mobile */}
          <h1 className="mb-2 sm:mb-3 md:mb-6 text-[1.625rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-snug sm:leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <span className="block mb-0.5 sm:mb-1">وكالة رائدة في</span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent drop-shadow-lg">
              الدعاية والإعلان
            </span>
          </h1>

          {/* Description - Tighter on mobile */}
          <p className="mx-auto mb-3 sm:mb-6 md:mb-10 lg:mb-12 max-w-[280px] sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-[13px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-500 font-light">
            نقدم حلولاً إبداعية متكاملة لتطوير علامتك التجارية وتعزيز حضورك في السوق
            بأساليب مبتكرة وفريق محترف
          </p>

          {/* Stats/Features Quick Highlights - More compact on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-5 lg:gap-8 mb-2.5 sm:mb-6 md:mb-10 lg:mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            <div className="flex items-center gap-0.5 sm:gap-1.5 md:gap-2 bg-background/15 backdrop-blur-sm px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1.5 md:py-2 rounded-full border border-background/30">
              <Award className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 md:h-5 md:w-5 text-primary flex-shrink-0" />
              <span className="text-[8px] sm:text-[10px] md:text-sm lg:text-base font-medium whitespace-nowrap">خبرة احترافية</span>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1.5 md:gap-2 bg-background/15 backdrop-blur-sm px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1.5 md:py-2 rounded-full border border-background/30">
              <Users className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 md:h-5 md:w-5 text-primary flex-shrink-0" />
              <span className="text-[8px] sm:text-[10px] md:text-sm lg:text-base font-medium whitespace-nowrap">فريق متخصص</span>
            </div>
            <div className="flex items-center gap-0.5 sm:gap-1.5 md:gap-2 bg-background/15 backdrop-blur-sm px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1.5 md:py-2 rounded-full border border-background/30">
              <TrendingUp className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 md:h-5 md:w-5 text-primary flex-shrink-0" />
              <span className="text-[8px] sm:text-[10px] md:text-sm lg:text-base font-medium whitespace-nowrap">نتائج مضمونة</span>
            </div>
          </div>

          {/* CTA Buttons - Compact and balanced on mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 md:gap-5 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000 w-full max-w-[300px] sm:max-w-md md:max-w-2xl mx-auto">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-[13px] sm:text-sm md:text-lg h-10 sm:h-12 md:h-14 lg:h-16 px-3 sm:px-5 md:px-8 lg:px-10 rounded-lg sm:rounded-xl font-bold shadow-xl shadow-primary/40 hover:shadow-primary/60 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] group relative overflow-hidden w-full sm:w-auto"
            >
              <Link to="/contact">
                <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                  تواصل معنا الآن
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-background/70 bg-background/10 backdrop-blur-md text-background hover:bg-background hover:text-foreground text-[13px] sm:text-sm md:text-lg h-10 sm:h-12 md:h-14 lg:h-16 px-3 sm:px-5 md:px-8 lg:px-10 rounded-lg sm:rounded-xl font-bold hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] w-full sm:w-auto"
            >
              <a href="#about">
                اكتشف خدماتنا
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>

      {/* Enhanced Scroll Indicator - Smaller on mobile */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1500">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-3 text-background/60 transition-all hover:text-background group"
        >
          <span className="text-[9px] sm:text-[10px] md:text-sm font-medium">اكتشف المزيد</span>
          <div className="h-6 w-4 sm:h-8 sm:w-5 md:h-12 md:w-7 rounded-full border border-background/40 sm:border-2 p-0.5 sm:p-1 md:p-1.5 group-hover:border-background/60 transition-colors">
            <div className="h-1.5 w-0.5 sm:h-2 sm:w-1 md:h-3 md:w-2 mx-auto rounded-full bg-background/60 animate-bounce group-hover:bg-background" />
          </div>
        </a>
      </div>

      {/* Decorative corner accents - Hidden on mobile, visible on tablet+ */}
      <div className="absolute top-0 right-0 hidden sm:block w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 border-t-2 border-r-2 border-primary/20 z-[1] pointer-events-none m-0" />
      <div className="absolute bottom-0 left-0 hidden sm:block w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 border-b-2 border-l-2 border-primary/20 z-[1] pointer-events-none m-0" />
    </section>
  );
}
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&q=80')`,
          }}
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/75 to-foreground/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse-slow" />
      </div>

      {/* Animated Background Particles/Shapes */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div 
          className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-[15%] w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-background">
        <AnimatedSection animation="fade-up">
          {/* Company Logo with Animation */}
          {/* <div className="mb-8 animate-in fade-in slide-in-from-top duration-1000">
            <img 
              src="https://res.cloudinary.com/dcui0elwh/image/upload/v1769788840/%D9%81%D9%83%D8%B1_%D9%88%D8%B1%D9%88%D9%94%D9%8A%D8%A9_cjkpq7.png" 
              alt="شعار فكر ورؤية"
              className="h-24 md:h-32 w-auto object-contain mx-auto drop-shadow-2xl"
            />
          </div> */}

          {/* Decorative Subtitle */}
          <div className="mb-8 flex items-center justify-center gap-4 animate-in fade-in slide-in-from-top duration-1000 delay-150">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary md:w-20" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-primary font-bold text-lg md:text-xl tracking-wider">
                فكر و رؤية
              </span>
              <Sparkles className="h-5 w-5 text-primary animate-pulse delay-300" />
            </div>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary md:w-20" />
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <span className="block mb-2">وكالة رائدة في</span>
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent drop-shadow-lg">
              الدعاية والإعلان
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-3xl text-lg text-background/90 md:text-xl lg:text-2xl leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-500 font-light">
            نقدم حلولاً إبداعية متكاملة لتطوير علامتك التجارية وتعزيز حضورك في السوق
            بأساليب مبتكرة وفريق محترف
          </p>

          {/* Stats/Features Quick Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full border border-background/20 hover:bg-background/20 hover:scale-105 transition-all duration-300">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base font-medium">خبرة احترافية</span>
            </div>
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full border border-background/20 hover:bg-background/20 hover:scale-105 transition-all duration-300">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base font-medium">فريق متخصص</span>
            </div>
            <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm px-4 py-2 rounded-full border border-background/20 hover:bg-background/20 hover:scale-105 transition-all duration-300">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm md:text-base font-medium">نتائج مضمونة</span>
            </div>
          </div>

          {/* CTA Buttons with Enhanced Design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-xl font-bold shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all duration-300 active:scale-95 group relative overflow-hidden"
            >
              <Link to="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  تواصل معنا الآن
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="border-2 border-background/80 bg-background/10 backdrop-blur-md text-background hover:bg-background hover:text-foreground text-lg px-10 py-7 rounded-xl font-bold hover:scale-105 transition-all duration-300 active:scale-95"
            >
              <a href="#about">
                اكتشف خدماتنا
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1500">
        <a
          href="#about"
          className="flex flex-col items-center gap-3 text-background/70 transition-all hover:text-background group"
        >
          <span className="text-sm font-medium">اكتشف المزيد</span>
          <div className="h-12 w-7 rounded-full border-2 border-background/40 p-1.5 group-hover:border-background/60 transition-colors">
            <div className="h-3 w-2 mx-auto rounded-full bg-background/60 animate-bounce group-hover:bg-background" />
          </div>
        </a>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-primary/20 z-[1] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-primary/20 z-[1] pointer-events-none" />
    </section>
  );
}
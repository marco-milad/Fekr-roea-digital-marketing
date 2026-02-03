import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { ArrowLeft, Sparkles, Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 md:py-28 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary-foreground/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Decorative Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating Icons */}
        <Sparkles className="absolute top-10 left-10 w-6 h-6 md:w-8 md:h-8 text-primary-foreground/20 animate-pulse" />
        <Sparkles className="absolute bottom-10 right-10 w-8 h-8 md:w-10 md:h-10 text-primary-foreground/20 animate-pulse delay-500" />
        <Phone className="absolute top-1/4 right-20 w-6 h-6 text-primary-foreground/10 animate-bounce" />
        <MessageCircle className="absolute bottom-1/4 left-20 w-6 h-6 text-primary-foreground/10 animate-bounce delay-300" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-4xl mx-auto">
          {/* Decorative Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
            <span className="text-primary-foreground/90 font-medium text-sm md:text-base">
              استشارة مجانية
            </span>
            <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse delay-300" />
          </div>

          {/* Main Heading - Strong Hierarchy */}
          <h2 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight">
            هل تريد معرفة المزيد
            <span className="block mt-2 text-primary-foreground/90">
              من التفاصيل؟
            </span>
          </h2>

          {/* Description - Enhanced Readability */}
          <p className="mb-8 md:mb-10 text-primary-foreground/80 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light px-4">
            تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر مخصص يناسب احتياجاتك بالضبط
          </p>

          {/* CTA Buttons Group - Multiple Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              className="group relative bg-background text-primary hover:bg-background/90 text-base md:text-lg h-12 md:h-14 lg:h-16 px-6 md:px-10 rounded-xl font-bold shadow-2xl hover:shadow-background/30 hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <span className="relative z-10">احصل على عرض مجاني</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform relative z-10" />
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 text-base md:text-lg h-12 md:h-14 lg:h-16 px-6 md:px-10 rounded-xl font-bold backdrop-blur-sm hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <a href="tel:+201234567890" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>اتصل بنا الآن</span>
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-primary-foreground/70 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">استجابة سريعة</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">استشارة مجانية</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">أسعار تنافسية</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { services } from "@/data/services";
import { Sparkles } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background overflow-x-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced Hierarchy */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-primary font-bold text-sm md:text-base tracking-wider uppercase">
                خدماتنا
              </span>
              <Sparkles className="h-4 w-4 text-primary animate-pulse delay-300" />
            </div>
            <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main Heading - Stronger Hierarchy */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            خدمات متكاملة لنجاح
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              علامتك التجارية
            </span>
          </h2>

          {/* Description - Clear Secondary Text */}
          <p className="mx-auto max-w-3xl text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed font-light px-4">
            نقدم مجموعة شاملة من الخدمات الإبداعية والتسويقية المصممة خصيصاً لتلبية جميع احتياجاتك وتحقيق أهدافك
          </p>
        </AnimatedSection>

        {/* Services Grid - Improved Spacing */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation="fade-up"
              delay={index * 100}
              className="h-full"
            >
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
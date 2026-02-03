import { Button } from "@/components/ui/button";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { clients } from "@/data/clients";
import { Sparkles, Users, ArrowLeft } from "lucide-react";

export function ClientsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-background via-secondary/30 to-background overflow-x-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced Hierarchy */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-primary font-bold text-sm md:text-base tracking-wider uppercase">
                عملاؤنا
              </span>
              <Users className="h-4 w-4 text-primary" />
            </div>
            <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main Heading - Stronger Hierarchy */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            <span className="block">شركاء</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              النجاح
            </span>
          </h2>

          {/* Description - Clear Secondary Text */}
          <p className="mx-auto max-w-3xl text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed font-light px-4">
            نفخر بالعمل مع مجموعة متميزة من العملاء والشركات الرائدة في مختلف المجالات
          </p>
        </AnimatedSection>

        {/* Clients Grid - Enhanced Spacing */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mb-12 md:mb-16">
          {clients.slice(0, 12).map((client, index) => (
            <AnimatedSection
              key={client.id}
              animation="fade-up"
              delay={index * 50}
              className="h-full"
            >
              <ClientLogo client={client} />
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button - Enhanced */}
        <AnimatedSection className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg h-12 md:h-14 px-6 md:px-8 rounded-xl font-bold hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>عرض جميع العملاء</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </span>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
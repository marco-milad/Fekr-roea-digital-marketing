import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { projects } from "@/data/projects";
import { Sparkles, ArrowLeft, Eye } from "lucide-react";

export function WorksSection() {
  return (
    <section id="works" className="relative py-24 md:py-32 bg-gradient-to-b from-secondary via-secondary/50 to-background overflow-x-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        
        {/* Decorative Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced Hierarchy */}
        <AnimatedSection className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8 mb-16 md:mb-20">
          {/* Left Side - Title */}
          <div className="flex-1">
            {/* Decorative Top Element */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-primary" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-primary font-bold text-sm md:text-base tracking-wider uppercase">
                  أعمالنا
                </span>
                <Sparkles className="h-4 w-4 text-primary animate-pulse delay-300" />
              </div>
            </div>

            {/* Main Heading - Stronger Hierarchy */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4">
              <span className="block">مشاريع</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                نفخر بها
              </span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              اكتشف مجموعة من أفضل أعمالنا التي ساعدت عملاءنا على تحقيق أهدافهم
            </p>
          </div>

          {/* Right Side - CTA Button */}
          <div className="w-full lg:w-auto">
            <Button
              asChild
              size="lg"
              className="group relative bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg h-12 md:h-14 px-6 md:px-8 rounded-xl font-bold shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 overflow-hidden w-full lg:w-auto"
            >
              <Link to="/portfolio" className="flex items-center justify-center gap-2">
                <Eye className="w-5 h-5" />
                <span className="relative z-10">عرض جميع الأعمال</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        {/* Projects List - Enhanced Spacing */}
        <div className="space-y-20 md:space-y-24">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation={index % 2 === 0 ? "slide-right" : "slide-left"}
              className="relative"
            >
              {/* Project Number Decoration */}
              <div className="absolute -top-8 left-0 md:-left-4 text-6xl md:text-8xl lg:text-9xl font-black text-primary/5 select-none pointer-events-none">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <ProjectCard project={project} reversed={index % 2 !== 0} />
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA - Encouraging More Exploration */}
        <AnimatedSection className="mt-20 md:mt-24 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm border border-primary/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <p className="text-foreground text-lg md:text-xl font-semibold">
                هل أعجبتك أعمالنا؟
              </p>
              <Sparkles className="w-5 h-5 text-primary animate-pulse delay-300" />
            </div>
            
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              دعنا نحول أفكارك إلى واقع مبهر. ابدأ مشروعك القادم معنا اليوم!
            </p>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg h-12 md:h-14 px-6 md:px-8 rounded-xl font-bold hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <span>ابدأ مشروعك الآن</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
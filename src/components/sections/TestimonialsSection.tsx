import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { useTestimonialSlider } from "@/hooks/useTestimonialSlider";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const { currentIndex, goToNext, goToPrev } = useTestimonialSlider(
    testimonials.length
  );

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background overflow-x-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        {/* Decorative Quote Marks */}
        <Quote className="absolute top-20 left-10 w-32 h-32 text-primary/5 rotate-12" />
        <Quote className="absolute bottom-20 right-10 w-40 h-40 text-primary/5 -rotate-12 scale-x-[-1]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced Hierarchy */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-primary" />
            <div className="flex items-center gap-2">
              <Quote className="h-4 w-4 text-primary" />
              <span className="text-primary font-bold text-sm md:text-base tracking-wider uppercase">
                آراء عملائنا
              </span>
              <Quote className="h-4 w-4 text-primary scale-x-[-1]" />
            </div>
            <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>

          {/* Main Heading - Stronger Hierarchy */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            <span className="block">ماذا يقول</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              عملاؤنا عنا؟
            </span>
          </h2>

          {/* Description - Clear Secondary Text */}
          <p className="mx-auto max-w-3xl text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed font-light px-4">
            نفخر بثقة عملائنا ورضاهم الكامل عن خدماتنا المتميزة وتجربتهم الاستثنائية معنا
          </p>
        </AnimatedSection>

        {/* Testimonial Slider - Enhanced Visual Focus */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative Background for Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl blur-2xl scale-105" />
          
          <AnimatedSection animation="scale" className="relative">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </AnimatedSection>

          {/* Navigation - Improved Design */}
          <div className="flex items-center justify-center gap-6 mt-10 md:mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-primary/30 bg-background text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/50"
              aria-label="السابق"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            {/* Counter with Better Styling */}
            <div className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-md">
              <span className="text-primary font-bold text-lg md:text-xl">
                {currentIndex + 1}
              </span>
              <span className="text-muted-foreground font-medium">/</span>
              <span className="text-muted-foreground font-medium text-sm md:text-base">
                {testimonials.length}
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-primary/30 bg-background text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/50"
              aria-label="التالي"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>

          {/* Dots Indicator - Optional Additional Navigation */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {}}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`الانتقال إلى الشهادة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
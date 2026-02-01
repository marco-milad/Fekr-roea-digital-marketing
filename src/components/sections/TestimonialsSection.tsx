import { ChevronRight, ChevronLeft } from "lucide-react";
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium">آراء عملائنا</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            ماذا يقول عملاؤنا عنا؟
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            نفخر بثقة عملائنا ورضاهم عن خدماتنا
          </p>
        </AnimatedSection>

        {/* Testimonial Slider */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatedSection animation="scale">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </AnimatedSection>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="السابق"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            <span className="text-muted-foreground">
              {currentIndex + 1} / {testimonials.length}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="التالي"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

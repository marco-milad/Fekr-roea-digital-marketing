import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function CTASection() {
  return (
    <section className="bg-primary py-16 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
            هل تريد معرفة المزيد من التفاصيل؟
          </h2>
          <p className="mb-8 text-primary-foreground/80 text-lg">
            تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر مخصص
          </p>
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8"
          >
            <Link to="/contact">احصل على عرض</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

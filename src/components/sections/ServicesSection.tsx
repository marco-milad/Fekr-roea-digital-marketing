import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium">خدماتنا</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            خدمات متكاملة لنجاح علامتك التجارية
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            نقدم مجموعة شاملة من الخدمات الإبداعية والتسويقية لتلبية جميع احتياجاتك
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation="fade-up"
              delay={index * 100}
            >
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

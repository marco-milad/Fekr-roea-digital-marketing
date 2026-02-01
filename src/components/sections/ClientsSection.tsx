import { Button } from "@/components/ui/button";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { clients } from "@/data/clients";

export function ClientsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="text-primary font-medium">عملاؤنا</span>
            <span className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
            شركاء النجاح
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            نفخر بالعمل مع مجموعة متميزة من العملاء والشركات
          </p>
        </AnimatedSection>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {clients.slice(0, 12).map((client, index) => (
            <AnimatedSection
              key={client.id}
              animation="fade-up"
              delay={index * 50}
            >
              <ClientLogo client={client} />
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <AnimatedSection className="text-center mt-10">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            عرض جميع العملاء
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}

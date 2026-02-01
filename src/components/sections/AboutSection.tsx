import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StatBox } from "@/components/ui/StatBox";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { stats } from "@/data/clients";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <AnimatedSection animation="slide-right">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <span className="text-primary font-medium">من نحن</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                شريكك الموثوق في عالم الإعلان والتسويق
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                نحن وكالة فكر ورؤية، وكالة دعاية وإعلان رائدة نسعى لتقديم أفضل الحلول
                الإبداعية لعملائنا. نؤمن بأن كل علامة تجارية لها قصة فريدة تستحق أن
                تُروى بطريقة مميزة.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                فريقنا من المحترفين يعمل على تحويل أفكارك إلى واقع ملموس من خلال
                تصاميم إبداعية وحملات تسويقية فعالة تحقق أهدافك وتتجاوز توقعاتك.
              </p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/contact">اعرف المزيد</Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Statistics Grid */}
          <AnimatedSection animation="slide-left">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <StatBox
                  key={stat.id}
                  label={stat.label}
                  value={stat.value}
                  delay={index * 100}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PartyPopper, Music, Camera, Utensils, Users, Mic2, Sparkles, Calendar } from "lucide-react";

const services = [
  {
    id: 1,
    title: "تنظيم المهرجانات",
    description: "تخطيط وتنفيذ المهرجانات الكبرى والفعاليات الموسمية",
    icon: PartyPopper,
  },
  {
    id: 2,
    title: "حفلات الشركات",
    description: "تنظيم حفلات التدشين والافتتاح والمناسبات الرسمية",
    icon: Users,
  },
  {
    id: 3,
    title: "الحفلات الخاصة",
    description: "أعراس، حفلات تخرج، أعياد ميلاد ومناسبات عائلية",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "التصوير والتوثيق",
    description: "تغطية احترافية بالصور والفيديو لجميع الفعاليات",
    icon: Camera,
  },
  {
    id: 5,
    title: "الصوتيات والإضاءة",
    description: "أحدث أنظمة الصوت والإضاءة الاحترافية",
    icon: Music,
  },
  {
    id: 6,
    title: "الضيافة",
    description: "خدمات ضيافة متكاملة وتقديم الطعام",
    icon: Utensils,
  },
];

const pastEvents = [
  {
    id: 1,
    title: "مهرجان الصيف ٢٠٢٤",
    location: "ينبع",
    attendees: "+٥٠٠٠",
  },
  {
    id: 2,
    title: "حفل افتتاح مول الواجهة",
    location: "الوجه",
    attendees: "+٢٠٠٠",
  },
  {
    id: 3,
    title: "ليلة التكريم السنوية",
    location: "أملج",
    attendees: "+٣٠٠",
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
              <PartyPopper className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">تنظيم الحفلات والمهرجانات</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              نصنع لحظات لا تُنسى
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              فريق متخصص في تنظيم وإدارة الفعاليات والحفلات بأعلى معايير الجودة والإبداع
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">خدماتنا</h2>
            <p className="text-muted-foreground">نقدم حلولاً متكاملة لجميع أنواع الفعاليات</p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.id} delay={index * 100}>
                  <Card className="group h-full border-0 bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">فعاليات سابقة</h2>
            <p className="text-muted-foreground">نفخر بإنجازاتنا في تنظيم الفعاليات</p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 100}>
                <Card className="border-0 bg-card shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{event.title}</h3>
                    <p className="text-muted-foreground">{event.location}</p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{event.attendees} حضور</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <Mic2 className="mx-auto mb-4 h-12 w-12 text-primary-foreground" />
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
              هل لديك مناسبة قادمة؟
            </h2>
            <p className="mb-8 text-primary-foreground/80 text-lg">
              دعنا نساعدك في تحويل فكرتك إلى حدث استثنائي
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <a href="/contact">احجز استشارة مجانية</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Events;

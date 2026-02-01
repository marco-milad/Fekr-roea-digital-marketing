import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Home, Store, Building2, Flower2, Lamp, Frame, Sofa } from "lucide-react";

const services = [
  {
    id: 1,
    title: "ديكور المحلات التجارية",
    description: "تصميم وتنفيذ ديكورات المحلات والمعارض بأحدث الأساليب",
    icon: Store,
  },
  {
    id: 2,
    title: "ديكور المكاتب",
    description: "تصميم بيئات عمل مريحة واحترافية تعزز الإنتاجية",
    icon: Building2,
  },
  {
    id: 3,
    title: "ديكور المنازل",
    description: "تصميم داخلي عصري يعكس ذوقك وشخصيتك",
    icon: Home,
  },
  {
    id: 4,
    title: "تنسيق الحدائق",
    description: "تصميم وتنفيذ الحدائق والمساحات الخارجية",
    icon: Flower2,
  },
  {
    id: 5,
    title: "الإضاءة الديكورية",
    description: "حلول إضاءة مبتكرة تضفي جواً مميزاً على المكان",
    icon: Lamp,
  },
  {
    id: 6,
    title: "اللوحات والإطارات",
    description: "لوحات فنية وإطارات مخصصة لتزيين المساحات",
    icon: Frame,
  },
];

const projects = [
  {
    id: 1,
    title: "مقهى الواجهة",
    type: "ديكور تجاري",
    description: "تصميم داخلي عصري بطابع محلي أصيل",
  },
  {
    id: 2,
    title: "مكاتب شركة الأفق",
    type: "ديكور مكاتب",
    description: "بيئة عمل مفتوحة تعزز التعاون والإبداع",
  },
  {
    id: 3,
    title: "فيلا الياسمين",
    type: "ديكور سكني",
    description: "تصميم داخلي فاخر بلمسات كلاسيكية",
  },
];

const Decor = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
              <Palette className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">الديكور</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              نحول مساحتك إلى تحفة فنية
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              نقدم حلول ديكور متكاملة للمنازل والمحلات التجارية والمكاتب بأحدث التصاميم العصرية
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">خدمات الديكور</h2>
            <p className="text-muted-foreground">نقدم حلولاً شاملة لجميع احتياجات الديكور</p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.id} delay={index * 100}>
                  <Card className="group h-full border-0 bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-7 w-7" />
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

      {/* Featured Projects */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">مشاريع مميزة</h2>
            <p className="text-muted-foreground">نماذج من أعمالنا في مجال الديكور</p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <Card className="overflow-hidden border-0 bg-card shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Sofa className="h-16 w-16 text-primary/40" />
                  </div>
                  <CardContent className="p-6">
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {project.type}
                    </span>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">كيف نعمل</h2>
            <p className="text-muted-foreground">خطوات بسيطة لتحويل رؤيتك إلى واقع</p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "١", title: "الاستشارة", desc: "نستمع لأفكارك واحتياجاتك" },
              { step: "٢", title: "التصميم", desc: "نقدم تصوراً مفصلاً للمشروع" },
              { step: "٣", title: "التنفيذ", desc: "ننفذ التصميم بدقة عالية" },
              { step: "٤", title: "التسليم", desc: "نسلم المشروع جاهزاً للاستخدام" },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
              جاهز لتحويل مساحتك؟
            </h2>
            <p className="mb-8 text-primary-foreground/80 text-lg">
              احصل على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <a href="/contact">احجز موعدك الآن</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Decor;

import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Home, Store, Building2, Flower2, Lamp, Frame, Sofa, Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";

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
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-24 md:py-32 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-6 py-3 border border-primary/30">
              <Palette className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold text-sm md:text-base tracking-wide">الديكور والتصميم الداخلي</span>
            </div>

            {/* Main Heading - Stronger Hierarchy */}
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
              <span className="block">نحول مساحتك إلى</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                تحفة فنية
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
              نقدم حلول ديكور متكاملة للمنازل والمحلات التجارية والمكاتب بأحدث التصاميم العصرية والمبتكرة
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg h-12 md:h-14 px-6 md:px-8 rounded-xl font-bold shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <a href="/contact" className="flex items-center gap-2">
                  <span>احجز استشارة مجانية</span>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg h-12 md:h-14 px-6 md:px-8 rounded-xl font-bold hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <a href="#services">استكشف الخدمات</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section id="services" className="relative py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="mb-16 md:mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-primary" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-primary font-bold text-sm md:text-base tracking-wider uppercase">
                  خدماتنا
                </span>
                <Sparkles className="h-4 w-4 text-primary animate-pulse delay-300" />
              </div>
              <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              <span className="block">خدمات</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                الديكور المتكاملة
              </span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light">
              نقدم حلولاً شاملة واحترافية لجميع احتياجات الديكور والتصميم الداخلي
            </p>
          </AnimatedSection>

          {/* Services Grid */}
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.id} delay={index * 100}>
                  <Card className="group h-full border-0 bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="mb-3 text-xl md:text-2xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects - Enhanced */}
      <section className="relative bg-gradient-to-b from-muted/30 to-background py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="mb-16 md:mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-primary" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-primary font-bold text-sm md:text-base tracking-wider uppercase">
                  أعمالنا
                </span>
                <Sparkles className="h-4 w-4 text-primary animate-pulse delay-300" />
              </div>
              <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              <span className="block">مشاريع</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                مميزة
              </span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light">
              نماذج من أفضل أعمالنا في مجال الديكور والتصميم الداخلي
            </p>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 100}>
                <Card className="group overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-primary/10 transition-all duration-300">
                    <Sofa className="h-20 w-20 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardContent className="p-6 md:p-8">
                    <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                      {project.type}
                    </span>
                    <h3 className="mb-3 text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="relative py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="mb-16 md:mb-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-primary" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-primary font-bold text-sm md:text-base tracking-wider uppercase">
                  كيف نعمل
                </span>
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>
              <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              <span className="block">خطوات بسيطة</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                لتحويل رؤيتك إلى واقع
              </span>
            </h2>
          </AnimatedSection>

          {/* Process Steps */}
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "١", title: "الاستشارة", desc: "نستمع لأفكارك واحتياجاتك بعناية" },
              { step: "٢", title: "التصميم", desc: "نقدم تصوراً مفصلاً وإبداعياً للمشروع" },
              { step: "٣", title: "التنفيذ", desc: "ننفذ التصميم بدقة عالية واحترافية" },
              { step: "٤", title: "التسليم", desc: "نسلم المشروع جاهزاً ومثالياً للاستخدام" },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-3xl font-black text-primary-foreground shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 -left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -z-10" />
                  )}
                </div>
                <h3 className="mb-3 text-xl md:text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-24 md:py-32 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <Sparkles className="absolute top-10 left-10 w-8 h-8 text-primary-foreground/20 animate-pulse" />
          <Sparkles className="absolute bottom-10 right-10 w-6 h-6 text-primary-foreground/20 animate-pulse delay-500" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse" />
              <span className="text-primary-foreground/90 font-medium text-sm md:text-base">
                استشارة مجانية
              </span>
              <Sparkles className="w-4 h-4 text-primary-foreground animate-pulse delay-300" />
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight">
              جاهز لتحويل
              <span className="block mt-2">مساحتك؟</span>
            </h2>

            {/* Description */}
            <p className="mb-10 text-primary-foreground/80 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
              احصل على استشارة مجانية وعرض سعر مخصص لمشروعك الآن
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="group bg-background text-primary hover:bg-background/90 text-base md:text-lg h-12 md:h-14 lg:h-16 px-6 md:px-10 rounded-xl font-bold shadow-2xl hover:shadow-background/30 hover:scale-105 transition-all duration-300 overflow-hidden"
              asChild
            >
              <a href="/contact" className="flex items-center gap-2">
                <span className="relative z-10">احجز موعدك الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Decor;
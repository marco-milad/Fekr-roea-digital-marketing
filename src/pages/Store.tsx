import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Gift, Award, Shirt, Package, Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    title: "أكواب مخصصة",
    description: "أكواب سيراميك وزجاجية بتصميم شعار شركتك",
    icon: Gift,
    price: "من ٢٥ ريال",
  },
  {
    id: 2,
    title: "تيشرتات مطبوعة",
    description: "تيشرتات قطنية عالية الجودة بطباعة احترافية",
    icon: Shirt,
    price: "من ٤٥ ريال",
  },
  {
    id: 3,
    title: "دروع تذكارية",
    description: "دروع كريستال وخشبية للتكريم والمناسبات",
    icon: Award,
    price: "من ١٥٠ ريال",
  },
  {
    id: 4,
    title: "أقلام دعائية",
    description: "أقلام فاخرة محفورة بشعار مؤسستك",
    icon: Sparkles,
    price: "من ٥ ريال",
  },
  {
    id: 5,
    title: "حقائب مخصصة",
    description: "حقائب قماشية وجلدية بتصميم احترافي",
    icon: ShoppingBag,
    price: "من ٣٥ ريال",
  },
  {
    id: 6,
    title: "منتجات متنوعة",
    description: "ميداليات، بطاقات، ملصقات والمزيد",
    icon: Package,
    price: "أسعار متنوعة",
  },
];

const Store = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">متجرنا</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl">
              هدايا دعائية مميزة
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              نقدم لكم تشكيلة واسعة من الهدايا الدعائية والمنتجات المخصصة التي تعكس هوية علامتكم التجارية
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <AnimatedSection key={product.id} delay={index * 100}>
                  <Card className="group h-full border-0 bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">{product.title}</h3>
                      <p className="mb-4 text-muted-foreground">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-bold">{product.price}</span>
                        <Button size="sm" variant="outline">
                          اطلب الآن
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
              هل تبحث عن منتج مخصص؟
            </h2>
            <p className="mb-8 text-primary-foreground/80 text-lg">
              تواصل معنا لتصميم منتجات دعائية حصرية لعلامتك التجارية
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
              asChild
            >
              <a href="/contact">تواصل معنا</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Store;

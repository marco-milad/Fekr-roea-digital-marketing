import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <Layout>
      {/* Hero Section - Full screen with background image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dcui0elwh/image/upload/v1760673382/photo_2025-10-17_06-53-22_hqe366.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 text-center">
          <AnimatedSection>
            {/* Main Title - Right side */}
            <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              تنظيم الحفلات و المهرجنات
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            {/* Subtitle */}
            <h2 className="mb-6 text-2xl font-semibold text-primary md:text-3xl">
              كل فعالية هي قصة جديدة تُروى
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            {/* Description */}
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
              نُعدّ من أكثر الجهات نشاطًا وفعالية في مجال تنظيم الفعاليات في مصر.
              قمنا بتنظيم أكثر من 50 فعالية ما بين إطلاق منتجات، حفلات افتتاح، مؤتمرات وحملات ترويجية.
              مهما كان نوع أو حجم الفعالية، لدينا الخبرة والرؤية لإنجاحها بأفضل شكل ممكن.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section - خدمات إدارة الفعاليات */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              خدمات إدارة الفعاليات
            </h2>
          </AnimatedSection>

          {/* Service 1: ما بعد الفعالية */}
          <div className="mb-20 grid items-center gap-10 lg:grid-cols-2">
            <AnimatedSection animation="slide-right">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://res.cloudinary.com/dcui0elwh/image/upload/v1760673382/photo_2025-10-17_06-53-22_hqe366.jpg"
                  alt="تنظيم المؤتمرات"
                  className="h-auto w-full object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                ما بعد الفعالية
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>توزيع الهدايا.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>تفكيك وتنظيف فعاليتك.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>إنتاج المواد الترويجية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>ملخص ما بعد الفعالية</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>تغطية شاملة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>تصوير الفيديو (فيديو ٣ دقائق لأبرز الأحداث)</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>

          {/* Service 2: إدارة الموقع */}
          <div className="mb-20 grid items-center gap-10 lg:grid-cols-2">
            <AnimatedSection animation="slide-left" className="order-2 space-y-4 lg:order-1">
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                إدارة الموقع
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>تسجيل المشاركين/الضيوف وتجهيز الباقة.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>تجهيز الموقع وإدارة يوم الحدث.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>جداول زمنية مفصلة، وتسلسل العرض، ونصوص مُقدّم الحفل</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>مُقدّم الحفل وتنسيق العروض.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>منسق العلاقات العامة والإعلام.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>تأجير معدات الفعاليات.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>الشاشات والخلفيات.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>فريق عمل ودود وموثوق (مُرشد/مُوظّف).</span>
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right" className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://res.cloudinary.com/dcui0elwh/image/upload/v1759453049/WhatsApp_Image_2025-09-02_at_12.53.32_33b70d9d_fg4ayu.jpg"
                  alt="إدارة الموقع"
                  className="h-auto w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Service 3: التخطيط المسبق للفعالية */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <AnimatedSection animation="slide-right">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://res.cloudinary.com/dcui0elwh/image/upload/v1760672411/OIP_1_wgj6pj.jpg"
                  alt="التخطيط المسبق للفعالية"
                  className="h-auto w-full object-cover"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                التخطيط المسبق للفعالية
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>وضع الميزانية، وتخصيصها، وإدارتها.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>وضع مسارات حرجة وجداول زمنية مفصلة خصيصًا لفعاليتك.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>بناء الهوية التجارية واستراتيجية تسويقية مخصصة.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>تخطيط وسائل التواصل الاجتماعي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>حجز المكان</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>تطوير السمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">◦</span>
                  <span>الاستلام والتوصيل</span>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="mb-8 text-2xl font-bold text-primary-foreground md:text-3xl">
              هل تريد معرفة المزيد من التفاصيل حول خدماتنا وأسعارنا؟
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90"
                asChild
              >
                <a href="/contact">احصل على عرض</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background"
                asChild
              >
                <a href="https://wa.me/+966536422477" target="_blank" rel="noopener noreferrer">
                  تواصل عبر واتساب
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Events;

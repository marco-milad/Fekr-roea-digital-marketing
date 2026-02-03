import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Sparkles, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "العنوان",
    value: "الوجه - املج - ينبع",
  },
  {
    icon: Phone,
    title: "الهاتف",
    value: "0536422477 - 0553767865",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@fekr-w-ro2ia.com",
  },
];

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.message.trim()) {
      newErrors.message = "الرسالة مطلوبة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const phoneNumber = "966536422477";
  const whatsappMessage = encodeURIComponent(
    "مرحباً، أريد الاستفسار عن خدماتكم"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center animate-ken-burns"
            style={{
              backgroundImage: "url('https://res.cloudinary.com/dcui0elwh/image/upload/v1759453049/WhatsApp_Image_2025-09-02_at_12.53.32_33b70d9d_fg4ayu.jpg')",
              backgroundPosition: 'center center',
            }}
          />
          {/* Multi-layer gradient overlay for depth - same as main hero */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-foreground/90 via-foreground/80 to-foreground/95 md:from-foreground/85 md:via-foreground/75 md:to-foreground/90" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/15 via-transparent to-primary/15 md:from-primary/20 md:to-primary/20 animate-pulse-slow" />
        </div>

        {/* Background Decorations */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-background/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-background/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <Sparkles className="absolute top-10 left-10 w-8 h-8 text-background/20 animate-pulse" />
          <Sparkles className="absolute bottom-10 right-10 w-6 h-6 text-background/20 animate-pulse delay-500" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center text-background">
          <AnimatedSection animation="fade-up">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-sm px-6 py-3 border border-background/20">
              <MessageCircle className="h-5 w-5 text-background" />
              <span className="text-background font-bold text-sm md:text-base tracking-wide">
                تواصل معنا
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block">نسعد دائماً</span>
              <span className="block mt-2 text-background/90">
                بالتواصل معك
              </span>
            </h1>

            {/* Description */}
            <p className="mb-10 text-base sm:text-lg md:text-xl lg:text-2xl text-background/80 max-w-3xl mx-auto leading-relaxed font-light">
              فريقنا المتخصص جاهز للإجابة على جميع استفساراتك ومساعدتك في تحقيق أهدافك وتطلعاتك
            </p>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-background text-primary hover:bg-background/90 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold shadow-2xl hover:shadow-background/30 hover:scale-105 transition-all duration-300 overflow-hidden relative"
            >
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform relative z-10" />
              <span className="relative z-10">تواصل عبر واتساب</span>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards - Enhanced */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center h-full">
                  <CardContent className="p-8">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <info.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl md:text-2xl font-bold text-foreground">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed" dir={info.title === "الهاتف" ? "ltr" : "rtl"}>
                      {info.value}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map - Enhanced */}
      <section className="relative py-20 md:py-28 bg-background">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection className="mb-12 md:mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-primary" />
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-primary font-bold text-sm md:text-base tracking-wider uppercase">
                  راسلنا
                </span>
                <Sparkles className="h-4 w-4 text-primary animate-pulse delay-300" />
              </div>
              <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground">
              <span className="block">نحن في</span>
              <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                انتظار رسالتك
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
            {/* Form - Enhanced */}
            <AnimatedSection animation="slide-right">
              <div className="rounded-3xl bg-gradient-to-br from-card to-card/95 p-8 md:p-10 shadow-2xl border border-primary/10">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3">
                    أرسل لنا رسالة
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg">
                    املأ النموذج وسنرد عليك في أقرب وقت
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base font-semibold">الاسم الكامل</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      className={`h-12 md:h-14 text-base ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <span>⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className={`h-12 md:h-14 text-base ${errors.email ? "border-destructive" : ""}`}
                      dir="ltr"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <span>⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-semibold">الرسالة</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                      className={`text-base resize-none ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <span>⚠</span> {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 md:h-14 text-base md:text-lg font-bold rounded-xl shadow-lg hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>جاري الإرسال...</span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>إرسال الرسالة</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map - Enhanced */}
            <AnimatedSection animation="slide-left">
              <div className="h-full min-h-[500px] lg:min-h-full overflow-hidden rounded-3xl shadow-2xl border-4 border-primary/10 relative group">
                {/* Map Overlay Badge */}
                <div className="absolute top-6 left-6 z-10 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-primary/20">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-foreground">موقعنا</span>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0123456789!2d36.4!3d26.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzAwLjAiTiAzNsKwMjQnMDAuMCJF!5e0!3m2!1sar!2ssa!4v1234567890!5m2!1sar!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقعنا على الخريطة"
                  className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
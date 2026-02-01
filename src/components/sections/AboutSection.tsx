import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { 
  Target, 
  Lightbulb, 
  Users, 
  TrendingUp,
  Award,
  Sparkles,
  CheckCircle2,
  LucideIcon
} from "lucide-react";

// Counter Animation Hook - محسّن
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - start) + start));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration, start]);

  return { count, countRef };
}

// Types
interface StatCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Stat Card Component - مع تحسينات
function StatCard({ 
  icon: Icon, 
  value, 
  label, 
  suffix = "", 
  delay = 0 
}: StatCardProps) {
  const { count, countRef } = useCountUp(value, 2500);
  
  // Format numbers للعربي
  const formattedCount = count.toLocaleString('ar-EG');

  return (
    <div 
      ref={countRef}
      className="group relative bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
      role="article"
      aria-label={`${label}: ${formattedCount}${suffix}`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
        <Icon className="w-7 h-7" aria-hidden="true" />
      </div>

      {/* Value */}
      <div className="relative">
        <h3 className="text-4xl md:text-5xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {formattedCount}{suffix}
        </h3>
        <p className="text-muted-foreground font-medium">{label}</p>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

// Feature Item Component - مع تحسينات
function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <div>
        <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export function AboutSection() {
  const stats = [
    { icon: Users, value: 500, label: "عميل راضٍ", suffix: "+" },
    { icon: Award, value: 1000, label: "مشروع ناجح", suffix: "+" },
    { icon: TrendingUp, value: 98, label: "نسبة الرضا", suffix: "%" },
    { icon: Target, value: 10, label: "سنوات خبرة", suffix: "+" },
  ];

  const features = [
    {
      icon: Lightbulb,
      title: "أفكار إبداعية",
      description: "نقدم حلول مبتكرة تميز علامتك التجارية في السوق"
    },
    {
      icon: Target,
      title: "استراتيجية فعالة",
      description: "خطط تسويقية مدروسة تحقق أهدافك بدقة"
    },
    {
      icon: Users,
      title: "فريق محترف",
      description: "خبراء متخصصون في كل مجالات الدعاية والإعلان"
    },
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary to-background/50" />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-[15%] w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }} 
        />
        
        {/* Grid Pattern - محسّن */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content Side */}
          <AnimatedSection animation="slide-right">
            <div className="space-y-8">
              {/* Section Badge */}
              <div className="inline-flex items-center gap-3 bg-primary/10 backdrop-blur-sm px-5 py-2 rounded-full border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" aria-hidden="true" />
                <span className="text-primary font-bold text-sm">من نحن</span>
              </div>

              {/* Main Heading with Gradient */}
              <h2 
                id="about-heading"
                className="text-4xl font-black text-foreground md:text-5xl lg:text-6xl leading-tight"
              >
                شريكك الموثوق في عالم
                <span className="block mt-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  الإعلان والتسويق
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-muted-foreground/90 leading-relaxed text-lg">
                  نحن <span className="font-bold text-foreground">وكالة فكر ورؤية</span>، وكالة دعاية وإعلان رائدة نسعى لتقديم أفضل الحلول
                  الإبداعية لعملائنا. نؤمن بأن كل علامة تجارية لها قصة فريدة تستحق أن
                  تُروى بطريقة مميزة.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  فريقنا من المحترفين يعمل على تحويل أفكارك إلى واقع ملموس من خلال
                  تصاميم إبداعية وحملات تسويقية فعالة تحقق أهدافك وتتجاوز توقعاتك.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-5 pt-4" role="list">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    role="listitem"
                    className="opacity-0 translate-x-8 transition-all duration-700 ease-out"
                    style={{ 
                      animation: `slideInFromRight 0.7s ease-out ${index * 150}ms forwards`,
                    }}
                  >
                    <FeatureItem {...feature} />
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group"
                >
                  <Link to="/contact">
                    <span className="flex items-center gap-2">
                      تواصل معنا
                      {/* RTL Arrow - محسّن */}
                      <svg 
                        className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 px-8 py-6 rounded-xl font-bold hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-105"
                >
                  <Link to="/#services">خدماتنا</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Grid Side */}
          <AnimatedSection animation="slide-left">
            <div 
              className="grid gap-6 sm:grid-cols-2"
              role="region"
              aria-label="إحصائيات الشركة"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                  style={{ 
                    animation: `slideInFromBottom 0.7s ease-out ${index * 100}ms forwards`,
                  }}
                >
                  <StatCard {...stat} delay={index * 100} />
                </div>
              ))}
            </div>

            {/* Additional Visual Element */}
            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">التزامنا تجاهك</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    نضمن لك تجربة استثنائية من البداية للنهاية، مع متابعة دقيقة لكل تفاصيل مشروعك
                    وتقديم الدعم المستمر لضمان نجاحك.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* CSS Animations - مضاف في الـ style tag */}
      <style>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(2rem);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
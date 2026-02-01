import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-702-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Mute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 left-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-background/20 text-background backdrop-blur-sm transition-all hover:bg-background/30"
        aria-label={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
      >
        {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      </button>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-background">
        <AnimatedSection animation="fade-up">
          {/* Subtitle */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary md:w-20" />
            <span className="text-primary font-medium text-lg">فكر و رؤية</span>
            <span className="h-px w-12 bg-primary md:w-20" />
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
            وكالة رائدة في
            <span className="text-primary"> الدعاية والإعلان</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-background/80 md:text-xl">
            نقدم حلولاً إبداعية متكاملة لتطوير علامتك التجارية وتعزيز حضورك في السوق
            بأساليب مبتكرة وفريق محترف
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              <Link to="/contact">تواصل معنا</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-6"
            >
              <a href="#about">اعرف المزيد</a>
            </Button>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-background/60 transition-colors hover:text-background"
        >
          <span className="text-sm">اكتشف المزيد</span>
          <div className="h-10 w-6 rounded-full border-2 border-background/40 p-1">
            <div className="h-2 w-1.5 mx-auto rounded-full bg-background/60 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}

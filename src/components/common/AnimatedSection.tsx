import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale";
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationClasses = {
    "fade-up": "animate-fade-in-up",
    "slide-left": "animate-slide-in-left",
    "slide-right": "animate-slide-in-right",
    scale: "animate-scale-in",
  };

  const initialClasses = {
    "fade-up": "translate-y-initial",
    "slide-left": "translate-x-left-initial",
    "slide-right": "translate-x-right-initial",
    scale: "opacity-0-initial",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isIntersecting ? animationClasses[animation] : initialClasses[animation],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

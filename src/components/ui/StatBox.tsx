import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface StatBoxProps {
  label: string;
  value: number;
  delay?: number;
}

export function StatBox({ label, value, delay = 0 }: StatBoxProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="rounded-xl bg-card p-4 shadow-md transition-all duration-300 hover:shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-lg font-bold text-primary">%{value}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            "h-full rounded-full bg-primary transition-all duration-1000 ease-out",
            isIntersecting ? "animate-progress" : ""
          )}
          style={{ width: isIntersecting ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

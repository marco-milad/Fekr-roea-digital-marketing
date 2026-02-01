import { Testimonial } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-0 bg-card shadow-lg">
      <CardContent className="p-8">
        <Quote className="mb-4 h-10 w-10 text-primary" />
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          "{testimonial.content}"
        </p>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} - {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

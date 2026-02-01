import { Service } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="group h-full border-0 bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
        <p className="mb-4 text-muted-foreground leading-relaxed">{service.description}</p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-primary font-medium transition-colors hover:text-primary/80"
        >
          اعرف المزيد
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </a>
      </CardContent>
    </Card>
  );
}

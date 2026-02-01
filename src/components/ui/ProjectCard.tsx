import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  reversed?: boolean;
}

export function ProjectCard({ project, reversed = false }: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <div className="flex-1">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-80"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
          {project.category}
        </Badge>
        <h3 className="text-2xl font-bold text-foreground lg:text-3xl">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
          {project.stats}
        </Badge>
      </div>
    </div>
  );
}

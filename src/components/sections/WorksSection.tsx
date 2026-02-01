import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import { projects } from "@/data/projects";

export function WorksSection() {
  return (
    <section id="works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-12 bg-primary" />
              <span className="text-primary font-medium">أعمالنا</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              مشاريع نفخر بها
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="#">عرض المزيد</Link>
          </Button>
        </AnimatedSection>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation={index % 2 === 0 ? "slide-right" : "slide-left"}
            >
              <ProjectCard project={project} reversed={index % 2 !== 0} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

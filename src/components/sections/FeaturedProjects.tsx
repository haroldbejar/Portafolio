import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/Badge";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { PlaceholderImage } from "../ui/PlaceholderImage";
import type { Project } from "../../types/project";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[--color-bg-surface] py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,79,224,0.08),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16">
          <SectionLabel>PROYECTOS DESTACADOS</SectionLabel>
          <SectionTitle>Soluciones que transformaron negocios</SectionTitle>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => project.featured)
            .map((project: Project) => {
              return (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-gradient-to-br from-[rgba(17,24,39,0.9)] to-[rgba(8,12,20,0.95)] shadow-[0_20px_60px_rgba(15,23,42,0.6)] transition-all duration-300 hover:border-[rgba(59,79,224,0.3)] hover:shadow-[0_30px_80px_rgba(59,79,224,0.25)]"
                >
                  <div className="relative overflow-hidden bg-[--color-bg-base]">
                    <PlaceholderImage
                      src={project.coverImage}
                      alt={project.title}
                      aspectRatio="16-10"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute right-4 top-4 flex gap-2">
                      {project.technologies?.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg bg-[rgba(59,79,224,0.18)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[--color-accent-primary] backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold tracking-[-0.04em] text-[--color-text-primary] transition-colors group-hover:text-[--color-accent-primary]">
                      {project.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-7 text-[--color-text-secondary]">
                      {project.shortDescription}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.features?.slice(0, 2).map((feature) => (
                        <Badge key={feature} className="text-[10px]">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <button
                      onClick={() => navigate(`/proyectos/${project.slug}`)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[--border] bg-[rgba(59,79,224,0.08)] px-4 py-3 text-sm font-medium text-[--color-accent-primary] transition-all hover:border-[--color-accent-primary] hover:bg-[rgba(59,79,224,0.18)]"
                    >
                      Ver proyecto
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
